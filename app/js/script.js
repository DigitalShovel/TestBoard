function WebSocketTest() {
   let inputData = document.getElementById("inputData").value;

   if ("WebSocket" in window) {
      alert("WebSocket is supported by your Browser!");

      // Let us open a web socket
      var ws = new WebSocket("wss://42jjhgjbdc.execute-api.us-east-1.amazonaws.com/production");

      ws.onopen = function () {
         // Web Socket is connected, send data using send()
         ws.send("{\"action\": \"sendMessage\",\"message\":" + inputData + "}");
         console.log(inputData)
         alert("Message is sent...");
      };

      ws.onmessage = function (evt) {
         var received_msg = evt.data;
         alert("Message is received...");
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