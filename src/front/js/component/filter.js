import React, { useState, useEffect, useContext } from "react";

export const Selector = () => {
	const [filter, setFilter] = useState("");

	//aca se supone tendre los datos de la api que aun no tengo
	var datos = [
		{ nombre: "juanito", recibe: "centro", entrega: "centro", precio: "1000" },
		{ nombre: "juaniti", recibe: "centro", entrega: "norte", precio: "2000" },
		{ nombre: "juan", recibe: "centro", entrega: "centro", precio: "1200" },
		{ nombre: "renato", recibe: "sur", entrega: "centro", precio: "200000" }
	];
	//esta funcion me dice que cosa seleccioné
	const handleChange = e => {
		console.log("element Selected!!", e.target.value);
		setFilter(e.target.value); //significa que como filtro ya tendrá un parámetro mostrará los que cumplan solamente
	};

	return (
		<div className="selector">
			<div className="select-container">
				<select value="option" onChange={handleChange}>
					<option value="norte"> Norte</option>
					<option value="centro"> Centro</option>
					<option value="sur"> Sur</option>
					<option value="periferia"> Periferia</option>
				</select>
				{/* Aca alondra estará la tabla segun lo que selecciono la persona */}

				<table className="table">
					<thead>
						<tr>
							<th>nombre</th>
							<th>recibe</th>
							<th>entrega</th>
							<th>monto</th>
						</tr>
					</thead>
					<tbody>
						{datos.map((value, key) => {
							return (
								<>
									{value.recibe === filter ? (
										<tr>
											<td>{value.nombre}</td>
											<td>{value.recibe}</td>
											<td>{value.entrega}</td>
											<td>{value.precio}</td>
											<td>
												<button
													onClick={() => {
														alert(
															"Este es el perfil de la persona, tiene 5 estrellas y es ficha :D "
														);
													}}>
													Ver Perfil{" "}
												</button>
											</td>
										</tr>
									) : (
										""
									)}
								</>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};
