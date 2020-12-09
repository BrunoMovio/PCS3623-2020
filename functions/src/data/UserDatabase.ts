import { BaseDatabase } from "./BaseDatabase";
import { Relation, SearchUserOutputDTO, User } from "../model/User";
import { Post } from "../model/Post";

export class UserDatabase extends BaseDatabase {
  public async getUserByPartialName(partialName: string): Promise<SearchUserOutputDTO[]> {
    try {
      const result = await this.getConnection()
        .select('name', 'email')
        .from(this.tableNames.user)
        .whereRaw(`name LIKE "%${partialName}%"`)

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

  public async getFolloweds(followerId: string): Promise<Relation[]> {
    try {
      const result = await this.getConnection()
        .select("followed_id")
        .from(this.tableNames.relation)
        .where({ 
          follower_id: followerId
        }) 
      
      return result.map((item) => {
        return {
          follower_id: followerId,
          followed_id: item.followed_id
        }
      })

    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async getFollowers(followedId: string): Promise<Relation[]> {
    try {
      const result = await this.getConnection()
        .select("follower_id")
        .from(this.tableNames.relation)
        .where({
          followed_id: followedId 
        }) 

        return result.map((item) => {
          return {
            follower_id: item.follower_id,
            followed_id: followedId
          }
        })
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  //TODO: implement Post class
  public async getFeedByUserId(userId: string): Promise<Post[]> {
    try {
      const myPosts = await this.getConnection()
          .select('*')
          .from(this.tableNames.post)
          .where({ user_id: userId })

        return myPosts.map((item) => {
          return Post.toPostModel({
            ...item
          })
        })
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async getAll(): Promise<User[]> {
    console.log("Bateu aqui")
    try {
      const result = await this.getConnection()
        .select('*')
        .from(this.tableNames.user)

      return result.map((item) => {
        return User.toUserModel({
          ...item
        } as User)
      })
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}

