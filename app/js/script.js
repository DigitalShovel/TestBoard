const urlAccess = "https://testbench.auth.ca-central-1.amazoncognito.com/login?client_id=55ffriv2knsvpt7n1p49m6gghb&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+profile&redirect_uri=https://ds-testboard.netlify.app/";

//////////////////// Websockets ///////////////////////
function WebSocketTest() {
  let inputData = document.getElementById("inputData").value;

  if ("WebSocket" in window) {
    // Let us open a web socket
    //var ws = new WebSocket("wss://42jjhgjbdc.execute-api.us-east-1.amazonaws.com/production");
    var ws = new WebSocket("wss://z2l1vycpfh.execute-api.ca-central-1.amazonaws.com/production");

    ws.onopen = function () {
      // Web Socket is connected, send data using send()
      ws.send('{"action": "sendMessage","message":' + inputData + "}");
      //removeData(listOfCharts[0][0]);
    };

    ws.onmessage = function (evt) {
      var received_msg = evt.data;
      if (received_msg == "\"Testbench Started!\"") {
        removeData(Chart.getChart('T1G1C1'));
      }
      alert(received_msg);
      ws.close();
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
    //var ws = new WebSocket("wss://ekht0lzvqb.execute-api.us-east-1.amazonaws.com/production");
    var ws = new WebSocket("wss://iobkrt68o2.execute-api.ca-central-1.amazonaws.com/production");

    ws.onopen = function () {
      // Web Socket is connected, send data using send()
      ws.send('{"action": "startMap","message": "Start Map Station"}');
    };

    ws.onmessage = function (evt) {
      var received_msg = evt.data;
      alert(received_msg);
      ws.close();
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
    region: "ca-central-1",
    accessKeyId: '55ffriv2knsvpt7n1p49m6gghb'
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
    region: "ca-central-1",
  });

  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId : 'ca-central-1:db946744-dec5-45cc-b4aa-269e2b6cb9e4',
          Logins: {
            "cognito-idp.ca-central-1.amazonaws.com/ca-central-1_Lf5pWzdj2": idToken
          }
        }); 
  loadOnLogin();      /// Load all the function needed, including creating objects
}
/////////////////////////////////////////////////////////

/////// Functions to run if login is Authorized ////////

function loadOnLogin() {
  debugger;
  readItem();
}
/////////////////////////////////////////////////////////

///////////// Read CT Values from DB ////////////////////
const dataPerPlot = 91;
let maxDataPerChart = dataPerPlot; // Number of data plus one

function readCT() {
  var docClient = new AWS.DynamoDB.DocumentClient();

  var ctItem = {
    TableName: "IoT_Result",
    KeyConditionExpression: 'Station = :station and #Time > :lastTime',
    ExpressionAttributeValues: {
      ':station': 1,
      ':lastTime': BuildArray[1][1][1].timeREF
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
        if (data['Items'][i]['Time'] > BuildArray[1][1][1].timeREF){
          setProgress("PC"+data['Items'][i]['Station'], "PCT"+data['Items'][i]['Station'], data['Items'][i]['TestNumber'],data['Items'][i]['TotalTest']);
          for(var z=1; z <= 8; z++){
            BuildArray[1][1][z].timeREF = data['Items'][i]['Time'];
          }
        }
        var timeResult = JSON.stringify(data['Items'][i]['Time']);
        for(var m=1; m <= 2; m++){
          var valueCT = extractData(data['Items'][i], 'CTPI', 1, m);
          var valueESP = extractData(data['Items'][i], 'CTESP', 1, m);
          addDataChart(BuildArray[1][1][m].chart, timeResult.substring(9,18), valueCT, valueESP);
        }
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
  chart.data.datasets[0].data.push(data1);
  chart.data.datasets[1].data.push(data2);
  if (chart.data.datasets[0].data.length < (dataPerPlot-1)) {
    maxDataPerChart = chart.data.datasets[0].data.length+1;
  } else {
    maxDataPerChart = dataPerPlot;
  }
  chart.options.scales.x.max = maxDataPerChart-1;
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
let piQtyOLD = 0;
let espQtyOLD = 0;
var piQuantity = 0;

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
  /////// Add stations ////////
  
  /////////////// Refresh chart every 5 seconds /////////////
  var inverval_timer = setInterval(function () {
    readCT();
  }, 5000);
  /////////////////////////////////////////////////////////
  /////////////////////////////
}

///////////////////  Scan Database in DynamoDB //////////////////////

function scanning(PIList, ESPList, dynamClient){
  ///////////////////  Build PI List //////////////////////
  debugger
  dynamClient.scan(PIList, function(err, data) {
    if (err) {
      location.replace(urlAccess);
    } 
    else {
      piQuantity = parseInt(JSON.stringify(data['Count'], "0", 2));
      // Add Table
      removeStationTables();
      console.log("PI QTY: ", piQuantity);
      addStationTables(piQuantity);

      for (let i = 0; i < piQtyOLD; i++) {
        document.getElementById("PI#"+i).innerHTML = "Empty";
      }
      piQtyOLD = piQuantity;
      if (piQuantity > 0){
        debugger
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
      location.replace(urlAccess);
    } 
    else {
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

$( document ).ready(function() {
  // Handler for .ready() called.
  checkLogin() 
});