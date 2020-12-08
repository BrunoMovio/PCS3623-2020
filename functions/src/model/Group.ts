export class Group{
    constructor(
    private id: string,
    private adminId: string,
    private name: string,
    private description: string,
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

    getDescription(){
        return this.description
    }

    setId(id: string){
        this.id = id
    }

    setName(name: string){
        this.name = name
    }

    setAdminId(adminId: string){
        this.adminId = adminId
    }

    setDescription(description: string){
        this.description = description
    }

    static toGroupModel(group: any): Group {
        return new Group(group.id, group.admin_id || group.adminId, group.name, group.description)
    }
}

