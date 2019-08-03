"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var EXPRESS = require('express');
var path = require('path');
// Route imports
var index_1 = __importDefault(require("./shared/routes/index"));
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        //Setting static files
        this.setStatic();
        // this.routes();
    }
    App.prototype.setStatic = function () {
        console.log(path.join(__dirname, '/public'));
        this.express.use(EXPRESS.static(path.join(__dirname, '/public')));
    };
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
