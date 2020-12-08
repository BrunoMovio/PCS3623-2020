import { UserInputDTO, User, SearchUserInputDTO, UserUpdateInputDTO, FollowUserInputDTO, UnfollowInputDTO } from "../model/User"
import { UserDatabase } from "../data/UserDatabase"
import { IdGenerator } from "../services/IdGenerator"
import { InvalidInputError } from "../error/InvalidInputError"

export class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
    ) { }
    async getUsersByPartialName(input: SearchUserInputDTO) {
        if (!input.partialName) {
            throw new InvalidInputError("Invalid input to getUsersByPartialName.")
        }

        const userSearchResult = await this.userDatabase.getUserByPartialName(input.partialName)

        return { result: userSearchResult }
    }

    async getFollowedsByUserId(userId: string) {
        if (!userId) {
            throw new InvalidInputError("Invalid input to getUsersByPartialName.")
        }

        const userSearchResult = await this.userDatabase.getFolloweds(userId)

        return { result: userSearchResult }
    }

    async getFollowersByUserId(userId: string) {
        if (!userId) {
            throw new InvalidInputError("Invalid input to getUsersByPartialName.")
        }

        const userSearchResult = await this.userDatabase.getFollowers(userId)

        return { result: userSearchResult }
    }

    async getFeedByUserId(userId: string) {
        if (!userId) {
            throw new InvalidInputError("Invalid input to getUsersByPartialName.")
        }

        const users = await this.userDatabase.getFeedByUserId(userId)

        return { result: users }
    }

    
    async getAll() {
        const users = await this.userDatabase.getAll()

        return { result: users }
    }
}