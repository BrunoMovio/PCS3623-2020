import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { EventBusiness } from "../business/EventBusiness";
import { EventDatabase } from "../data/EventDatabase";

export class EventController {
    async searchByPage(req: Request, res: Response) {
        try {
            const eventBusiness = new EventBusiness(
                new EventDatabase,
                new IdGenerator
            );
            const result = await eventBusiness.getEventByPageId(req.query.pageId as string);

            res.status(200).send({ result });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async searchByDate(req: Request, res: Response) {
        try {
            const eventBusiness = new EventBusiness(
                new EventDatabase,
                new IdGenerator
            );
            const result = await eventBusiness.getEventsUntilDate(
                req.query.maxDate as string
            );

            res.status(200).send({ result });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getAll(req: Request, res: Response) {
        try {
            const eventBusiness = new EventBusiness(
                new EventDatabase,
                new IdGenerator
            );
            const result = await eventBusiness.getAll();

            res.status(200).send({ result });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }
}