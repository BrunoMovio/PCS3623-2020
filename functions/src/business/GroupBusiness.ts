import { GroupDatabase } from "../data/GroupDatabase"
import { InvalidInputError } from "../error/InvalidInputError"
import { IdGenerator } from "../services/IdGenerator"


export class GroupBusiness {
    constructor(
        private groupDatabase: GroupDatabase,
        private idGenerator: IdGenerator,
    ) { }
    async getUsersByGroupId(groupId: string) {
        if (!groupId) {
            throw new InvalidInputError("Invalid input to getUsersByGroupId.")
        }

        const usersResult = await this.groupDatabase.getUsersByGroupId(groupId)

        return { result: usersResult }
    }

    async getByAdminId(adminId: string) {
        if (!adminId) {
            throw new InvalidInputError("Invalid input to getByAdminId.")
        }

        const groupsResult = await this.groupDatabase.getGroupsByAdminId(adminId)

        return { result: groupsResult }
    }
    
    async getAll() {
        const groups = await this.groupDatabase.getAll()

        return { result: groups }
    }
}