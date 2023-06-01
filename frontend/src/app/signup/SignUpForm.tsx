"use client"

import { useState, useContext, FormEvent } from "react"
import { useRouter } from "next/navigation"

import { Input } from "@/components/ui/Input"
import { Button } from "@/components/ui/Button"

import { AuthContext } from "@/contexts/AuthContext"

export default function SignUpForm() {
	const router = useRouter()
	const { signUp } = useContext(AuthContext)

	const [ name, setName ] = useState("")
	const [ email, setEmail ] = useState("")
	const [ password, setPassword ] = useState("")

	const [ loading, setLoading ] = useState(false)

	async function handleSignUp(event: FormEvent) {
		event.preventDefault()

		if (name === "" || email === "" || password === "") {
			return;
		}

		setLoading(true)

		await signUp({ name, email, password })

		router.push("/")
	}

	return (
		<form>
			<Input
				type="text"
				placeholder="Full name"
				value={name}
				onChange={e => setName(e.target.value)}
			/>
			<Input
				type="text"
				placeholder="E-mail"
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<Input
				type="text"
				placeholder="Password"
				value={password}
				onChange={e => setPassword(e.target.value)}
			/>
			<Button
				type="submit"
				loading={loading}
				onClick={handleSignUp}
			>
				Sign up
			</Button>
		</form>
	)
}