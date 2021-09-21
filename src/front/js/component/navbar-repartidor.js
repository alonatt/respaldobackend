import React from "react";
import { Link } from "react-router-dom";

export const NavbarRepartidor = () => {
	return (
		<nav className="navbar navbar-expand-lg fixed-top bg-light">
			<div className="container-fluid">
				<a className="navbar-brand text-secondary" href="#">
					Fleet Logo
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								inicio
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
