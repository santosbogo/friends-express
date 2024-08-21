import { Request, Response, Router } from 'express'
import HttpStatus from "http-status";
import {db} from "@utils";
import {FriendsServiceImpl} from "@modules/friends/service";
import {FriendsRepositoryImpl} from "@modules/friends/repository";
import {CreateAddressDTO} from "@modules/address/dto";
import {AddressServiceImpl} from "@modules/address/service";
import {AddressRepositoryImpl} from "@modules/address/repository";

export const addressRouter = Router()

const friendService = new FriendsServiceImpl(new FriendsRepositoryImpl(db))
const addressService = new AddressServiceImpl(new AddressRepositoryImpl(db));

addressRouter.get('/', async (req: Request, res: Response) => {
    const friends = await friendService.getFriends();

    return res.status(HttpStatus.OK).json(friends)
})

// addressRouter.post('/', async (req: Request, res: Response) => {
//     try {
//         const { friendId } = req.params;
//         const addressData: CreateAddressDTO = {
//             ...req.body,
//             friendId: friendId
//         };
//
//         const newAddress = await addressService.createAddress(addressData);
//         res.status(HttpStatus.CREATED).json(newAddress);
//     } catch (error) {
//         console.error('Error adding address to friend:', error);
//         res.status(500).send('Failed to add address');
//     }
// });

addressRouter.post('/', async (req: Request, res: Response) => {
    try {
        const { friendId } = req.params; // Obtener el ID del amigo de la URL
        const addressData: CreateAddressDTO = {
            ...req.body,
            friendId, // Asociar la nueva dirección con el amigo
        };

        const newAddress = await addressService.createAddress(addressData);
        res.status(HttpStatus.CREATED).json(newAddress);
    } catch (error) {
        console.error('Error adding address to friend:', error);
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Failed to add address');
    }
});
