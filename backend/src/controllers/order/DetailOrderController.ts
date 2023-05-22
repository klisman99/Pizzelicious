import { Request, Response } from "express"
import { DetailOrderService } from "../../services/order/DetailOrderService"

export const DetailOrderController = async (request: Request, response: Response) => {
	const id = request.query.id as string

	const order = await DetailOrderService({ id })

	return response.json(order)
}