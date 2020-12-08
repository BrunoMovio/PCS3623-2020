import express from "express"
import { EventController } from "../controller/EventController"

export const eventRouter = express.Router()

const eventController = new EventController()

eventRouter.get("/searchByPage", eventController.searchByPage)
eventRouter.get("/searchByDate", eventController.searchByDate)
eventRouter.get("/all", eventController.getAll)




