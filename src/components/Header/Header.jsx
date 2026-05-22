import React from "react";
import { Nav } from "../../Nav/Nav";
import "./Header.css";
import logoPatitas from "../../assets/logo.png";

export default function Header() {
	return (
		<header className="header">
			<div className="header-brand">
				<img src={logoPatitas} alt="Logo Patitas" className="header-logo" />
				<h1>Patitas</h1>
			</div>
			<Nav />
		</header>
	);
}
