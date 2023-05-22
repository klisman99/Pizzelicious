import { Request, Response } from "express"
import { AddItemService } from "../../services/order/AddItemService"

export const AddItemController = async (request: Request, response: Response) => {
	const { order_id, product_id, amount } = request.body

	const item = await AddItemService({ order_id, product_id, amount })

	return response.json(item)
}