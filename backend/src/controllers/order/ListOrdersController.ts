import { Request, Response } from "express"
import { ListOrdersService } from "../../services/order/ListOrdersService"

export const ListOrdersController = async (request: Request, response: Response) => response.json(await ListOrdersService())