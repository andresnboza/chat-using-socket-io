"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// Route imports
var index_1 = __importDefault(require("./shared/routes/index"));
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.routes();
    }
    App.prototype.routes = function () {
        this.express.use('/', index_1.default);
        this.express.all('*', function (req, res) {
            console.log("[TRACE] Server 404 request: " + req.originalUrl);
            res.sendStatus(404);
        });
    };
    return App;
}());
exports.default = new App().express;
