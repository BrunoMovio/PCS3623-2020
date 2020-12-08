import { IdGenerator } from "../services/IdGenerator"
import { InvalidInputError } from "../error/InvalidInputError"
import { EventDatabase } from "../data/EventDatabase"

export class EventBusiness {
    constructor(
        private eventDatabase: EventDatabase,
        private idGenerator: IdGenerator,
    ) { }
    async getEventByPageId(pageId: string) {
        if (!pageId) {
            throw new InvalidInputError("Invalid input to getEventByPageId.")
        }

        const eventSearchResult = await this.eventDatabase.getEventByPageId(pageId)

        return { result: eventSearchResult }
    }

    async getEventsUntilDate(maxDate: string) {
        if (!maxDate) {
            throw new InvalidInputError("Invalid input to getEventsUntilDate.")
        }

        const userSearchResult = await this.eventDatabase.getEventsByDate(maxDate)

        return { result: userSearchResult }
    }
    
    async getAll() {
        const events = await this.eventDatabase.getAll()

        return { result: events }
    }
}