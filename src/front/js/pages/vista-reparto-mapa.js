import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Map } from "../component/mapa";
import { LeftSidebar } from "../component/left-sidebar";

export const RepartidorMapa = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="margin">
			<LeftSidebar />
			<Map />
		</div>
	);
};
