import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

/* Tamaño del mapa */
const containerStyle = {
	width: "70vw",
	height: "60vh"
};

/* Aqui centramos el mapa -- lat: -33.4369,
	lng: -70.6344 ES PARA PLAZA ITALIA */
const center = {
	lat: -33.4369,
	lng: -70.6344
};

const vendedor1 = {
	lat: -33.4562,
	lng: -70.5936
};
const vendedor2 = {
	lat: -33.45659,
	lng: -70.58871
};
const vendedor3 = {
	lat: -33.418,
	lng: -70.6064
};

export const Map = () => {
	const { store, actions } = useContext(Context);
	return (
		<LoadScript googleMapsApiKey="AIzaSyB1GucpRkmWB21geTiUfWGORwEt1E3utC0">
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
				{/* Child components, such as markers, info windows, etc. */}
				<>
					{/* Markers son los pins en el mapa */}
					<div>
						{store.vendedores.map((person, position) => {
							return <Marker key={position} position={{ lat: person.lat, lng: person.lng }} />;
						})}
					</div>
					{/*	<Marker
						key="bellavista"
						position={{
							lat: -33.4322,
							lng: -70.6364
						}}
					/>
					<Marker
						key="las-condes"
						position={{
							lat: -33.4088,
							lng: -70.5671
						}}
					/>
					<Marker
						key="pudahuel"
						position={{
							lat: -33.4421,
							lng: -70.7641
						}}
					/>
					<Marker
						key="macul"
						position={{
							lat: -33.4851,
							lng: -70.5992
						}}
					/>
					<Marker
						key="santiago"
						position={{
							lat: -33.4489,
							lng: -70.6693
						}}
					/>
					<Marker key="vendedor1" position={vendedor1} />
					<Marker key="vendedor2" position={vendedor2} />
					<Marker key="vendedor3" position={vendedor3} />*/}
				</>
			</GoogleMap>
		</LoadScript>
	);
};

export const Maplist = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{store.vendedores.map((person, position) => {
				return (
					<div className="container mt-2 col-6 mx-auto" key={position}>
						<ul className="list-group">
							<li className="list-group-item">
								Nombre: <strong>{person.name}</strong>
								<p>
									Punto de Inicio:
									<strong>{person.address}</strong>
								</p>
								<p>
									Zona:
									<strong>{person.zone}</strong>
								</p>
								<h5>
									punto de retiro <span className="text-success">confirmado</span>
								</h5>
							</li>
						</ul>
					</div>
				);
			})}
		</div>
	);
};
