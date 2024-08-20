import { Request, Response, Router } from 'express'
import HttpStatus from "http-status";
import {db} from "@utils";
import {FriendsServiceImpl} from "@modules/friends/service";
import {FriendsRepositoryImpl} from "@modules/friends/repository";

export const addressRouter = Router()

const service = new FriendsServiceImpl(new FriendsRepositoryImpl(db))

addressRouter.get('/', async (req: Request, res: Response) => {
    const friends = await service.getFriends();

    return res.status(HttpStatus.OK).json(friends)
})
