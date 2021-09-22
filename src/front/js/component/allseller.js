import React, { useContext, useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Allseller = () => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="card text-center ml-5" style={{ width: "30rem" }}>
				<div className="card-body">
					<h2>Somos vendedores Fake</h2>
					{store.seller.map((seller, posicion) => {
						return (
							<div key={posicion}>
								<div className="row" key={posicion}>
									<span>
										{" "}
										Bienvenido {seller.name}{" "}
										<Link to={"/seller/" + seller.id}>
											<button className="btn btn-secondary"> Ir</button>
										</Link>{" "}
									</span>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};
