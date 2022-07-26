const urlAccess = "https://testboard.auth.us-east-1.amazoncognito.com/login?client_id=73p6ql33opui1okr4hf9f60o8i&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+profile&redirect_uri=https://ds-testboard.netlify.app/";

//////////////////// Websockets ///////////////////////
function WebSocketTest() {
  let inputData = document.getElementById("inputData").value;

  if ("WebSocket" in window) {
    // Let us open a web socket
    var ws = new WebSocket("wss://42jjhgjbdc.execute-api.us-east-1.amazonaws.com/production");

    ws.onopen = function () {
      // Web Socket is connected, send data using send()
      if (!registeredUser) {
        location.replace(urlAccess);
      } else {
        ws.send('{"action": "sendMessage","message":' + inputData + "}");
        removeData(listOfCharts[0][0]);
      }
    };

    ws.onmessage = function (evt) {
      var received_msg = evt.data;
      alert(received_msg);
    };

    ws.onclose = function () {
      // websocket is closed.
      //alert("Connection is closed...");
    };
  } else {
    // The browser doesn't support WebSocket
    alert("WebSocket NOT supported by your Browser!");
  }
}
//////////////////

function mapStationWebSocket() {
  if ("WebSocket" in window) {
    // Let us open a web socket
    var ws = new WebSocket("wss://ekht0lzvqb.execute-api.us-east-1.amazonaws.com/production");

    ws.onopen = function () {
      // Web Socket is connected, send data using send()
      if (!registeredUser) {
        location.replace(urlAccess);
      } else {
        ws.send('{"action": "startMap","message": "Start Map Station"}');
      }
    };

    ws.onmessage = function (evt) {
      var received_msg = evt.data;
      alert(received_msg);
    };
  } else {
    // The browser doesn't support WebSocket
    alert("WebSocket NOT supported by your Browser!");
  }
}
//////////////////////

////////////// Check for Login Token //////////////////
var idToken = null;
function checkLogin() {
  var url_string = window.location.href;
  var url_string_temp = url_string.replace('#', '?');
  if (url_string.indexOf('#') !== -1){
    location.replace(url_string_temp);
  }
  var url = new URL(url_string);
  idToken = url.searchParams.get("id_token");
  AWS.config.update({
    region: "us-east-1",
    accessKeyId: '73p6ql33opui1okr4hf9f60o8i'
  });
  if (idToken != null) {
      console.log("User Signed In!");
      auth();
  }
}
////////////////////////////////////////////////////////

///////////////////// Authorize ////////////////////////
function auth() {
  AWS.config.update({
    region: "us-east-1",
  });

  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId : 'us-east-1:d6b1278c-6298-4582-9074-51139238607e',
          Logins: {
            "cognito-idp.us-east-1.amazonaws.com/us-east-1_vUE45CGKG": idToken
          }
        }); 
  loadOnLogin();      /// Load all the function needed, including creating objects
  /////////////// Refresh chart every 5 seconds /////////////
  const inverval_timer = setInterval(function() { 
    readCT(listOfDateLabel[0][0]);
  }, 5000);
}
/////////////////////////////////////////////////////////

/////// Functions to run if login is Authorized /////////
let registeredUser = false;
function loadOnLogin() {
  readCT(listOfDateLabel[0][0]);
  readItem();
  registeredUser = true;
}
/////////////////////////////////////////////////////////

///////////// Read CT Values from DB ////////////////////
function readCT(labelOBJ) {
  var docClient = new AWS.DynamoDB.DocumentClient();

  var ctItem = {
    TableName: "IoT_Result",
    KeyConditionExpression: 'Station = :station and #Time > :lastTime',
    ExpressionAttributeValues: {
      ':station': 1,
      ':lastTime': labelOBJ.dateLabel
    },
    ExpressionAttributeNames: {
      "#Time": "Time"
    }
  };
  docClient.query(ctItem, function(err, data) {
    if (err) {
      alert(JSON.stringify(err, undefined, 2));
    }
    else {
      for (let i=0; i < data['Count']; i++) {
        if (data['Items'][i]['Time'] > labelOBJ.dateLabel){
          labelOBJ.dateLabel = data['Items'][i]['Time'];
          maxDataPerChart = (12*Number(data['Items'][i]['TestNumber']))+1;
        }
        var timeResult = JSON.stringify(data['Items'][i]['Time']);
        var valueCT = extractData(data['Items'][i], 'CTPI', 1, 1);
        var valueESP = extractData(data['Items'][i], 'CTESP', 1, 1);
        addDataChart(listOfCharts[0][0], timeResult.substring(9,18), valueCT, valueESP);
      }
    }
  });
}
//////////////////////////////////////////////////////////

////////////// Check Last Label Value ////////////////////

///////////////// Collect data from DB //////////////////
function extractData(data, attribute, channel, ctnum) {
  return data[attribute][channel-1][String('CT'+ctnum)];
}

///////////////// Add & Remove Data to Chart ////////////////////
function addDataChart(chart, label, data1, data2) {
  chart.data.labels.push(label);
  /*chart.data.datasets[0].forEach((dataset) => {
    dataset.data.push(data);
  });*/
  chart.data.datasets[0].data.push(data1);
  chart.data.datasets[1].data.push(data2);
  chart.update("active");
}

function removeData(chart) {

  let total = chart.data.labels.length;

  while (total >= 0) {
      chart.data.labels.pop();
      chart.data.datasets[0].data.pop();
      chart.data.datasets[1].data.pop();
      total--;
  }
  chart.update("none");
}

///////////// Set DB table to be scanned /////////////////
function readItem() {
  var docClient = new AWS.DynamoDB.DocumentClient();

  var item1 = {
    TableName: "IoT_Testing_Unit_RaspPI",
    ProjectionExpression: "MacAddress"
  };

  var item2 = {
    TableName: "IoT_Testing_Unit_ESP32",
    ProjectionExpression: "MacAddress"
  };
  scanning(item1, item2, docClient);
}
/////////////////////////////////////////////////////////

///////////////////  Scan Database in DynamoDB //////////////////////
let piQtyOLD = 0;
let espQtyOLD = 0;
function scanning(PIList, ESPList, dynamClient){

  ///////////////////  Build PI List //////////////////////
  dynamClient.scan(PIList, function(err, data) {
    if (err) {
      location.replace(urlAccess);
    } 
    else {
      var piQuantity = parseInt(JSON.stringify(data['Count'], "0", 2));
      console.log("Total of Stations: "+piQuantity);
      for (let i = 0; i < piQtyOLD; i++) {
        document.getElementById("PI#"+i).innerHTML = "Empty";
      }
      piQtyOLD = piQuantity;
      if (piQuantity > 0){
        for (let i = 0; i < piQuantity; i++) {
          document.getElementById("PI#"+i).innerHTML = JSON.stringify(data['Items'][i]['MacAddress'], "Empty", 2);
        }
      }
    } 
  }
  );

  ///////////////////  Build ESP List ////////////////////
  dynamClient.scan(ESPList, function(err, data) {
    if (err) {
      document.getElementById("textarea").innerHTML = "Unable to read item: " + "\n" + JSON.stringify(err, undefined, 2);
    } else {
      //document.getElementById("textarea").innerHTML = JSON.stringify(data, "Empty", 2);
      var espQty = parseInt(JSON.stringify(data['Count'], "0", 2));
      for (let i = 0; i < espQtyOLD; i++) {
        document.getElementById("ESP#"+i).innerHTML = "Empty";
      }
      espQtyOLD = espQty;
      if (espQty > 0){
        for (let i = 0; i < espQty; i++) {
          document.getElementById("ESP#"+i).innerHTML = JSON.stringify(data['Items'][i]['MacAddress'], "Empty", 2);
        }
      }
    }
  }
  );
}
//////////////////////////////////////////////////////////