import { Request, Response } from "express"
import { CreateProductService } from "../../services/product/CreateProductService"

export const CreateProductController = async (request: Request, response: Response) => {
	const { name, price, description, category_id } = request.body

	if (!request.file) {
		throw new Error("File upload error")
	}

	const banner = request.file.filename

	const product = await CreateProductService({ name, price, description, banner, category_id })

	return response.json(product)
}