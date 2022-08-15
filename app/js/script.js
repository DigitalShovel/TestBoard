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
    };

    ws.onmessage = function (evt) {
      var received_msg = evt.data;
      if (received_msg == "\"Testbench Started!\"") {
        /////////////// Add Station Table ////////////////////
        removeStationTables();
        addStationTables(piQuantity);
        /////////////////////////////////////////////////////
        var messageHTML = document.querySelectorAll('[id^="test-quantity-"]');
        for(var i=0; i < messageHTML.length; i++){
          messageHTML[i].innerHTML = "Test Running";
        }
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
  readItem();      /// Load all the function needed, including creating objects
}
/////////////////////////////////////////////////////////

///////////// Read CT Values from DB ////////////////////
const dataPerPlot = 91;
let maxDataPerChart = dataPerPlot; // Number of data plus one

function readCT(sta) {
  if (sta != 0){
    var docClient = new AWS.DynamoDB.DocumentClient();
    
    var ctItem = {
      TableName: "IoT_Result",
      KeyConditionExpression: 'Station = :station and #Time > :lastTime',
      ExpressionAttributeValues: {
        ':station': sta,
        ':lastTime': BuildArray[sta][1][1].timeREF
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
          ////////////////////////  Change Failed Status Light  ////////////////////////
          for(var n=1; n <=6; n++){
            BuildArray[sta][n][1].success &= data['Items'][i]['Success'][n];
            if (BuildArray[sta][n][1].success){
              document.getElementById('T1F'+n).classList.remove("indicator-light--fail", "indicator-light--success");
              document.getElementById('T1F'+n).classList.add("indicator-light--success");
              document.getElementById('T'+sta+'F'+n).classList.remove("indicator-light--fail", "indicator-light--success");
              document.getElementById('T'+sta+'F'+n).classList.add("indicator-light--success");
            }
            else {
              document.getElementById('T1F'+n).classList.remove("indicator-light--fail", "indicator-light--success");
              document.getElementById('T1F'+n).classList.add("indicator-light--fail");
              document.getElementById('T'+sta+'F'+n).classList.remove("indicator-light--fail", "indicator-light--success");
              document.getElementById('T'+sta+'F'+n).classList.add("indicator-light--fail");
            }
          }
          //////////////////////////////////////////////////////////////////////////////
          if (data['Items'][i]['Time'] > BuildArray[sta][1][1].timeREF){
            setProgress("PC"+data['Items'][i]['Station'], "PCT"+data['Items'][i]['Station'], data['Items'][i]['TestNumber'], data['Items'][i]['TotalTest']);
            ////////////// Stop logo animation if test done //////////
            if (data['Items'][i]['TotalTest'] == data['Items'][i]['TestNumber']) {
              document.getElementById('Logo'+sta).classList.add("logo-loading--disable");
            }
            //////////////////////////////////////////////////////////
            document.getElementById('test-quantity-1').innerHTML = data['Items'][i]['TestNumber']+" out of "+data['Items'][i]['TotalTest'];
            for(var z=1; z <= 8; z++){
              BuildArray[sta][1][z].timeREF = data['Items'][i]['Time'];
            }
          }
          var timeResult = JSON.stringify(data['Items'][i]['Time']);
          for(var n=1; n <=6; n++){
            for(var m=1; m <= 8; m++){
              ///// Extract CT data value /////
              var valueCTPI = extractCTData(data['Items'][i], 'CTPI', n, m);
              var valueCTESP = extractCTData(data['Items'][i], 'CTESP', n, m);
              addDataChart(BuildArray[sta][n][m].chart, timeResult.substring(9,18), valueCTPI, valueCTESP);
              ////// Extract Relay data value //////
              var valueRLYPI = extractRLYData(data['Items'][i], 'RelayPI', n, m);
              var valueRLYESP = extractRLYData(data['Items'][i], 'RelayESP', n, m);
              document.getElementById('T'+sta+'G'+n+'R'+m).classList.remove("indicator-light--fail", "indicator-light--success");
              if (valueRLYPI != valueRLYESP){
                document.getElementById('T'+sta+'G'+n+'R'+m).classList.add("indicator-light--fail");
              }
              else {
                document.getElementById('T'+sta+'G'+n+'R'+m).classList.add("indicator-light--success");
              }
            }
          }
        }
      }
    });
  }
  updateCharts(sta);
}
//////////////////////////////////////////////////////////

////////////// Update all available charts ////////////////////

function updateCharts(stations){
  for (var statio=1; statio <= stations; statio++){
    for(var n=1; n <=6; n++){
      for(var m=1; m <= 8; m++){
        BuildArray[statio][n][m].chart.update();
      }
    }
  }
}

///////////////// Collect CT data from DB //////////////////
function extractCTData(data, attribute, channel, ctnum) {
  return data[attribute][channel-1][String('CT'+ctnum)];
}

///////////////// Collect Relay data from DB //////////////////
function extractRLYData(data, attribute, channel, ctnum) {
  return data[attribute][channel-1][String('RLY'+ctnum)];
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
var espQty = 0;

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

///////////////////  Scan Database in DynamoDB //////////////////////

function scanning(PIList, ESPList, dynamClient){
  ///////////////////  Build PI List //////////////////////
  dynamClient.scan(PIList, function(err, data) {
    if (err) {
      location.replace(urlAccess);
    } 
    else {
      piQuantity = parseInt(JSON.stringify(data['Count'], "0", 2));
      document.getElementById("PI_Devices").innerHTML = piQuantity+" device(s)";
      /////////////// Add Station Table ////////////////////
      removeStationTables();
      addStationTables(piQuantity);
      readCT(piQuantity);
      /////////////// Refresh chart every 5 seconds /////////////
      var inverval_timer = setInterval(function () {
        readCT(piQuantity);
      }, 5000);
      /////////////////////////////////////////////////////////
      for (let i = 0; i < piQtyOLD; i++) {
        document.getElementById("PI#"+i).innerHTML = "Empty";
        removePIList(i);
      }
      piQtyOLD = piQuantity;
      if (piQuantity > 0){
        for (let i = 0; i < piQuantity; i++) {
          console.log("STATION: ",data['Items'][i]);
          document.getElementById("PI#"+i).innerHTML = JSON.stringify(data['Items'][i]['MacAddress'], "Empty", 2);
          refreshPIList(data['Items'][i]['Station'], piQuantity, i);
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
      espQty = parseInt(JSON.stringify(data['Count'], "0", 2));
      document.getElementById("ESP_Devices").innerHTML = espQty+" device(s)";
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
  checkLogin()
});