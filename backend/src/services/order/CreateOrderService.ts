import { prismaClient } from "../../prisma"

interface OrderRequest {
	table: number
	name: string
}

export const CreateOrderService = async ({ table, name }: OrderRequest) => await prismaClient.order.create({
	data: {
		table,
		name
	}
})