import { Request, Response } from "express";
import { PageBusiness } from "../business/PageBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { PageDatabase } from "../data/PageDatabase";
import { SearchPageInputDTO } from "../model/Page";
import { IdGenerator } from "../services/IdGenerator";

export class PageController {
    async searchPageByName(req: Request, res: Response) {
        try {
            const input: SearchPageInputDTO = {
                partialName: req.query.name as string
            };
            const pageBusiness = new PageBusiness(
                new PageDatabase,
                new IdGenerator
            );
            const pageResult = await pageBusiness.getPagesByPartialName(input);

            res.status(200).send({ pageResult });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getLikes(req: Request, res: Response) {
        try {
            const pageBusiness = new PageBusiness(
                new PageDatabase,
                new IdGenerator
            );
            const likesResult = await pageBusiness.getLikesByPageId(
                req.body.pageId as string
            );

            res.status(200).send({ likesResult });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getAll(req: Request, res: Response) {
        try {
            const pageBusiness = new PageBusiness(
                new PageDatabase,
                new IdGenerator
            );
            const pages = await pageBusiness.getAll();

            res.status(200).send({ pages });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }
}