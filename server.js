const WebSocket = require('ws');

const wsServer = new WebSocket.Server({port: 9000});

function onConnect(wsClient) {
    wsClient.send('Hi');
    wsClient.on('message', function(message) {

   })
    wsClient.on('close', function() {

   })
}


wsServer.on('connection', onConnect);
