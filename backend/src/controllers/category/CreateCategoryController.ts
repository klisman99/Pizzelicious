import { Request, Response } from "express"
import { CreateCategoryService } from "../../services/category/CreateCategoryService"

export const CreateCategoryController = async (request: Request, response: Response) => {
	const { name } = request.body
	const category = await CreateCategoryService({ name })

	return response.json(category)
}