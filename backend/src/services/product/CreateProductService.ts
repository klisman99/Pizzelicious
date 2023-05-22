import { prismaClient } from "../../prisma"

interface ProductRequest {
	name: string
	price: string
	description: string
	banner: string
	category_id: string
}

export const CreateProductService = async ({ name, price, description, banner, category_id }: ProductRequest) => await prismaClient.product.create(
	{
		data: {
			name,
			price,
			description,
			banner,
			category_id
		}
	}
)