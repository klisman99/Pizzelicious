import { Request, Response } from "express"
import { CreateUserService } from "../../services/user/CreateUserService"

export const CreateUserController = async (request: Request, response: Response) => {
	const { name, email, password } = request.body

	const user = await CreateUserService({ name, email, password })

	return response.json(user)
}