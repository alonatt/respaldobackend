import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { HeroSection } from "../component/landing-hero";
import { Map } from "../component/mapa";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<HeroSection />
			<Map />
		</div>
	);
};
