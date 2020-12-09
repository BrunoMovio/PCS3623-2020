"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventRouter = void 0;
var express_1 = __importDefault(require("express"));
var EventController_1 = require("../controller/EventController");
exports.eventRouter = express_1.default.Router();
var eventController = new EventController_1.EventController();
exports.eventRouter.get("/searchByPage", eventController.searchByPage);
exports.eventRouter.get("/searchByDate", eventController.searchByDate);
exports.eventRouter.get("/all", eventController.getAll);
