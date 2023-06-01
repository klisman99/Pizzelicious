"use client"

import { useState, useContext, FormEvent } from "react"
import { useRouter } from "next/navigation"

import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"

import { AuthContext } from "@/contexts/AuthContext"

import { toast } from "react-toastify"

export default function HomeForm() {
	const router = useRouter()
	const { signIn } = useContext(AuthContext)

	const [ email, setEmail ] = useState("")
	const [ password, setPassword ] = useState("")

	const [ loading, setLoading ] = useState(false)

	async function handleSignIn(event: FormEvent) {
		event.preventDefault()

		toast.info("teste")

		if (email === "" || password === "") {
			return;
		}

		setLoading(true)
		
		await signIn({ email, password })

		router.push("/dashboard")
	}

	return (
		<form>
			<Input
				type="text"
				placeholder="E-mail"
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<Input
				type="password"
				placeholder="Password"
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<Button
				type="submit"
				loading={loading}
				onClick={handleSignIn}
			>
				Sign in
			</Button>
		</form>
	)
}