import React from "react";
import { Link } from "react-router-dom";

export const NavbarDelivery = () => {
	return (
		<nav className="navbar navbar-expand-lg fixed-top bg-light">
			<div className="container-fluid">
				<Link to="/">
					<a className="navbar-brand text-secondary" href="#">
						Fleet Logo
					</a>
				</Link>
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
							<Link to="/">
								<a className="nav-link active text-secondary" aria-current="page" href="#">
									inicio
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
