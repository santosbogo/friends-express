import {IsNotEmpty, IsOptional, IsString} from "class-validator";

export class CreateAddressDTO {
    @IsString()
    @IsNotEmpty()
    street!: string

    @IsString()
    @IsNotEmpty()
    city!: string

    @IsString()
    @IsNotEmpty()
    state!: string

    @IsString()
    @IsNotEmpty()
    country!: string

    @IsString()
    @IsNotEmpty()
    zip!: string

    @IsString()
    @IsOptional()
    friendId!: string;
}

export class AddressDTO {
    constructor(address: AddressDTO) {
        this.id = address.id
        this.street = address.street
        this.city = address.city
        this.state = address.state
        this.zip = address.zip
        this.country = address.country
    }
    id: string
    street: string
    city: string
    state: string
    zip: string
    country: string
}