import {CreateAddressDTO, AddressDTO} from "@modules/address/dto";

export interface AddressService{
    createAddress(address: CreateAddressDTO): Promise<AddressDTO>;
    deleteAddress(id: string): Promise<void>;
    updateAddress(id: string, address: CreateAddressDTO): Promise<AddressDTO>;
}