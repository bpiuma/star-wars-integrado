import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const Card = props => {
	return (
		<div className="col-2 ml-3 mb-3 p-0" style={{ width: "18rem" }}>
			<div className="card">
				<img src="https://picsum.photos/seed/picsum/300/200" className="card-img-top" />
				<div className="card-body">
					<h5 className="card-title">{props.nombre}</h5>
					<p className="m-0 p-0">Descripcion</p>
					<Link to={"/single/" + props.id}>
						<button className="btn btn-primary mt-3">Learn More!</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	nombre: PropTypes.string,
	url: PropTypes.string,
	id: PropTypes.number
};
