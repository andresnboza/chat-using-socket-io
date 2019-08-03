import SocketIO from 'socket.io';
import { SocketMessageType } from './socket-msg-types';

class Socket {
    public io: any;

    constructor() { }

    public setupSocket(http: any) {
        // Initilize a new instance of the socket.io by using/passing the http server
        this.io = require('socket.io')(http);

        // The following will make the server socket to listen to any event that came from the client socket
        this.io.on('connection', (client_socket: any) => {
            
            // Now we see what client is connected, each client has a different id
            console.log(`CLIENT-SOCKET WITH ID [${client_socket.id}] is connected`);
            
            //Listening for the events with "chat-message" name
            client_socket.on('chat-message', (dt: any) => {
                // console.log(`Data = {${data.username}, ${data.message}}`);
                //Now making a brodacast of the message that the server recieve from one client to all clients
                this.broadcast(dt);
            })

            //Listening to the event of someone typing
            client_socket.on('chat-typing', (username: any) => {
                //Now making a brodacast of the message that the server recieve from one client to all clients
                // except for myself
                this.broadcastExceptMe(username, client_socket);
            })
        });
    }

    // This is for making a communication with everyone
    public broadcast(data: any): void { 
        this.io.sockets.emit('server-chat-msj', data);
    }

    //THis is for making a communication with everyone except me
    private broadcastExceptMe(username: any, socket: any) {
        socket.broadcast.emit('chat-typing', username);
    }
}

export default new Socket();
