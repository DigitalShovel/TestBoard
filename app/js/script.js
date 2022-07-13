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

let idToken = null;

function checkLogin() {
  let url_string = window.location.href;
  let url = new URL(url_string);
  console.log("Before: "+idToken);
  idToken = url.searchParams.get("id_token");
  //idToken = "eyJraWQiOiJNNEE3Y3JMbFpFNUwrQlNXYzV4ZGRDVXFpZENKMERRQ1dvaVBCY1JPRVdFPSIsImFsZyI6IlJTMjU2In0.eyJhdF9oYXNoIjoiZ0FaQ0xLMTBaeWcyYjd1RjhSLVowdyIsInN1YiI6IjQyZTE5NDhlLWQyY2MtNDVlMy1hYjI4LTVhNDg2ODljY2U0MSIsImNvZ25pdG86Z3JvdXBzIjpbIndlYnVzZXJzIl0sImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV92VUU0NUNHS0ciLCJjb2duaXRvOnVzZXJuYW1lIjoiaHVnbyIsImNvZ25pdG86cm9sZXMiOlsiYXJuOmF3czppYW06OjA0MTg1Nzk5Nzk3Mzpyb2xlXC9Jb1RfV2ViSWRlbnRpdHlfRHluYW1vIl0sImF1ZCI6IjczcDZxbDMzb3B1aTFva3I0aGY5ZjYwbzhpIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NTc3MzAxMzcsImV4cCI6MTY1NzczMzczNywiaWF0IjoxNjU3NzMwMTM3LCJqdGkiOiI2MjQxMDdiOS00YjcxLTRmNDUtOGFhNS1kZGNkYzg1YTI0NDIiLCJlbWFpbCI6Imh1Z29AZGlnaXRhbHNob3ZlbC5jb20ifQ.RDVq2W21bHBs_nLO9RPkIFGNAwjNN7TQdDQlLzgkPavxBbd5ghWJPDFXbXW5D2IbX4t9lYoRxl6e7ABnhZ5RJrFrN6gWQkLZZzCcW5XTbMZrXK91Qf8GF4MRSKxqtKr6idJQHvCfYk8cDSBj0hMz8vAd3ZEZD1UBx2fWH0LxuK8F5g1Apv-zEHjGcxkQoczzYUDuBezoWyGh3i4tLgb2bwL1y5yidsiTteDcpfRDwg_AElZaRBp3z3TkxFaUM83iRys2CfOXhgg2dAmyd_FqxGm1VqNxMdtAJueWnWACPvAllfpNCCeXxEe_yH40gXDPIrt0s6hhWJdhdAjo_5iY7Q&access_token=eyJraWQiOiJodlY1XC9LeGpnNVwvUkRZQW9hVDVxS1p5RFFOXC9lTzRiblNqVHdLbEw5cVBZPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI0MmUxOTQ4ZS1kMmNjLTQ1ZTMtYWIyOC01YTQ4Njg5Y2NlNDEiLCJjb2duaXRvOmdyb3VwcyI6WyJ3ZWJ1c2VycyJdLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV92VUU0NUNHS0ciLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiI3M3A2cWwzM29wdWkxb2tyNGhmOWY2MG84aSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4gb3BlbmlkIGVtYWlsIiwiYXV0aF90aW1lIjoxNjU3NzMwMTM3LCJleHAiOjE2NTc3MzM3MzcsImlhdCI6MTY1NzczMDEzNywianRpIjoiYmY3ODFjYWItN2QyYi00NGJkLTk1MTEtYzU2NDY4OTQ1NDg2IiwidXNlcm5hbWUiOiJodWdvIn0.TXh1a1J_SWZnjvzf3BgYVQBVr0SnvChBdpBRCD71_SXXUjI7iJyCDM7LP3Zv7aYP5FewPbZu_zt_3zoLnUi9Br3KneuZPP3djvFJb3cuuMOKACXEPnn7Jb-T8vYvJpMO_74tB0gXELq07z4uWssQt08ENFfg2Gs-LNwjZfBF38qRH43ZQGXk2gtU2sliSqj1Qo20YPX8QmqAWKCtYxHjGC6LBCgvvgMptrAWsVQs2iY-YMN8VQ3EgDnOxJc_ybxOb0WGXMyxca8CuTO4a7pLttZ3veEt6_LoFu7gJuxvtSurJGvV5S-GLE97Xmroxe8Q28qVitRGTO_GkIizHAmaiA";
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
