import { Request, Response } from "express";
import { SearchUserInputDTO } from "../model/User";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";

export class UserController {
    async searchUserByName(req: Request, res: Response) {
        try {
            const input: SearchUserInputDTO = {
                partialName: req.body.name as string
            };
            const userBusiness = new UserBusiness(
                new UserDatabase,
                new IdGenerator
            );
            const userResult = await userBusiness.getUsersByPartialName(input);

            res.status(200).send({ userResult });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getFolloweds(req: Request, res: Response) {
        try {
            const userBusiness = new UserBusiness(
                new UserDatabase,
                new IdGenerator
            );
            const userResult = await userBusiness.getFollowedsByUserId(
                req.body.currentUserId as string
            );

            res.status(200).send({ userResult });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getFollowers(req: Request, res: Response) {
        try {
            const userBusiness = new UserBusiness(
                new UserDatabase,
                new IdGenerator
            );
            const userResult = await userBusiness.getFollowersByUserId(
                req.body.currentUserId as string
            );

            res.status(200).send({ userResult });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }


    async getFeed(req: Request, res: Response) {
        try {
            const userBusiness = new UserBusiness(
                new UserDatabase,
                new IdGenerator
            );
            const userResult = await userBusiness.getFeedByUserId(
                req.body.currentUserId as string
            );

            res.status(200).send({ userResult });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getAll(req: Request, res: Response) {
        try {
            const userBusiness = new UserBusiness(
                new UserDatabase,
                new IdGenerator
            );
            const users = await userBusiness.getAll();

            res.status(200).send({ users });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }
}