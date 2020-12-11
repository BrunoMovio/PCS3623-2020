import { Request, Response } from "express";
import { GroupBusiness } from "../business/GroupBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { GroupDatabase } from "../data/GroupDatabase";
import { IdGenerator } from "../services/IdGenerator";

export class GroupController {
    async getUsersByGroup(req: Request, res: Response) {
        try {
            const groupBusiness = new GroupBusiness(
                new GroupDatabase,
                new IdGenerator
            );
            const result = await groupBusiness.getUsersByGroupId(req.query.groupId as string);

            res.status(200).send({ result });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getByAdmin(req: Request, res: Response) {
        try {
            const groupBusiness = new GroupBusiness(
                new GroupDatabase,
                new IdGenerator
            );
            const result = await groupBusiness.getByAdminId(req.query.adminId as string);

            res.status(200).send({ result: result });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getAll(req: Request, res: Response) {
        try {
            const groupBusiness = new GroupBusiness(
                new GroupDatabase,
                new IdGenerator
            );
            const result = await groupBusiness.getAll();

            res.status(200).send({ result });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }
}