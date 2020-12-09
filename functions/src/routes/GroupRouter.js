"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupRouter = void 0;
var express_1 = __importDefault(require("express"));
var GroupController_1 = require("../controller/GroupController");
exports.groupRouter = express_1.default.Router();
var groupController = new GroupController_1.GroupController();
exports.groupRouter.get("/usersByGroup", groupController.getUsersByGroup);
exports.groupRouter.get("/getByAdmin", groupController.getByAdmin);
exports.groupRouter.get("/all", groupController.getAll);
