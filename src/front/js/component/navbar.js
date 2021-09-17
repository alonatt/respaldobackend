import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg fixed-top">
			<div className="container-fluid">
				<a className="navbar-brand text-white" href="#">
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
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">
								inicio
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								preguntas frecuentes
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								quienes somos
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								contactos
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
