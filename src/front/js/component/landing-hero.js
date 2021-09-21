import React from "react";
import heroImg from "../../img/heroImg.png";

export const HeroSection = () => {
	return (
		<div id="heroSection">
			<div className="container-fluid">
				<div className="row pt-5 h-100">
					<div className="col-11 col-sm-6">
						<h1 id="heroH1" className="text-white p-5">
							Hola! Somos Fleet y aqui es donde juntamos vendedores y repartidores
						</h1>
						<div>
							<button className="button pl-4">iniciar seccion</button>
							<button className="button pl-4">subscribe</button>
						</div>
					</div>
					<div className="col-11 col-sm-6 p-5">
						<img className="heroImg" src={heroImg} alt="Despachos" />
					</div>
				</div>
			</div>
		</div>
	);
};
