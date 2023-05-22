import { Request, Response } from "express"
import { RemoveItemService } from "../../services/order/RemoveItemService"

export const RemoveItemController = async (request: Request, response: Response) => {
	const id = request.query.id as string

	const item = await RemoveItemService({ id })

	return response.json(item)
}