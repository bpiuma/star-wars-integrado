import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

// npm install --save-dev @iconify/react @iconify-icons/bx
import { Icon, InlineIcon } from "@iconify/react";
import bxHeartSquare from "@iconify-icons/bx/bx-heart-square";

export const Card = props => {
	const { store, actions } = useContext(Context);
	const [fav, setFav] = useState(false);

	return (
		<div className="col-2 ml-3 mb-3 p-0" style={{ width: "18rem" }}>
			<div className="card">
				<img
					src="https://www.hola.com/imagenes/actualidad/20200103157393/ewan-mcgregor-star-wars-luke-gt/0-764-938/portada-obi-wan-t.jpg"
					className="card-img-top imagenCard"
				/>
				<div>
					<div className="card-body">
						<h5 className="card-title mb-2">{props.nombre}</h5>
						<p className="m-0 p-0">Descripcion</p>
						<div className="d-flex justify-content-between align-items-center">
							{props.tipo == "personaje" ? (
								<Link to={"/single/" + props.id}>
									<button className="btn btn-primary mt-3">Learn More!</button>
								</Link>
							) : (
								<Link to={"/singlePlanet/" + props.id}>
									<button className="btn btn-primary mt-3">Learn More!</button>
								</Link>
							)}

							{fav && actions.esFavorito(props.nombre) ? (
								<div
									className="mt-3 mr-0"
									onClick={() => {
										actions.eliminarFavorito(props.nombre);
										setFav(false);
									}}>
									<Icon icon={bxHeartSquare} color="red" height="40" />
								</div>
							) : (
								<div
									className="mt-3 mr-0"
									onClick={() => {
										actions.agregarFavorito(props.nombre);
										setFav(true);
									}}>
									<Icon icon={bxHeartSquare} color="grey" height="40" />
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	nombre: PropTypes.string,
	url: PropTypes.string,
	id: PropTypes.number,
	tipo: PropTypes.string
};
