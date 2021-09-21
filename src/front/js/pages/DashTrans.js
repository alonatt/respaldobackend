import React from "react";
import { LeftSidebar } from "../component/left-sidebar";

export const DashTrans = () => {
	return (
		<div className="MarginDashTrans">
			<LeftSidebar />
			<div className="container w-50">
				<h1>Lista de Precios Según Sector</h1>
				<table className="table table-light">
					<thead>
						<tr>
							<th scope="col">#</th>
							<th scope="col">First</th>
							<th scope="col">Last</th>
							<th scope="col">Handle</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th scope="row">1</th>
							<td>Mark</td>
							<td>Otto</td>
							<td>@mdo</td>
						</tr>
						<tr>
							<th scope="row">2</th>
							<td>Jacob</td>
							<td>Thornton</td>
							<td>@fat</td>
						</tr>
						<tr>
							<th scope="row">3</th>
							<td>Larry</td>
							<td>the Bird</td>
							<td>@twitter</td>
						</tr>
					</tbody>
				</table>
				<h4>** Montos Referenciales</h4>
				<div className="row">
					<button type="button" className="btn btn-primary mx-2">
						Editar Informacion
					</button>
					<button type="button" className="btn btn-primary">
						Guardar
					</button>
				</div>
			</div>
		</div>
	);
};
