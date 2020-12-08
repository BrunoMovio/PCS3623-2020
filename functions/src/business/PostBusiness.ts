import { PostDatabase } from "../data/PostDatabase"
import { InvalidInputError } from "../error/InvalidInputError"
import { SearchPostByGroupAndPageDTO, SearchPostInputDTO } from "../model/Post"
import { IdGenerator } from "../services/IdGenerator"


export class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
    ) { }
    async getPostByPartialName (input: SearchPostInputDTO) {
        if (!input.partialName) {
            throw new InvalidInputError("Invalid input to getPagesByPartialName.")
        }

        const postSearchResult = await this.postDatabase.getPageByPartialName(input.partialName)

        return { result: postSearchResult }
    }

    async getByUserId(userId: string) {
        if (!userId) {
            throw new InvalidInputError("Invalid input to getByUserId.")
        }

        const posts = await this.postDatabase.getPostsByUserId(userId)

        return { result: posts }
    }

    async getByGroupIdAndPageId(input: SearchPostByGroupAndPageDTO) {
        if (!input.groupId || !input.pageId) {
            throw new InvalidInputError("Invalid input to getByGroupIdAndPageId.")
        }

        const posts = await this.postDatabase.getByGroupIdAndPageId(input.groupId, input.pageId)

        return { result: posts }
    }

    
    async getAll() {
        const posts = await this.postDatabase.getAll()

        return { result: posts }
    }
}