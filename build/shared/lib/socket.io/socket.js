"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Socket = /** @class */ (function () {
    function Socket() {
    }
    Socket.prototype.setupSocket = function (http) {
        var _this = this;
        // Initilize a new instance of the socket.io by using/passing the http server
        this.io = require('socket.io')(http);
        // The following will make the server socket to listen to any event that came from the client socket
        this.io.on('connection', function (client_socket) {
            // Now we see what client is connected, each client has a different id
            console.log("CLIENT-SOCKET WITH ID [" + client_socket.id + "] is connected");
            //Listening for the events with "chat-message" name
            client_socket.on('chat-message', function (dt) {
                // console.log(`Data = {${data.username}, ${data.message}}`);
                //Now making a brodacast of the message that the server recieve from one client to all clients
                _this.broadcast(dt);
            });
            //Listening to the event of someone typing
            client_socket.on('chat-typing', function (username) {
                //Now making a brodacast of the message that the server recieve from one client to all clients
                // except for myself
                _this.broadcastExceptMe(username, client_socket);
            });
        });
    };
    // This is for making a communication with everyone
    Socket.prototype.broadcast = function (data) {
        this.io.sockets.emit('server-chat-msj', data);
    };
    //THis is for making a communication with everyone except me
    Socket.prototype.broadcastExceptMe = function (username, socket) {
        socket.broadcast.emit('chat-typing', username);
    };
    return Socket;
}());
exports.default = new Socket();
