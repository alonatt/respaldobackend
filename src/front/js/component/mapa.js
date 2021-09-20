import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { memo } from "react";

const containerStyle = {
	width: "50vw",
	height: "50vh"
};

const center = {
	lat: -33.4369,
	lng: -70.6344
};

export const Map = () => {
	return (
		<LoadScript googleMapsApiKey="AIzaSyB1GucpRkmWB21geTiUfWGORwEt1E3utC0">
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
				{/* Child components, such as markers, info windows, etc. */}
				<></>
			</GoogleMap>
		</LoadScript>
	);
};
