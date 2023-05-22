import { prismaClient } from "../../prisma"

export const ListOrdersService = async () => prismaClient.order.findMany({
	where: {
		draft: false,
		status: false
	},
	orderBy: {
		created_at: "desc"
	}
})