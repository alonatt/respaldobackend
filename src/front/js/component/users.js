import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Users = () => {
	const { store, actions } = useContext(Context);
	const { idseller } = useParams();

	useEffect(() => {
		actions.loadDetailseller(idseller);
	}, []);

	return (
		<div className="card bg-light">
			<div className="row">
				<div className="col col-8">
					<div className="card-body">
						<span>Bienvenido {store.detailseller.username}</span>
					</div>
				</div>
				<div className="col col-3">
					<img
						src="https://static.vecteezy.com/system/resources/previews/002/387/693/non_2x/user-profile-icon-free-vector.jpg"
						className="img-fluid rounded-start"
					/>
				</div>
			</div>
		</div>
	);
};
