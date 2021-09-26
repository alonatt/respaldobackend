import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Selector } from "../component/filter";
import { Sidebar } from "../component/sidebar";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Sell = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			{store.logged ? (
				<div className="container-fluid row">
					<div className="col col-2">
						<Sidebar />
					</div>
					<div className="col col-10 mt-5">
						<h5>Bienvenido {store.detailseller.name} </h5>
						<p>¿donde necesitas enviar tu producto hoy?</p>
						<Selector />

						<Link to="/">
							<button>Go back</button>
						</Link>
					</div>
				</div>
			) : (
				<h1>No estas logeado</h1>
			)}
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
