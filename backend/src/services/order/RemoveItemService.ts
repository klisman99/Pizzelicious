import { prismaClient } from "../../prisma"

interface ItemRequest {
	id: string
}

export const RemoveItemService = async ({ id }: ItemRequest) => await prismaClient.item.delete({
	where: {
		id
	}
})