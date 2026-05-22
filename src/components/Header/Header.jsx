import React from "react";
import { Nav } from "../../Nav/Nav";
import "./Header.css";
import "../../assets/logo.png";

export default function Header() {
	return (
		<header className="header">
			<div className="header-brand">
				<img src="/logo.png" alt="Logo Patitas" className="header-logo" />
				<h1>Patistas</h1>
			</div>
			<Nav />
		</header>
	);
}

