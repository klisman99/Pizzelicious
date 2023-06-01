import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import logoImg from "../../../public/coollogo_com-96512296.png"
import styles from "./styles.module.scss"
import SignUpForm from "./SignUpForm"

export const metadata: Metadata = {
	title: "Sign up"
}

export default function SignUp() {
	return (
		<div className={styles.container}>
			<Image
				src={logoImg}
				alt="Pizzelicious Logo"
				width={500}
			/>
			<div className={styles.login}>
				<h1>Account create</h1>
				<SignUpForm />
				<Link href="" className={styles.text}>Already have an account? Sign in</Link>
			</div>
		</div>
	)
}