import { PageDatabase } from "../data/PageDatabase"
import { InvalidInputError } from "../error/InvalidInputError"
import { SearchUserInputDTO } from "../model/User"
import { IdGenerator } from "../services/IdGenerator"

export class PageBusiness {
    constructor(
        private pageDatabase: PageDatabase,
        private idGenerator: IdGenerator,
    ) { }
    async getPagesByPartialName(input: SearchUserInputDTO) {
        if (!input.partialName) {
            throw new InvalidInputError("Invalid input to getPagesByPartialName.")
        }

        const pageSearchResult = await this.pageDatabase.getPageByPartialName(input.partialName)

        return { result: pageSearchResult }
    }

    async getLikesByPageId(pageId: string) {
        if (!pageId) {
            throw new InvalidInputError("Invalid input to getLikesByPageId.")
        }

        const likes = await this.pageDatabase.getLikesByPageId(pageId)

        return { result: likes }
    }

    
    async getAll() {
        const pages = await this.pageDatabase.getAll()

        return { result: pages }
    }
}