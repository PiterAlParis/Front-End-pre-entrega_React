import React from "react";
import { Nav } from "../../Nav/Nav";

export default function Header() {
	return (
		<header style={{padding: '1rem', background: '#f5f5f5', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
			<h1 style={{margin:0}}>Mi tienda</h1>
			<Nav />
		</header>
	);
}

