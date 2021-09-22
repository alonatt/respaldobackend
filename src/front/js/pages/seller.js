import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Sidebar } from "../component/sidebar";
import { Selector } from "../component/filter";
import { Allseller } from "../component/allseller";

export const Seller = () => {
	const { store, actions } = useContext(Context);
	const { idseller } = useParams();

	useEffect(() => {
		actions.loadDetailseller(idseller);
	}, []);

	return (
		<>
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
		</>
	);
};
