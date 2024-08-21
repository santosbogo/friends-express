import {IsArray, IsEmail, IsNotEmpty, IsOptional, IsString, ValidateNested} from 'class-validator'
import {Type} from "class-transformer";
import {AddressDTO, CreateAddressDTO} from "@modules/address/dto";
import 'reflect-metadata';

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

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateAddressDTO)
    @IsOptional()
    addresses?: CreateAddressDTO[];
}

export class FriendDTO {
    constructor (friend: FriendDTO) {
        this.id = friend.id
        this.name = friend.name
        this.email = friend.email
        this.addresses = friend.addresses || []

    }

    id: string
    name: string
    email: string
    addresses: AddressDTO[]
}