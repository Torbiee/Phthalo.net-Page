
import "./globals.css";


export default function RootLayout({children}) {
	return(
		<html lang="en" className="bg-gray-700">
		<body>{children}</body>
		</html>
	)
}
