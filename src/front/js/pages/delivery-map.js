import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Map, Maplist } from "../component/map";
import { LeftSidebar } from "../component/left-sidebar";

export const DeliveryMap = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="margin">
			<LeftSidebar />
			<Map />
			<Maplist />
		</div>
	);
};
