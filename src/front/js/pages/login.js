import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Login = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div id="divSignin">
				<div className="signinBox">
					<form>
						<h1>Acceso</h1>
						<select className="custom-select" id="inputGroupSelect01">
							<option selected>Selecciona tu Perfil</option>
							<option value="1">Transportista</option>
							<option value="2">Vendedor</option>
						</select>

						<input type="text" className="form-control" name="mail" placeholder="E-mail" />

						<input type="password" className="form-control" name="password" placeholder="Contraseña" />
						<button type="submit" style={{ backgroundColor: "transparent" }} className="btn btn-primary">
							Iniciar Sesión
						</button>
						<br />
						<br />
						<h6 style={{ color: "white" }}>¿Olvidaste tu Contraseña?</h6>

						<select className="custom-select" id="inputGroupSelect02">
							<option selected> Pregunta seguridad</option>
							<option value="1">Película Favorita</option>
							<option value="2">Nombre de tu última mascota</option>
							<option value="1">Animal Favorito</option>
						</select>
						<input type="password" className="form-control" name="" placeholder="Respuesta" />
						<button type="submit" style={{ backgroundColor: "transparent" }} className="btn btn-primary">
							Recuperar Contraseña
						</button>
					</form>
					<form action="login.html" method="POST" />
				</div>
			</div>

			{/* <Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link> */}
		</>
	);
};
