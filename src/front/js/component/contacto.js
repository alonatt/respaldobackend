import React from "react";

export const Contacto = () => {
	return (
		<div className="p-5 bg-light">
			<h1 className="text-center p-3">Contactanos</h1>
			<form>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Email address</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Enter email"
					/>
					<small id="emailHelp" className="form-text text-muted">
						We will never share your email with anyone else.
					</small>
				</div>
				<div className="form-group">
					<label htmlFor="exampleFormControlTextarea1">Mensaje...</label>
					<textarea className="form-control" id="exampleFormControlTextarea1" rows="3" />
				</div>

				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};
