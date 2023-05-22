import { prismaClient } from "../../prisma"

interface OrderRequest {
	id: string
}

export const SendOrderService = async ({ id }: OrderRequest) => await prismaClient.order.update({
	data: {
		draft: false
	},
	where: {
		id
	}
})