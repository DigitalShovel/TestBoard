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

var idToken = null;

function checkLogin() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  idToken = url.searchParams.get("id_token");
  if (idToken != null) {
    document.getElementById("welcomeMsg").innerHTML = "signed in";
    auth();
  }
}

function auth() {
  AWS.config.update({
    region: 'us-east-1'
  });

  AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    identityPoolId: 'us-east-1:1144803f-1500-4817-8324-4dd306317f6c',
    Logins: {
      "cognito-idp.us-east-1.amazonaws.com/us-east-1_vUE45CGKG": idToken
    }
  });
}

function insertItem() {
  var docClient = new AWS.DynamoDB.DocumentClient();

  var params = {
    TableName: "Person",
    Item: {
      FirstName: "John", // Partition Key
      LastName: "Smith", // Sort Key
      info: {
        FavoriteColor: "blue",
        YearOfBirth: 1942,
      },
    },
  };
  docClient.put(params, function (err, data) {
    if (err) {
      document.getElementById("textarea").innerHTML = "Unable to add item: " + "\n" + JSON.stringify(err, undefined, 2);
    } else {
      document.getElementById("textarea").innerHTML = "PutItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2);
    }
  });
}

function readItem() {
  checkLogin();
  auth();
  var docClient = new AWS.DynamoDB.DocumentClient();

  var params = {
    TableName: "IoT_Testing_Unit_RaspPI",
    Key: {
      MacAddress: "E4:5F:01:8F:E0:50",
    },
  };
  docClient.get(params, function (err, data) {
    if (err) {
      document.getElementById("textarea").innerHTML = "Unable to read item: " + "\n" + JSON.stringify(err, undefined, 2);
    } else {
      document.getElementById("textarea").innerHTML = "GetItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2);
    }
  });
}

function signInButton() {
  var authenticationData = {
    Username: document.getElementById("inputUsername").value,
    Password: document.getElementById("inputPassword").value,
  };

  var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

  var poolData = {
    UserPoolId: "(POOL_ID)", // Your user pool id here
    ClientId: "(APP_CLIENT_ID)", // Your client id here
  };

  var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

  var userData = {
    Username: document.getElementById("inputUsername").value,
    Pool: userPool,
  };

  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
      console.log(JSON.stringify(result));
      // var accessToken = result.getAccessToken().getJwtToken();
      // console.log(accessToken);
    },

    onFailure: function (err) {
      alert(err.message || JSON.stringify(err));
    },
  });
}
