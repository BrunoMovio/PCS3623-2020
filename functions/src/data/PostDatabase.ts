import { BaseDatabase } from "./BaseDatabase";
import { Post, SearchPostByGroupAndPageDTO } from "../model/Post";

export class PostDatabase extends BaseDatabase {
  public async getPageByPartialName(partialName: string): Promise<Post[]> {
    try {
      const result = await this.getConnection()
        .select('*')
        .from(this.tableNames.post)
        .whereRaw(`name LIKE "%${partialName}%"`)

      return result.map((item) => {
        return Post.toPostModel({
          ...item
        })
      })
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async getPostsByUserId(userId: string): Promise<Post[]> {
    try {
      const result = await this.getConnection()
        .select("*")
        .from(this.tableNames.post)
        .whereRaw(`user_id = ${userId}`) 
      
      return result.map((item) => {
        return Post.toPostModel({
          ...item
        })
      })

    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async getByGroupIdAndPageId(groupId: string, pageId: string): Promise<Post[]> {
    try {
      const result = await this.getConnection()
        .select("*")
        .from(this.tableNames.post)
        .whereRaw(`group_id = ${groupId}`)
        .andWhereRaw(`page_id = ${pageId}`)

      return result.map((item) => {
        return Post.toPostModel({
          ...item
        })
      })
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async getAll(): Promise<Post[]> {
    try {
      const result = await this.getConnection()
        .select('*')
        .from(this.tableNames.post)

      return result.map((item) => {
        return Post.toPostModel({
          ...item
        })
      })
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}

