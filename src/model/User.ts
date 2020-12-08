export class User{
    constructor(
    private id: string,
    private name: string,
    private email: string,
    private phone: string,
    private avatar: string
    ){}

    getId(){
        return this.id
    }

    getName(){
        return this.name
    }

    getEmail(){
        return this.email
    }

    getPhone(){
        return this.phone
    }

    getAvatar(){
        return this.avatar
    }

    setId(id: string){
        this.id = id
    }

    setName(name: string){
        this.name = name
    }

    setEmail(email: string){
        this.email = email
    }

    setPhone(phone: string){
        this.phone = phone
    }

    setAvatar(avatar: string){
        this.avatar = avatar
    }

    static toUserModel(user: any): User {
        return new User(user.id, user.name, user.email, user.phone, user.avatar)
    }
}

export interface UserInputDTO{
    name: string,
    email: string,
    phone: string,
    avatar: string
}

export interface UserUpdateInputDTO{
    id: string,
    name?: string,
    email?: string,
    phone?: string,
    avatar?: string
}

export interface SearchUserInputDTO{
    partialName: string
}

export interface CurrentUserInputDTO{
    userId: string
}

export interface SearchUserOutputDTO{
    name: string
    email: string
}

export interface FollowUserInputDTO{
    currentUserId: string,
    userToFollowId: string
}

export interface UnfollowInputDTO{
    currentUserId: string,
    userToUnfollowId: string
}

export interface Relation{
    follower_id: string,
    followed_id: string
}