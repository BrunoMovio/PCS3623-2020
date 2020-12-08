import { BaseDatabase } from "./BaseDatabase";
import { PageEvent } from "../model/Event";

export class EventDatabase extends BaseDatabase {
  public async getEventByPageId(pageId: string): Promise<PageEvent[]> {
    try {
      const result = await this.getConnection()
        .select("*")
        .from(this.tableNames.pageEvent)
        .where({ 
          page_id: pageId
        }) 

        return result.map((item) => {
          return PageEvent.toEventModel({
            ...item
          })
        })
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async getEventsByDate(maxDate: string): Promise<PageEvent[]> {
    try {
      const result = await this.getConnection()
        .select("*")
        .from(this.tableNames.pageEvent)
        .whereRaw(`date < ${maxDate}`) 
      
        return result.map((item) => {
          return PageEvent.toEventModel({
            ...item
          })
        })
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async getAll(): Promise<PageEvent[]> {
    try {
      const result = await this.getConnection()
        .select('*')
        .from(this.tableNames.pageEvent)

      return result.map((item) => {
        return PageEvent.toEventModel({
          ...item
        })
      })
    } catch (error) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}

