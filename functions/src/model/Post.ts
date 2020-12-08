export class Post{
    constructor(
    private id: string,
    private userId: string,
    private name: string,
    private description: string,
    private image: string,
    private eventId?: string,
    private groupId?: string,
    private pageId?: string,
    ){}

    getId(){
        return this.id
    }

    getUserId(){
        return this.userId
    }

    getName(){
        return this.name
    }

    geDescription(){
        return this.description
    }

    getImage(){
        return this.image
    }

    getEventId(){
        return this.eventId
    }

    getGroupId(){
        return this.groupId
    }

    getPageId(){
        return this.pageId
    }

    setId(id: string){
        this.id = id
    }

    setUserId(userId: string){
        this.userId = userId
    }

    setName(name: string){
        this.name = name
    }

    setDescription(description: string){
        this.description = description
    }

    setImage(image: string){
        this.image = image
    }

    setEventId(eventId: string){
        this.eventId = eventId
    }

    setGroupId(groupId: string){
        this.groupId = groupId
    }

    setPageId(pageId: string){
        this.pageId = pageId
    }

    static toPostModel(post: any): Post {
        return new Post(post.id, post.userId || post.user_id, post.name, post.description, post.image, post.eventId || post.event_id, post.groupId || post.group_id, post.pageId || post.page_id)
    }
}

export interface SearchPostInputDTO{
    partialName: string
}

export interface SearchPostByGroupAndPageDTO{
    groupId: string,
    pageId: string
}
