import { prismaClient } from "../../prisma"

interface ItemRequest {
	order_id: string
	product_id: string
	amount: number
}

export const AddItemService = async ({ order_id, product_id, amount }: ItemRequest) => await prismaClient.item.create({
	data: {
		order_id,
		product_id,
		amount
	}
})