"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var IndexRouter = /** @class */ (function () {
    function IndexRouter() {
        this.router = express_1.Router();
        this.init();
    }
    IndexRouter.prototype.init = function () {
        this.router.get('/', function (req, res) {
            res.send('Hello World');
        });
    };
    return IndexRouter;
}());
exports.default = new IndexRouter().router;
