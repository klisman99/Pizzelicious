import { prismaClient } from "../../prisma"

interface DetailRequest {
	id: string
}

export const DetailOrderService = async ({ id }: DetailRequest) => await prismaClient.order.findFirst({
	where: {
		id
	},
	select: {
		id: true,
		table: true,
		status: true,
		draft: true,
		name: true,
		items: {
			select: {
				id: true,
				amount: true,
				product: {
					select: {
						id: true,
						name: true,
						price: true,
						description: true,
						banner: true
					}
				}
			}
		}
	}
})