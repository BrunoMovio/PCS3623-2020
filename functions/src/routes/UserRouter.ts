import express from "express"
import { UserController } from "../controller/UserController"

export const userRouter = express.Router()

const userController = new UserController()

userRouter.get("/search", userController.searchUserByName)
userRouter.get("/followeds", userController.getFolloweds)
userRouter.get("/followers", userController.getFollowers)
userRouter.get("/feed", userController.getFeed)
userRouter.get("/all", userController.getAll)




