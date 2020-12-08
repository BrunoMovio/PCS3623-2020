import express from "express"
import { PageController } from "../controller/PageController"

export const pageRouter = express.Router()

const pageController = new PageController()

pageRouter.get("/search", pageController.searchPageByName)
pageRouter.get("/likes", pageController.getLikes)
pageRouter.get("/all", pageController.getAll)




