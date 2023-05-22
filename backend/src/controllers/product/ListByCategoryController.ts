import { Request, Response } from "express"
import { ListByCategoryService } from "../../services/product/ListByCategoryService"

export const ListByCategoryController = async (request: Request, response: Response) => {
	const category_id = request.query.category_id as string

	const products = await ListByCategoryService({ category_id })

	return response.json(products)
}