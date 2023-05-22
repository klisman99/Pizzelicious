import { prismaClient } from "../../prisma"

interface ProductRequest {
	category_id: string
}

export const ListByCategoryService = async ({ category_id }: ProductRequest) => await prismaClient.product.findMany(
	{
		where: {
			category_id
		}
	}
)