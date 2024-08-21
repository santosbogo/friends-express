import {AddressRepository} from '@modules/address/repository/address.repository';
import {AddressDTO, CreateAddressDTO} from "@modules/address/dto";
import {PrismaClient} from "@prisma/client";

export class AddressRepositoryImpl implements AddressRepository{
    constructor(private readonly db: PrismaClient) {}

    async create(data: CreateAddressDTO): Promise<AddressDTO> {
        const address = await this.db.address.create({
            data: {
                street: data.street,
                city: data.city,
                state: data.state,
                zip: data.zip,
                friend: {
                    connect: { id: data.friendId } // Asegúrate de que friendId se esté pasando correctamente
                }
            }
        });
        return new AddressDTO(address);
    }


    async delete(id: string): Promise<void> {
        await this.db.address.delete({
            where: {id }
        });
    }

    async update(id: string, data: CreateAddressDTO): Promise<AddressDTO> {
        const address = await this.db.address.update({
            where: {id},
            data
        });
        return new AddressDTO(address);
    }
}