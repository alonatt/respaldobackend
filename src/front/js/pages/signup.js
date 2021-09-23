import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Signup = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div id="divSignin">
				<div className="signinBox">
					<form>
						<h1>Registro de Cuenta</h1>
						<select className="custom-select" id="inputGroupSelect01">
							<option selected>Selecciona tu Perfil</option>
							<option value="1">Transportista</option>
							<option value="2">Vendedor</option>
						</select>
						<input type="text" className="form-control" name="name" placeholder="Nombre" />
						<input type="text" className="form-control" name="lastName" placeholder="Apellido" />
						<input type="text" className="form-control" name="rut" placeholder="RUT" />
						<input type="text" className="form-control" name="mail" placeholder="E-mail" />

						<input type="text" className="form-control" name="phone" placeholder="Teléfono" />
						<input type="text" className="form-control" name="address" placeholder="Dirección" />
						<input type="password" className="form-control" name="password" placeholder="Contraseña" />
						<br />
						<select className="custom-select" id="inputGroupSelect02">
							<option selected> Pregunta Seguridad</option>
							<option value="1">Película Favorita</option>
							<option value="2">Nombre de tu última mascota</option>
							<option value="1">Animal Favorito</option>
						</select>
						<input type="password" className="form-control" name="" placeholder="Respuesta" />

						<Link to="/login">
							<button
								type="submit"
								style={{ backgroundColor: "transparent" }}
								className="btn btn-primary">
								Iniciar Sesión
							</button>
						</Link>
					</form>
					<form action="login.html" method="POST" />
				</div>
			</div>
		</>
	);
};
