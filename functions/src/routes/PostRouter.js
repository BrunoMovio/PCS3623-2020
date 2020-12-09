"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
var express_1 = __importDefault(require("express"));
var PostController_1 = require("../controller/PostController");
exports.postRouter = express_1.default.Router();
var postController = new PostController_1.PostController();
exports.postRouter.get("/searchByName", postController.searchByName);
exports.postRouter.get("/serachByUser", postController.getByUser);
exports.postRouter.get("/searchByGroupAndPage", postController.getByGroupAndPage);
exports.postRouter.get("/all", postController.getAll);
