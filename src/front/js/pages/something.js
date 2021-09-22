import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Sidebar } from "../component/sidebar";
import { Selector } from "../component/filter";
import { Allseller } from "../component/allseller";

export const Something = () => (
	<div className="text-center mt-5">
		<h1>Any</h1>
		<Allseller />

		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
