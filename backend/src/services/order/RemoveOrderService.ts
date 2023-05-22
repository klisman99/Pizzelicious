import { prismaClient } from "../../prisma"

interface OrderRequest {
	id: string
}

export const RemoveOrderService = async ({ id }: OrderRequest) => await prismaClient.order.delete({
	where: {
		id
	}
})