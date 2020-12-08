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
            const usersResult = await groupBusiness.getUsersByGroupId(req.body.groupId);

            res.status(200).send({ usersResult });

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
            const groupsResult = await groupBusiness.getByAdminId(req.body.adminId);

            res.status(200).send({ result: groupsResult });

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
            const groupList = await groupBusiness.getAll();

            res.status(200).send({ groupList });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }
}