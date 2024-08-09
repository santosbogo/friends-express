import {IsEmail, IsNotEmpty, IsOptional, IsString} from 'class-validator'

export class CreateFriendDTO {
    @IsString()
    @IsNotEmpty()
    name!: string

    @IsEmail()
    @IsNotEmpty()
    email!: string

    @IsString()
    @IsOptional()
    phone?:string
}

export class FriendDTO {
    constructor (friend: FriendDTO) {
        this.id = friend.id
        this.name = friend.name
        this.email = friend.email

    }

    id: string
    name: string
    email: string
}