const wsServer = require('ws').Server;

const server = new wsServer({
    port:8080
});

server.on("connection",function (socket) {
     socket.on("message",function (msg) {
         socket.send('服务器说:'+msg)
     })
})