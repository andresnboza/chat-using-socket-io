"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = __importStar(require("http"));
var socket_1 = __importDefault(require("./shared/lib/socket.io/socket"));
var app_1 = __importDefault(require("./app"));
process.on('uncaughtException', function (err) {
    console.log(err);
});
function normalizePort(val) {
    // tslint:disable-next-line:no-shadowed-variable
    var port = (typeof val === 'string') ? parseInt(val, 10) : val;
    if (isNaN(port)) {
        return val;
    }
    else {
        if (port >= 0) {
            return port;
        }
        else {
            return false;
        }
    }
}
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    var bind = (typeof port === 'string') ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + " requires elevated privileges");
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + " is already in use");
            process.exit(1);
            break;
        default:
            throw error;
    }
}
function onListening() {
    var addr = httpServer.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log("Server is listening on " + bind);
}
var env = require('../config/config');
var port = normalizePort(process.env.PORT || 8080);
app_1.default.set('port', port);
var httpServer;
httpServer = http.createServer(app_1.default);
httpServer.listen(port);
httpServer.on('error', onError);
httpServer.on('listening', onListening);
//Now working on setting up the socket
socket_1.default.setupSocket(httpServer);
