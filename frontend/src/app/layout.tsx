import { Metadata } from "next"
import { ToastContainer } from "react-toastify"

import { AuthProvider } from "@/contexts/AuthContext"

import "./global.sass"
import "react-toastify/dist/ReactToastify.min.css";

export const metadata: Metadata = {
	title: {
		default: "Sign in | Pizzelicious",
		template: "%s | Pizzelicious"
	}
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<AuthProvider>
					{children}
				</AuthProvider>
				<ToastContainer autoClose={3000} />
			</body>
		</html>
	)
}