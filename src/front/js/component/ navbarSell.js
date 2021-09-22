import React from "react";
import { Link } from "react-router-dom";
import { Users } from "./users";

export const NavbarSell = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<div className="row col-4 mx-3">
				<Link to="/">
					<button type="button" className="btn btn-secondary">
						Fleet
					</button>
				</Link>
			</div>
			<div className="row col-3 ml-auto">
				<Users />
			</div>
		</nav>
	);
};
