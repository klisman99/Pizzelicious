import Image from "next/image"
import Link from "next/link"

import SignInForm from "./SignInForm"

import logoImg from "../../../public/coollogo_com-96512296.png"
import styles from "./styles.module.scss"

export default function Home() {
	return (
		<div className={styles.container}>
			<Image
				src={logoImg}
				alt="Pizzelicious Logo"
				width={500}
			/>
			<div className={styles.login}>
				<SignInForm />
				<Link href="/signup" className={styles.text}>Don't have a account? Sign up</Link>
			</div>
		</div>
	)
}