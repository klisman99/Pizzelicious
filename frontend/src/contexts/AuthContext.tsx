"use client"

import { createContext, ReactNode, useState } from "react"
import { destroyCookie, setCookie, parseCookies } from "nookies"
import { toast } from "react-toastify"

import { api } from "@/services/apiClient"

interface UserProps {
	id: string
	name: string
	email: string
}

interface SignInProps {
	email: string
	password: string
}

interface SignUpProps {
	name: string
	email: string
	password: string
}

interface AuthContextData {
	user: UserProps
	isAuthenticated: boolean
	signIn: (credentials: SignInProps) => Promise<void>
	signOut: () => void
	signUp: (credentials: SignUpProps) => Promise<void>
}

interface AuthProviderProps {
	children: ReactNode
}

const COOKIE_MAXAGE_ONEMONTH = 60 * 60 * 24 * 30;

export const AuthContext = createContext({} as AuthContextData)

export function signOut() {
	try {
		destroyCookie(undefined, "@nextauth.token")
	} catch {
		console.log("Error while signing out")
	}
}

export function AuthProvider({ children }: AuthProviderProps) {
	const [ user, setUser ] = useState<UserProps>()
	const isAuthenticated = !!user

	async function signIn({ email, password }: SignInProps) {
		try {
			const response = await api.post("/auth", {
				email,
				password
			})

			const { id, name, token } = response.data

			setCookie(undefined, "@nextauth.token", token, {
				maxAge: COOKIE_MAXAGE_ONEMONTH,
				path: "/"
			})
			setUser({ id, name, email })

			api.defaults.headers["Authorization"] = `Bearer ${token}`
		} catch (error) {
			console.error("Sign in error", error)

			toast.error("There was an error while signing in")
		}
	}

	async function signUp({ name, email, password }: SignUpProps) {
		try {
			await api.post("/user", {
				name,
				email,
				password
			})

			toast.success("Account created with success!")
		} catch (error) {
			console.error(error)

			toast.error("There was an error while creating the account")
		}
	}

	return (
		<AuthContext.Provider value={{ user, isAuthenticated, signIn, signOut, signUp }}>
			{children}
		</AuthContext.Provider>
	)
}