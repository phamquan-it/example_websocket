const WebSocket = require("ws");
const wss = new WebSocket.Server({"port":8080});
wss.on("connection", function connection(ws){
	console.log("A new   client connected");
	ws.on('message',function incoming(message){
		console.log('Revceive %', message.toString('utf8'));
		ws.send("hello  client");	
	});
	ws.on('close',  function  close(){
		console.log("Client disconected");
	})
})
