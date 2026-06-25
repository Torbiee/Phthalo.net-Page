
import "./globals.css";
import { Geist } from 'next/font/google'

const geist = Geist({
	subsets: ['latin'],
})


export default function RootLayout({children}) {
	return(
		<html lang="en" className="bg-black">
		<body>{children}</body>
		</html>
	)
}
