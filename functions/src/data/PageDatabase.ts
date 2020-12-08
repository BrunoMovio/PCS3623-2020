import { BaseDatabase } from "./BaseDatabase";
import { Page } from "../model/Page";

export class PageDatabase extends BaseDatabase {
  public async getPageByPartialName(partialName: string): Promise<Page[]> {
    try {
      const result = await this.getConnection()
        .select('*')
        .from(this.tableNames.page)
        .whereRaw(`name LIKE "%${partialName}%"`)

      return result.map((item) => {
        return Page.toPageModel({
          ...item
        })
      })
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async getLikesByPageId(pageId: string): Promise<string[]> {
    try {
      const pageLikes = await this.getConnection()
          .select('*')
          .from(this.tableNames.pageLikes)
          .whereRaw(`page_id = "${pageId}"`)

      return pageLikes.map((result) => result.user_id)
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async getAll(): Promise<Page[]> {
    try {
      const result = await this.getConnection()
        .select('*')
        .from(this.tableNames.user)

      return result.map((item) => {
        return Page.toPageModel({
          ...item
        })
      })
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}

