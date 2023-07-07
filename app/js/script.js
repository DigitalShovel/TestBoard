const urlAccess = "https://testbench.auth.ca-central-1.amazoncognito.com/login?client_id=55ffriv2knsvpt7n1p49m6gghb&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+profile&redirect_uri=https://ds-testbench.netlify.app/";

//////////////////// Websockets ///////////////////////
function WebSocketTest() {
  let inputData = document.getElementById("inputData").value;

  if ("WebSocket" in window) {
    // Let us open a web socket
    var ws = new WebSocket("wss://z2l1vycpfh.execute-api.ca-central-1.amazonaws.com/production");

    ws.onopen = function () {
      // Web Socket is connected, send data using send()
      ws.send('{"action": "sendMessage","message": {"quantity": '+inputData+', "environment": "'+String(document.getElementById("environment").value)+'"}}');
    };

    ws.onmessage = function (evt) {
      var received_msg = evt.data;

      if (received_msg == '"Preparing new testbench database. Test will start in a few seconds."') {
        var classElements = document.getElementsByClassName("logo-loading--disable");
        for (var i = 0; i < classElements.length; i++) {
          classElements[0].classList.replace("logo-loading--disable", "logo-loading");
        }
      }

      if (received_msg == '"Testbench Started!"') {
        /////////////// Add Station Table ////////////////////
        removeStationTables();
        addStationTables(piQuantity);
        /////////////////////////////////////////////////////
        var messageHTML = document.querySelectorAll('[id^="test-quantity-"]');
        for (var i = 0; i < messageHTML.length; i++) {
          messageHTML[i].innerHTML = "Running";
        }
        ws.close();
      }
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
    var ws = new WebSocket("wss://iobkrt68o2.execute-api.ca-central-1.amazonaws.com/production");

    ws.onopen = function () {
      // Web Socket is connected, send data using send()
      var messageDict = checkStations();
      ws.send(JSON.stringify({ action: "startMap", message: messageDict }));
    };

    ws.onmessage = function (evt) {
      var received_msg = evt.data;
      alert(received_msg);
      readItem();
      ws.close();
    };
  } else {
    // The browser doesn't support WebSocket
    alert("WebSocket NOT supported by your Browser!");
  }
}
//////////////////////

function stopTestWebSocket() {
  if ("WebSocket" in window) {
    // Let us open a web socket
    var ws = new WebSocket("wss://yd4tksbjgd.execute-api.ca-central-1.amazonaws.com/production");

    ws.onopen = function () {
      // Web Socket is connected, send data using send()
      ws.send(JSON.stringify({ action: "StopTest", message: "Stop Test!" }));
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

///////// Verify Mac Address with its Station /////////
function checkStations() {
  var stationDict = {};
  for (var i = 0; i < piQuantity; i++) {
    if (parseInt(document.getElementById("station-" + (i + 1)).value) != 0){
      stationDict[String(document.getElementById("PI#" + (i + 1)).textContent)] = {'Station': document.getElementById("station-" + (i + 1)).value, 'Environ':  document.getElementById("environment").value};//document.getElementById("station-" + (i + 1)).value;
    }
  }
  return stationDict;
}

////////////// Check for Login Token //////////////////
var idToken = null;
function checkLogin() {
  var url_string = window.location.href;
  var url_string_temp = url_string.replace("#", "?");
  if (url_string.indexOf("#") !== -1) {
    location.replace(url_string_temp);
  }
  var url = new URL(url_string);
  idToken = url.searchParams.get("id_token");
  AWS.config.update({
    region: "ca-central-1",
    accessKeyId: "55ffriv2knsvpt7n1p49m6gghb",
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
    IdentityPoolId: "ca-central-1:db946744-dec5-45cc-b4aa-269e2b6cb9e4",
    Logins: {
      "cognito-idp.ca-central-1.amazonaws.com/ca-central-1_Lf5pWzdj2": idToken,
    },
  });
  readItem(); /// Load all the function needed, including creating objects
}
/////////////////////////////////////////////////////////

///////////// Read CT Values from DB ////////////////////
const dataPerPlot = 91;
let maxDataPerChart = dataPerPlot; // Number of data plus one

// Temperature Limits Variables //
var tempMin = -40;  // Given in Celsius
var tempMax = 60; // Given in Celsius
let environmentOLD = 0;

function readCT(sta) {

  if (String(document.getElementById("environment").value) != environmentOLD){
    readItem();
  }

  var CUTvalue = true;
  var numberTestCount = 0;
  if (sta != 0) {
    var docClient = new AWS.DynamoDB.DocumentClient();
    var ctItem = {
      TableName: "IoT_Result",
      KeyConditionExpression: "Station = :station and #Time > :lastTime",
      ExpressionAttributeValues: {
        ":station": sta,
        ":lastTime": BuildArray[sta][1][1].timeREF,
      },
      ExpressionAttributeNames: {
        "#Time": "Time",
      },
    };
    docClient.query(ctItem, function (err, data) {
      if (err) {
        //alert(JSON.stringify(err, undefined, 2));
        console.log("Failed to read DB. Inform server admin.");
      } else {
        for (let i = 0; i < data["Count"]; i++) {
          ////////////////////////  Change Failed Status Light  ////////////////////////
          for (var n = 1; n <= 6; n++) {
            BuildArray[sta][n][1].success &= data["Items"][i]["Success"][n];
            if (BuildArray[sta][n][1].success) {
              document.getElementById("S" + sta + "F" + n).classList.remove("indicator__light--fail", "indicator__light--success");
              document.getElementById("S" + sta + "F" + n).classList.add("indicator__light--success");
            } else {
              document.getElementById("S" + sta + "F" + n).classList.remove("indicator__light--fail", "indicator__light--success");
              document.getElementById("S" + sta + "F" + n).classList.add("indicator__light--fail");
            }
          }
          //////////////////////////////////////////////////////////////////////////////
          if (i == data["Count"] - 1) {
            var item1 = {
              TableName: "IoT_Testing_Unit_RaspPI",
              KeyConditionExpression: "MacAddress = :station",
              ExpressionAttributeValues: {
                ":station": data["Items"][i]["MacAddress"],
              },
            };
            docClient.query(item1, function (err1, data1) {
              if (err1) {
                //alert(JSON.stringify(err1, undefined, 2));
                console.log("Failed to read DB. Inform server admin.");
              } else {
                CUTvalue = data1["Items"][0]["CUT"];
                ////////////// Stop logo animation if stop button pressed //////////
                if (!CUTvalue && data["Items"][i]["TestNumber"] < data["Items"][i]["TotalTest"]) {
                  document.getElementById("test-quantity-" + sta).innerHTML = "Stopped";
                  document.getElementById("Logo" + sta).classList.add("logo-loading--disable");
                }
              }
            });
          }

          //////////////////////////////////////////////////////////////////////////////
          if (data["Items"][i]["Time"] > BuildArray[sta][1][1].timeREF) {
            setProgress("PC" + data["Items"][i]["Station"], "PCT" + data["Items"][i]["Station"], data["Items"][i]["TestNumber"], data["Items"][i]["TotalTest"]);
            ////////////// Stop logo animation if test done //////////
            if (data["Items"][i]["TotalTest"] == data["Items"][i]["TestNumber"]) {
              document.getElementById("Logo" + sta).classList.add("logo-loading--disable");
            }
            //////////////////////////////////////////////////////////
            document.getElementById("test-quantity-" + sta).innerHTML = data["Items"][i]["TestNumber"] + " out of " + data["Items"][i]["TotalTest"];
            for (var z = 1; z <= 8; z++) {
              BuildArray[sta][1][z].timeREF = data["Items"][i]["Time"];
            }
          }
          var timeResult = JSON.stringify(data["Items"][i]["Time"]);
          for (var n = 1; n <= 6; n++) {
            for (var m = 1; m <= 8; m++) {
              ///// Extract CT data value /////
              var valueCTPI = extractCTData(data["Items"][i], "CTPI", n, m);
              var valueCTESP = extractCTData(data["Items"][i], "CTESP", n, m);
              addDataChart(BuildArray[sta][n][m].chart, timeResult.substring(9, 18), valueCTPI, valueCTESP);
              ////// Extract Relay data value //////
              var valueRLYPI = extractRLYData(data["Items"][i], "RelayPI", n, m);
              var valueRLYESP = extractRLYData(data["Items"][i], "RelayESP", n, m);
              document.getElementById("S" + sta + "C" + n + "R" + m).classList.remove("indicator__light--fail", "indicator__light--success");
              ////// Extract Temp data value //////
              var valueTEMPPI = extractTEMPData(data["Items"][i], "Temp", m);
              var percTemp = Number((tempMax - Number(valueTEMPPI))*100/(tempMax - tempMin)).toFixed(2);
              document.getElementById("S" + sta + "temp" + m + "_bar").style.clipPath = 'inset(0 '+percTemp+'% 0 0)';
              document.getElementById("S" + sta + "temp" + m + "_text").innerHTML = Number(valueTEMPPI).toFixed(1)+'°C';

              ////////////////// Check for failed CT's /////////////////////
              if (!data["Items"][i]["CTSuccess"][n][m]) {
                ///////// Add the failed count number to the CT's //////////
                if (data["Items"][i]["TestNumber"] != numberTestCount) {
                  var failednumCT = 0;
                  failednumCT = Number(document.getElementById("S" + sta + "C" + n + "CN" + m).textContent);
                  failednumCT += 1;
                  if (failednumCT > data["Items"][i]["TestNumber"]) {
                    failednumCT = Number(data["Items"][i]["TestNumber"]);
                  }
                  document.getElementById("S" + sta + "C" + n + "CN" + m).innerHTML = String(failednumCT);
                  if (failednumCT > 0) {
                    document.getElementById("S" + sta + "C" + n + "CI" + m).classList.replace("indicator__failed-icon", "indicator__failed-icon--fail");
                  }
                }
              }
              ////////////////// Check for failed Relays ////////////////////
              if (valueRLYPI != valueRLYESP) {
                document.getElementById("S" + sta + "C" + n + "R" + m).classList.add("indicator__light--fail");
                ///////// Add the failed count number to the relays //////////
                if (data["Items"][i]["TestNumber"] != numberTestCount) {
                  var failednum = 0;
                  failednum = Number(document.getElementById("S" + sta + "C" + n + "RN" + m).textContent);
                  failednum += 1;
                  if (failednum > data["Items"][i]["TestNumber"]) {
                    failednum = Number(data["Items"][i]["TestNumber"]);
                  }
                  document.getElementById("S" + sta + "C" + n + "RN" + m).innerHTML = String(failednum);
                  if (failednum > 0) {
                    document.getElementById("S" + sta + "C" + n + "RI" + m).classList.replace("indicator__failed-icon", "indicator__failed-icon--fail");
                  }
                }
                /////////////////////////////////////////////////////////////
              } else {
                document.getElementById("S" + sta + "C" + n + "R" + m).classList.add("indicator__light--success");
              }
            }
          }
          if (data["Items"][i]["TestNumber"] != numberTestCount) {
            numberTestCount = data["Items"][i]["TestNumber"];
          }
        }
        if (data["Count"] != 0) {
          updateOneChart(sta);
        }
      }
    });
  }
}
//////////////////////////////////////////////////////////

////////////// Update all available charts ////////////////////

function updateOneChart(station) {
  for (var n = 1; n <= 6; n++) {
    for (var m = 1; m <= 8; m++) {
      BuildArray[station][n][m].chart.update("none");
    }
  }
}

function updateCharts(stations) {
  for (var statio = 1; statio <= stations; statio++) {
    for (var n = 1; n <= 6; n++) {
      for (var m = 1; m <= 8; m++) {
        BuildArray[statio][n][m].chart.update("none");
      }
    }
  }
}

///////////////// Collect CT data from DB //////////////////
function extractCTData(data, attribute, channel, ctnum) {
  return data[attribute][channel - 1][String("CT" + ctnum)];
}

///////////////// Collect Relay data from DB //////////////////
function extractRLYData(data, attribute, channel, ctnum) {
  return data[attribute][channel - 1][String("RLY" + ctnum)];
}

///////////////// Collect Temp data from DB //////////////////
function extractTEMPData(data, attribute, tempnum) {
  return data[attribute][0][String("Temp" + tempnum)];
}

///////////////// Add & Remove Data to Chart ////////////////////
function addDataChart(chart, label, data1, data2) {
  chart.data.labels.push(label);
  chart.data.datasets[0].data.push(data1);
  chart.data.datasets[1].data.push(data2);
  if (chart.data.datasets[0].data.length < dataPerPlot - 1) {
    maxDataPerChart = chart.data.datasets[0].data.length + 1;
  } else {
    maxDataPerChart = dataPerPlot;
  }
  chart.options.scales.x.max = maxDataPerChart - 1;
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
let totalPI = 0;
let espQtyOLD = 0;
var piQuantity = 0;
var espQty = 0;
var piQ = 0;

function readItem() {
  var docClient = new AWS.DynamoDB.DocumentClient();

  var item1 = {
    TableName: "IoT_Testing_Unit_RaspPI",
    //ProjectionExpression: "MacAddress"
  };

  var item2 = {
    TableName: "IoT_Testing_Unit_ESP32",
    //ProjectionExpression: "MacAddress"
  };
  scanning(item1, item2, docClient);
  environmentOLD = String(document.getElementById("environment").value);
}

let arrayOfPromises = [];

///////// Run script in parallel /////////////
async function process(arrayOfPromises) {
  let responses = await Promise.all(arrayOfPromises);
  //for(let r of responses) {}
  return;
}
async function handler() {
  /*let arrayOfPromises = [
    readCT(1),
    readCT(2),
  ];*/
  for (var i = 1; i <= piQ; i++){
    arrayOfPromises.push(readCT(i));
  }
  
  await process(arrayOfPromises);
}

///////////////////  Scan Database in DynamoDB //////////////////////

function scanning(PIList, ESPList, dynamClient) {
  ///////////////////  Build PI List //////////////////////
  dynamClient.scan(PIList, function (err, data) {
    if (err) {
      location.replace(urlAccess);
    } else {
      ////// Check PI quantity based on environment /////
      totalPI = parseInt(JSON.stringify(data["Count"], "0", 2));
      piQ = 0;
      for (let i = 0; i < totalPI; i++){
        if ((data["Items"][i]["Environment"] == "Sun") | (data["Items"][i]["Environment"] == String(document.getElementById("environment").value))){
          piQ += 1;
        }
      }
      console.log(piQ);
      piQuantity = parseInt(JSON.stringify(data["Count"], "0", 2));
      document.getElementById("PI_Devices").innerHTML = piQuantity + " device(s)";
      /////////////// Add Station Table ////////////////////
      removeStationTables(); 
      addStationTables(piQuantity);
      /*for (var k = 1; k <= piQuantity; k++) {
        readCT(k);
      }*/


      ///////////////////////////////////////////////////////////
      /////////////// Refresh chart every 5 seconds /////////////
      var inverval_timer = setInterval(function () {
        /*for (var k = 1; k <= piQuantity; k++) {
          readCT(k);
        }*/
        handler();
      }, 5000);
      /////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////

      removePIList(piQuantity);
      for (let i = 0; i < piQtyOLD; i++) {
        document.getElementById("PI#" + (i + 1)).innerHTML = "Empty";
      }
      piQtyOLD = piQuantity;
      if (piQuantity > 0) {
        for (let i = 0; i < piQuantity; i++) {
          document.getElementById("PI#" + (i + 1)).innerHTML = data["Items"][i]["MacAddress"];
          refreshPIList(data["Items"][i]["Station"], piQuantity, i + 1);
        }
      }
    }
  });

  ///////////////////  Build ESP List ////////////////////
  dynamClient.scan(ESPList, function (err, data) {
    if (err) {
      location.replace(urlAccess);
    } else {
      espQty = parseInt(JSON.stringify(data["Count"], "0", 2));
      document.getElementById("ESP_Devices").innerHTML = espQty + " device(s)";
      removeESPList(espQty);
      for (let i = 0; i < espQtyOLD; i++) {
        document.getElementById("ESP#" + (i + 1)).innerHTML = "Empty";
      }
      espQtyOLD = espQty;
      if (espQty > 0) {

        const sortByTwo = (arr = []) => {
          arr.sort((a, b) => {
             return a.Station - b.Station || a.Channel - b.Channel;
          });
        };
        sortByTwo(data["Items"]);

        for (let i = 0; i < espQty; i++) {
          document.getElementById("ESP#" + (i + 1)).innerHTML = data["Items"][i]["MacAddress"];
          refreshESPList(data["Items"][i]["Station"], data["Items"][i]["Channel"], i + 1);
        }
      }
    }
  });
}
//////////////////////////////////////////////////////////

$(document).ready(function () {
  checkLogin();
  addStationTables(1);
});
