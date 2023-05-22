import { Request, Response } from "express"
import { AuthUserService } from "../../services/user/AuthUserService"

export const AuthUserController = async (request: Request, response: Response) => {
	const { email, password } = request.body

	const auth = await AuthUserService({ email, password })

	return response.json(auth)
}