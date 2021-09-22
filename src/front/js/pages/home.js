import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { HeroSection } from "../component/landing-hero";
import { TeamMembers } from "../component/quienes-somos-card";
import { Contacto } from "../component/contacto";
import { PreguntasFrecuentes } from "../component/PreguntasFrecuentes";
import { Allseller } from "../component/allseller";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<HeroSection />
			<TeamMembers />
			<Contacto />
			<PreguntasFrecuentes />
			<Allseller />
		</div>
	);
};
