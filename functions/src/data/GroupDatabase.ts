import { Group } from "../model/Group"
import { SearchUserOutputDTO } from "../model/User"
import { BaseDatabase } from "./BaseDatabase"

export class GroupDatabase extends BaseDatabase {
  public async getUsersByGroupId(groupId: string): Promise<SearchUserOutputDTO[]> {
    try {
      const result = await this.getConnection()
        .select('name', 'email')
        .from(this.tableNames.user)
        .where({ groupId })

      return result.map((item) => {
        return {
          name: item.name, 
          email: item.email
        }
      })
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async getGroupsByAdminId(adminId: string): Promise<Group[]> {
    try {
      const result = await this.getConnection()
        .select("*")
        .from(this.tableNames.group)
        .where({ adminId }) 
      
      return result.map((item) => {
        return Group.toGroupModel({
          ...item
        })
      })
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async getAll(): Promise<Group[]> {
    try {
      const result = await this.getConnection()
        .select('*')
        .from(this.tableNames.group)

      return result.map((item) => {
        return Group.toGroupModel({
          ...item
        })
      })
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}

