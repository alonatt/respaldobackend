import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Login = () => {
	const [mail, setMail] = useState("");
	const [password, setPassword] = useState("");
	const { store, actions } = useContext(Context);

	return (
		<>
			{/* <h1 style={{ color: "black", textAlign: "center" }}>Bienvenido!</h1> */}
			<div className="row" id="divSignin">
				<div id="loginBox" className="col">
					<form
						onSubmit={e => {
							e.preventDefault();
							actions.enviarDatos(e, mail, password);
						}}>
						<h1>Acceso</h1>
						<select className="custom-select" id="inputGroupSelect01">
							<option selected>Selecciona tu Perfil</option>
							<option value="1">Transportista</option>
							<option value="2">Vendedor</option>
						</select>

						<input
							type="text"
							className="form-control"
							name="mail"
							placeholder="E-mail"
							onChange={e => {
								setMail(e.target.value);
							}}
						/>

						<input
							type="password"
							className="form-control"
							name="password"
							placeholder="Contraseña"
							onChange={e => {
								setPassword(e.target.value);
							}}
						/>
						<button
							type="submit"
							style={{ backgroundColor: "transparent" }}
							className="btn btn-primary"
							onClick={e => {
								e.preventDefault();
								actions.enviarDatos(e, mail, password);
							}}>
							Iniciar Sesión
						</button>

						<Link to="/sell">
							<button className="btn btn-danger">Ir a Pagina Privada</button>
						</Link>

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
						<br />
					</form>
				</div>
				<div className="col" style={{ marginTop: "100px" }}>
					<h2 style={{ color: "black" }}>
						¿Aún no cuentas con tu perfil?
						<br />
						Registrate, para obtener todos los beneficios de Fleet!
					</h2>
					<Link to="/signup">
						<button
							id="signupButton"
							type="submit"
							style={{ marginTop: "10px" }}
							className="btn btn-primary">
							Registrarse
						</button>
					</Link>
					<br />
					<Link to="/">
						<button
							id="signupButton"
							type="submit"
							style={{ marginTop: "120px" }}
							className="btn btn-primary">
							Volver a Inicio
						</button>
					</Link>
				</div>
			</div>

			{/* <Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link> */}
		</>
	);
};
