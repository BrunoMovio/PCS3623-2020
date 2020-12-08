import express from "express"
import { GroupController } from "../controller/GroupController"

export const groupRouter = express.Router()

const groupController = new GroupController()

groupRouter.get("/usersByGroup", groupController.getUsersByGroup)
groupRouter.get("/getByAdmin", groupController.getByAdmin)
groupRouter.get("/all", groupController.getAll)




