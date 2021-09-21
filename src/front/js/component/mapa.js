import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

{
	/* Tamaño del mapa */
}
const containerStyle = {

	width: "75vw",
	height: "80vh"
};

{
	/* Aqui centramos el mapa -- lat: -33.4369,
	lng: -70.6344 ES PARA PLAZA ITALIA */
}
const center = {
	lat: -33.4369,
	lng: -70.6344
};

export const Map = () => {
	return (
		<LoadScript googleMapsApiKey="AIzaSyB1GucpRkmWB21geTiUfWGORwEt1E3utC0">
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
				{/* Child components, such as markers, info windows, etc. */}
				<>
					{/* Markers son los pins en el mapa */}
					<Marker
						key="marker_1"
						position={{
							lat: -33.4322,
							lng: -70.6364
						}}
					/>
				</>
			</GoogleMap>
		</LoadScript>
	);
};
