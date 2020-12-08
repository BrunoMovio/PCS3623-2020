import express from "express"
import { PostController } from "../controller/PostController"

export const postRouter = express.Router()

const postController = new PostController()

postRouter.get("/searchByName", postController.searchByName)
postRouter.get("/serachByUser", postController.getByUser)
postRouter.get("/searchByGroupAndPage", postController.getByGroupAndPage)
postRouter.get("/all", postController.getAll)




