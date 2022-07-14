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
      alert("Connection is closed...");
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
  var url = new URL(url_string);
  idToken = url.searchParams.get("id_token");
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
  //  endpoint: 'http://localhost:8000', // If you use dynamoDB installed locally
  //  accessKeyId: "(ACCESS_KEY_ID)",
  //  secretAccessKey: "(SECRET_ACCESS_KEY)"
  });

  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId : 'us-east-1:d6b1278c-6298-4582-9074-51139238607e',
          Logins : {
            "cognito-idp.us-east-1.amazonaws.com/us-east-1_vUE45CGKG": idToken
          }
        });
}
/////////////////////////////////////////////////////////

///////////// Scan Database in DynamoDB /////////////////
function readItem() {
  var docClient = new AWS.DynamoDB.DocumentClient();

  var item = {
    TableName: "IoT_Testing_Unit_RaspPI",
    ProjectionExpression: "MacAddress"
  };

  docClient.scan(item, function(err, data) {
    if (err) {
      document.getElementById("textarea").innerHTML = "Unable to read item: " + "\n" + JSON.stringify(err, undefined, 2);
    } else {
      document.getElementById("textarea").innerHTML = "GetItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2);
    }
  }
  );
}
//////////////////////////////////////////////////////////