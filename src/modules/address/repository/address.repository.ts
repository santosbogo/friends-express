import {CreateAddressDTO, AddressDTO} from '@modules/address/dto';

export interface AddressRepository {
    create(data: CreateAddressDTO): Promise<AddressDTO>;
    update(id: string, address: CreateAddressDTO): Promise<AddressDTO>;
    delete(id: string): Promise<void>;
}