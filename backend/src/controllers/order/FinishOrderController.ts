import { Request, Response } from "express"
import { FinishOrderService } from "../../services/order/FinishOrderService"

export const FinishOrderController = async (request: Request, response: Response) => {
	const { id } = request.body

	const order = await FinishOrderService({ id })

	return response.json(order)
}