import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						className="star"
						src="https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-1-1.png"
					/>
				</span>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<a
						className="btn btn-primary btn-lg dropdown-toggle d-flex align-items-center"
						href="#"
						role="button"
						id="dropdownMenuLink"
						data-toggle="dropdown"
						aria-haspopup="true"
						aria-expanded="false">
						Favorites
						<button type="button" className="btn btn-secondary btn-sm ml-2">
							{store.favoritos.length}
						</button>
					</a>

					<div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
						{store.favoritos.length == 0 ? (
							<a className="dropdown-item d-flex justify-content-between align-items-center" href="#">
								No favorites added
							</a>
						) : null}
						{store.favoritos.map((elem, i) => {
							return (
								<a
									key={i}
									className="dropdown-item d-flex justify-content-between align-items-center"
									href="#">
									{elem}
									<i
										className="fas fa-trash-alt ml-3 float-right"
										onClick={() => actions.eliminarFavorito(elem)}
									/>
								</a>
							);
						})}
					</div>
				</div>
			</div>
		</nav>
	);
};
