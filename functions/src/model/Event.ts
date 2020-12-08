export class PageEvent{
    constructor(
    private id: string,
    private adminId: string,
    private pageId: string,
    private name: string,
    private description: string,
    private date: number,
    private local: string

    ){}

    getId(){
        return this.id
    }

    getAdminId(){
        return this.adminId
    }

    getPageId(){
        return this.pageId
    }

    getName(){
        return this.name
    }

    getDescription(){
        return this.description
    }

    getDate(){
        return this.date
    }

    getLocal(){
        return this.local
    }

    setId(id: string){
        this.id = id
    }

    setAdminId(adminId: string) {
        this.adminId = adminId
    }

    sePageId(pageId: string) {
        this.pageId = pageId
    }

    setName(name: string){
        this.name = name
    }

    setDescription(description: string){
        this.description = description
    }

    setDate(date: number){
        this.date = date
    }

    setLocal(local: string){
        this.local = local
    }

    static toEventModel(pageEvent: any): PageEvent {
        return new PageEvent(pageEvent.id, pageEvent.admin_id || pageEvent.adminId, pageEvent.page_id || pageEvent.pageId, pageEvent.name, pageEvent.description, pageEvent.date, pageEvent.local)
    }
}
