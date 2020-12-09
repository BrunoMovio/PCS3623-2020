"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
var express_1 = __importDefault(require("express"));
var UserController_1 = require("../controller/UserController");
exports.userRouter = express_1.default.Router();
var userController = new UserController_1.UserController();
exports.userRouter.get("/search", userController.searchUserByName);
exports.userRouter.get("/followeds", userController.getFolloweds);
exports.userRouter.get("/followers", userController.getFollowers);
exports.userRouter.get("/feed", userController.getFeed);
exports.userRouter.get("/all", userController.getAll);
