import {FriendsRepository} from "@modules/friends/repository/friends.repository";
import {PrismaClient} from "@prisma/client";
import {CreateFriendDTO, FriendDTO} from "@modules/friends/dto";

export class FriendsRepositoryImpl implements FriendsRepository {
    constructor(private readonly db: PrismaClient) {}

    async create(data: CreateFriendDTO): Promise<FriendDTO> {
        const {addresses, ...friendData} = data;
        const friend = await this.db.friend.create({
            data: {
                ...friendData,
                addresses: {
                    create: addresses
                }
            }
        })
        return new FriendDTO(friend)
    }

    async getAll(): Promise<FriendDTO[]> {
        const friends = await this.db.friend.findMany({
            include: {addresses: true}
        });
        return friends.map(friend => new FriendDTO(friend))
    }

    async delete (id: string): Promise<void> {
        await this.db.friend.delete({
            where: {id}
        })
    }
}