import { prismaClient } from "../../prisma"

export const DetailUserService = async (user_id: string) => await prismaClient.user.findFirst({
	where: {
		id: user_id
	},
	select: {
		id: true,
		name: true,
		email: true
	}
})