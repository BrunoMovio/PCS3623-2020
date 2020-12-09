import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { PostDatabase } from "../data/PostDatabase";
import { SearchPostInputDTO } from "../model/Post";
import { IdGenerator } from "../services/IdGenerator";

export class PostController {
    async searchByName(req: Request, res: Response) {
        try {
            const input: SearchPostInputDTO = {
                partialName: req.body.name as string
            };
            const postBusiness = new PostBusiness(
                new PostDatabase,
                new IdGenerator
            );
            const postsResult = await postBusiness.getPostByPartialName(input);

            res.status(200).send({ postsResult });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getByUser(req: Request, res: Response) {
        try {
            const postBusiness = new PostBusiness(
                new PostDatabase,
                new IdGenerator
            );
            const postsResult = await postBusiness.getByUserId(
                req.body.userId as string
            );

            res.status(200).send({ postsResult });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getByGroupAndPage(req: Request, res: Response) {
        try {
            const postBusiness = new PostBusiness(
                new PostDatabase,
                new IdGenerator
            );
            const postsResult = await postBusiness.getByGroupIdAndPageId({
                groupId: req.body.groupId as string,
                pageId: req.body.pageId as string
            });

            res.status(200).send({ postsResult });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async getAll(req: Request, res: Response) {
        try {
            const postBusiness = new PostBusiness(
                new PostDatabase,
                new IdGenerator
            );
            const posts = await postBusiness.getAll();

            res.status(200).send({ posts });

        } catch (error) {
            res.status(400).send({ error: error.message });
        }

        await BaseDatabase.destroyConnection();
    }
}