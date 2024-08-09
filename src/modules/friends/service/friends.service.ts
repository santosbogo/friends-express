import {CreateFriendDTO, FriendDTO} from "@modules/friends/dto";

export interface FriendsService {
    getFriends(): Promise<FriendDTO[]>;
    createFriend(friend: CreateFriendDTO): Promise<FriendDTO>;
    deleteFriend(id: string): Promise<void>;
}