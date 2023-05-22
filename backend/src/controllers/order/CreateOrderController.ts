import { Request, Response } from "express"
import { CreateOrderService } from "../../services/order/CreateOrderService"

export const CreateOrderController = async (request: Request, response: Response) => {
	const { table, name } = request.body

	const order = await CreateOrderService({ table, name })

	return response.json(order)
}