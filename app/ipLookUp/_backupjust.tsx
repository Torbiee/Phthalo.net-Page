export default function page() {
	return (
		<title>Heckin IP</title>
		<h1>Your IP Address is:</h1>
		<div>
			<div id='ip-display'>Loading....</div>
			<button id='refreshButton'>Refresh</button>
		</div>

			const ipDisplay = document.getElementById('ip-display');
			const refreshButton = document.getElementById('refreshButton');
const fetchIp= async () => {
				try {
					const response = await fetch("https://ipify.org");
					const data = await response.json();
					ipDisplay.textContent = data.ip;
				} catch (error) {
					ipDisplay.textContent = 'Error fetching IP';
					console.error('Error:', error);
				}
			document.addEventListener('DOMContentLoaded', ipGrab);
			refreshButton.addEventListener('click', ipGrab);
}


					    )	
}

