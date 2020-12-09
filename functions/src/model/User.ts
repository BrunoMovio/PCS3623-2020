export class User{
    constructor(
    private id: string,
    private name: string,
    private email: string,
    private phone: number,
    private avatar: string,
    private groupId?: string
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

    getGroupId(){
        return this.groupId
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

    setPhone(phone: number){
        this.phone = phone
    }

    setAvatar(avatar: string){
        this.avatar = avatar
    }

    setGroupId(groupId: string){
        this.groupId = groupId
    }

    static toUserModel(user: any): User {
        return new User(user.id, user.name, user.email, user.phone, user.avatar, user.groupId || user.group_id)
    }
}

export interface UserInputDTO{
    name: string,
    email: string,
    phone: number,
    avatar: string
}

export interface UserUpdateInputDTO{
    id: string,
    name?: string,
    email?: string,
    phone?: number,
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