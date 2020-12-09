"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var UserRouter_1 = require("./routes/UserRouter");
var GroupRouter_1 = require("./routes/GroupRouter");
var PostRouter_1 = require("./routes/PostRouter");
var EventRouter_1 = require("./routes/EventRouter");
var PageRouter_1 = require("./routes/PageRouter");
dotenv_1.default.config();
var cors = require('cors');
var app = express_1.default();
app.use(cors());
app.use(express_1.default.json());
app.use("/user", UserRouter_1.userRouter);
app.use("/group", GroupRouter_1.groupRouter);
app.use("/post", PostRouter_1.postRouter);
app.use("/pageEvent", EventRouter_1.eventRouter);
app.use("/page", PageRouter_1.pageRouter);
var server = app.listen(5500, function () {
    if (server) {
        var address = server.address();
        console.log("Servidor rodando em http://localhost:" + address.port);
    }
    else {
        console.error("Falha ao rodar o servidor.");
    }
});
