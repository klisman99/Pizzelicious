import { prismaClient } from "../../prisma"

interface OrderRequest {
	id: string
}

export const FinishOrderService = async ({ id }: OrderRequest) => await prismaClient.order.update({
	data: {
		status: true
	},
	where: {
		id
	}
})