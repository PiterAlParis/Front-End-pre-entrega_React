import React from "react";

export default function Footer() {
	return (
		<footer style={{padding: '1rem', background: '#f5f5f5', marginTop: '2rem', textAlign: 'center'}}>
			<div>
				<small>© 2026 Mi tienda</small>
			</div>
			<div style={{marginTop:6}}>
				<a href="#">Términos</a> · <a href="#">Privacidad</a>
			</div>
		</footer>
	);
}

