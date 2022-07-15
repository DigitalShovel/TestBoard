function WebSocketTest() {
  let inputData = document.getElementById("inputData").value;

  if ("WebSocket" in window) {
    // alert("WebSocket is supported by your Browser!");

    // Let us open a web socket
    var ws = new WebSocket("wss://42jjhgjbdc.execute-api.us-east-1.amazonaws.com/production");

    ws.onopen = function () {
      // Web Socket is connected, send data using send()
      ws.send('{"action": "sendMessage","message":' + inputData + "}");
      console.log(inputData);
      // alert("Message is sent...");
    };

    ws.onmessage = function (evt) {
      var received_msg = evt.data;
      // alert("Message is received...");
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
}
/////////////////////////////////////////////////////////

///////////// Scan Database in DynamoDB /////////////////
let piQtyOLD = 0;
let espQtyOLD = 0;
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

function scanning(PIList, ESPList, dynamClient){
  ///////////////////  Build PI List ////////////////////
  dynamClient.scan(PIList, function(err, data) {
    if (err) {
      document.getElementById("textarea").innerHTML = "Unable to read item: " + "\n" + JSON.stringify(err, undefined, 2);
    } else {
      //document.getElementById("textarea").innerHTML = JSON.stringify(data, "Empty", 2);
      var piQuantity = parseInt(JSON.stringify(data['Count'], "0", 2));
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
        document.getElementById("ESP#"+i).innerHTML = JSON.stringify("Empty", "Empty", 2);
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


function clearContent() {

}
//////////////////////////////////////////////////////////