"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageRouter = void 0;
var express_1 = __importDefault(require("express"));
var PageController_1 = require("../controller/PageController");
exports.pageRouter = express_1.default.Router();
var pageController = new PageController_1.PageController();
exports.pageRouter.get("/search", pageController.searchPageByName);
exports.pageRouter.get("/likes", pageController.getLikes);
exports.pageRouter.get("/all", pageController.getAll);
