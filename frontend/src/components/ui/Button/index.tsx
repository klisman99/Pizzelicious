import { ButtonHTMLAttributes, ReactNode } from "react"
import { FaSpinner } from "react-icons/fa"

import styles from "./styles.module.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	loading?: boolean
}

export function Button({ loading, children, ...props }: ButtonProps) {
	return (
		<button className={styles.button} disabled={loading} {...props}>
			{loading
				? <FaSpinner color="#FFF" size={16} />
				: <a className={styles.text}>{children}</a>
			}
		</button>
	)
}