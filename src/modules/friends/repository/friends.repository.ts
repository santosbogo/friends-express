import {CreateFriendDTO, FriendDTO} from "@modules/friends/dto";

export interface FriendsRepository {
    create(friend: CreateFriendDTO): Promise<FriendDTO>;
    getAll(): Promise<FriendDTO[]>;
    delete(id: string): Promise<void>;
}