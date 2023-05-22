import { Request, Response } from "express"
import { DetailUserService } from "../../services/user/DetailUserService"

export const DetailUserController = async (request: Request, response: Response) => {
	const user_id = request.user_id

	const user = await DetailUserService(user_id)

	return response.json(user)
}