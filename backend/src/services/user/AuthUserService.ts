import { prismaClient } from "../../prisma"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"

interface AuthRequest {
	email: string
	password: string
}

export const AuthUserService = async ({ email, password }: AuthRequest) => {
	const user = await prismaClient.user.findFirst({ where: { email } })

	if (!user) {
		throw new Error("User/password incorrect")
	}

	const passwordMatch = await compare(password, user.password)

	if (!passwordMatch) {
		throw new Error("User/password incorrect")
	}

	const token = sign(
		{
			name: user.name,
			email: user.email 
		},
		process.env.JWT_HASH,
		{
			subject: user.id,
			expiresIn: "30d"
		}
	)

	return {
		id: user.id,
		name: user.name,
		email: user.email,
		token: token
	}
}