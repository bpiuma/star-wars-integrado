import React, { useContext, useState } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);

	const [mail, setMail] = useState("");
	const [pass, setPass] = useState("");

	const login = e => {
		e.preventDefault();
		actions.login(mail, pass);
	};

	return (
		<div className="container text-white d-flex justify-content-center">
			<form className="col-6" onSubmit={login}>
				<div className="form-group d-flex justify-content-center">
					<h1>Login</h1>
				</div>
				<div className="form-group">
					<label htmlFor="inputEmail">Email</label>
					<input
						type="email"
						className="form-control"
						id="inputEmail"
						aria-describedby="emailHelp"
						onChange={e => setMail(e.target.value)}
						value={mail}
					/>
				</div>
				<div className="form-group">
					<label htmlFor="inputPassword">Password</label>
					<input
						type="password"
						className="form-control"
						id="inputPassword"
						onChange={e => setPass(e.target.value)}
						value={pass}
					/>
				</div>
				<div className="form-group form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" />
					<label className="form-check-label" htmlFor="exampleCheck1">
						Check me out
					</label>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
		</div>
	);
};
