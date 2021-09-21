import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { HeroSection } from "../component/landing-hero";
import { Map } from "../component/mapa";
import { TeamMembers } from "../component/quienes-somos-card";
import { Contacto } from "../component/contacto";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<HeroSection />
			<TeamMembers />
			<Contacto />
			<Map />
		</div>
	);
};
