import { Request, Response } from "express"
import { RemoveOrderService } from "../../services/order/RemoveOrderService"

export const RemoveOrderController = async (request: Request, response: Response) => {
	const id = request.query.id as string

	const order = await RemoveOrderService({ id })

	return response.json(order)
}