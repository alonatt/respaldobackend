import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Test = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div>
			<h1 className="display-4">TESTING!!</h1>

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};
