import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);

	const login = e => {
		e.preventDefault();
		actions.login("bpiuma.uy@gmail.com", "123");
	};

	return (
		<div className="container text-white d-flex justify-content-center">
			<form className="col-6" onSubmit={login}>
				<div className="form-group d-flex justify-content-center">
					<h1>Login</h1>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Email</label>
					<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" />
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
