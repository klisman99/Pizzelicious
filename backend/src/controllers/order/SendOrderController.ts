import { Request, Response } from "express"
import { SendOrderService } from "../../services/order/SendOrderService"

export const SendOrderController = async (request: Request, response: Response) => {
	const { id } = request.body

	const order = await SendOrderService({ id })

	return response.json(order)
}