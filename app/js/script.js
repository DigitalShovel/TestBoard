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
  var url_string = "https://ds-testboard.netlify.app/#id_token=eyJraWQiOiJNNEE3Y3JMbFpFNUwrQlNXYzV4ZGRDVXFpZENKMERRQ1dvaVBCY1JPRVdFPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiRTdqZm0tMDBkZU1RVHE3aVZKSDh3USIsInN1YiI6IjQyZTE5NDhlLWQyY2MtNDVlMy1hYjI4LTVhNDg2ODljY2U0MSIsImNvZ25pdG86Z3JvdXBzIjpbIndlYnVzZXJzIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV92VUU0NUNHS0ciLCJjb2duaXRvOnVzZXJuYW1lIjoiaHVnbyIsImNvZ25pdG86cm9sZXMiOlsiYXJuOmF3czppYW06OjA0MTg1Nzk5Nzk3Mzpyb2xlXC9Jb1RfV2ViSWRlbnRpdHlfRHluYW1vIl0sImF1ZCI6IjczcDZxbDMzb3B1aTFva3I0aGY5ZjYwbzhpIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NTc3Mjg4MzgsImV4cCI6MTY1NzczMjQzOCwiaWF0IjoxNjU3NzI4ODM4LCJqdGkiOiI4NWQyYTJmMC1kMzQ1LTQyYmUtYTJlOC1jNzhkMzMxMzNlZWMiLCJlbWFpbCI6Imh1Z29AZGlnaXRhbHNob3ZlbC5jb20ifQ.EVp_x3ZuAGTRrlJ1TdZ03Be-JEFms02EexGBKGCq5t62pZABW-4UoVcR4gpiXHayDK_1eYkLZwK7yyGaCBQbXLCKXukd_3KJbdphen-Rm0oKvlpVZzJbWW4BAxosU9SmOb6kxx95ivrU7HxprJYRjUAX9ALJK2WGj7V_qI3M0m95cbZCvnfdpARbZWLRx67Et77vdanliqNEbIVIGbWajVOQUOUfL9FTUZLR-SudkbrJU7TxWyd6GDW5TeRlnXCgKAel8OJJH2844L83kRbvK216fHyKHpFcAmkzQIo7UieLAb9L3Cd9DkryUOW3X-T-Mxkpr9KmJElkUDYrb75xSA&access_token=eyJraWQiOiJodlY1XC9LeGpnNVwvUkRZQW9hVDVxS1p5RFFOXC9lTzRiblNqVHdLbEw5cVBZPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0MmUxOTQ4ZS1kMmNjLTQ1ZTMtYWIyOC01YTQ4Njg5Y2NlNDEiLCJjb2duaXRvOmdyb3VwcyI6WyJ3ZWJ1c2VycyJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV92VUU0NUNHS0ciLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI3M3A2cWwzM29wdWkxb2tyNGhmOWY2MG84aSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4gb3BlbmlkIGVtYWlsIiwiYXV0aF90aW1lIjoxNjU3NzI4ODM4LCJleHAiOjE2NTc3MzI0MzgsImlhdCI6MTY1NzcyODgzOCwianRpIjoiZGZmMzUwMGUtN2M3OC00ZWUyLWIxZDYtZTZhMjQ2OWM3YWVhIiwidXNlcm5hbWUiOiJodWdvIn0.Rnnuu9KAQ5UA2qHiTlboFVZnJ7X8fqZIo35Kf-NxNreX043PlAYsyRYTad0tMr_CHPSc5nAYGu2rZ7HsNe5sqMP6_Rw7ojdPuURqX68caCRohfOKWxI20YK4FI9DRGJaeeG23mT6ZBdI8AqmF3NKBBHzaFetIJp1j-h2AAw5be7Pr9yTd0GjkcC8LRyUEDW7yXdaP8mik71mKr0ZqLF6fglueclAVc0wzIaFnZLypZA2tfFzubJs8vup5QX3YbupaCsj2f3gpgDvbsYnd_JbYgqS7xgep9Ilp1ZNQDYM6d6j-WtdpNJ41EuUWJBAtM7HxPRwdV0zq8q9dhe692UPWQ&expires_in=3600&token_type=Bearer"//window.location.href;
  var url = new URL(url_string);
  console.log("Before: "+idToken);
  idToken = url.searchParams.get("id_token");
  console.log("After: "+idToken);
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
    IdentityPoolId: 'us-east-1:1144803f-1500-4817-8324-4dd306317f6c',
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

function onScan(err, data){
  if (err) {
    document.getElementById("textarea").innerHTML = "Unable to read item: " + "\n" + JSON.stringify(err, undefined, 2);
  } else {
    document.getElementById("textarea").innerHTML = "GetItem succeeded: " + "\n" + JSON.stringify(data, undefined, 2);
  }
}

function readItem() {
  var docClient = new AWS.DynamoDB.DocumentClient();

  /*var params = {
    TableName: "IoT_Result_ESP32",
    Key: {
      MacAddress: "E4:5F:01:8F:E0:50",
    },
  };*/

  var item = {
    TableName: "IoT_Testing_Unit_RaspPI",
    ProjectionExpression: "MacAddress"
  };
  docClient.scan(item, onScan);
}

function signInButton() {
  var authenticationData = {
    Username: document.getElementById("inputUsername").value,
    Password: document.getElementById("inputPassword").value,
  };

  var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

  var poolData = {
    UserPoolId: "us-east-1_vUE45CGKG", // Your user pool id here
    ClientId: "73p6ql33opui1okr4hf9f60o8i", // Your client id here
  };

  var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

  var userData = {
    Username: document.getElementById("inputUsername").value,
    Pool: userPool,
  };

  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
      //console.log(JSON.stringify(result));
      let accessToken = result.getAccessToken().getJwtToken();
      idToken = accessToken;
      //console.log(accessToken);
    },

    onFailure: function (err) {
      alert(err.message || JSON.stringify(err));
    },
  });
  return accessToken;
}
