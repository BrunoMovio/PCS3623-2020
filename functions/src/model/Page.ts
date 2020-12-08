export class Page{
    constructor(
    private id: string,
    private adminId: string,
    private name: string,
    private description: string,
    private banner: string
    ){}

    getId(){
        return this.id
    }

    getName(){
        return this.name
    }

    getAdminId(){
        return this.adminId
    }

    geDescription(){
        return this.description
    }

    getBanner(){
        return this.banner
    }

    setId(id: string){
        this.id = id
    }

    setName(name: string){
        this.name = name
    }

    setDescription(description: string){
        this.description = description
    }

    setAdminId(adminId: string){
        this.adminId = adminId
    }


    setBanner(banner: string){
        this.banner = banner
    }

    static toPageModel(page: any): Page {
        return new Page(page.id, page.adminId || page.admin_id, page.name, page.description, page.banner)
    }
}

export interface SearchPageInputDTO{
    partialName: string
}
