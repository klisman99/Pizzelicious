import { prismaClient } from "../../prisma"

export const ListCategoryService = async () => await prismaClient.category.findMany(
	{
		select: {
			id: true,
			name: true
		}
	}
)