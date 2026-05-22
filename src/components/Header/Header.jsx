import React from "react";
import { Nav } from "../../Nav/Nav";
import "./Header.css";
import logoPatitas from "../../assets/logo.png";

export default function Header() {
	return (
		<header className="header">
			<div className="header-brand">
				<img src=¨{logoPatistas} alt="Logo Patitas" className="header-logo" />
				<h1>Patistas</h1>
			</div>
			<Nav />
		</header>
	);
}

