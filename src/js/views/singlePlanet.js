import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	const [planeta, setPlaneta] = useState({});

	fetch("https://www.swapi.tech/api/planets/" + params.theid)
		.then(resp => resp.json())
		.then(data => setPlaneta(data.result.properties))
		.catch(error => console.log(error));

	return (
		<div className="bt-3 fondoPla">
			<div className="container mt-5">
				<div className="row">
					<div className="col-7">
						<img src={store.imgPlanetas[params.theid - 1]} className="imagenSingle" />
					</div>
					<div className="col-5 text-light">
						<h1 className="text-center mb-3">{planeta.name}</h1>
						<p className="text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies nisi metus, non
							mattis mi faucibus nec. Ut cursus dui magna, sed sagittis lorem convallis in. Nulla
							ultrices, erat eget mollis consectetur, dui magna vehicula orci, at tincidunt dolor tortor
							eget odio. Vestibulum blandit ligula in aliquet posuere. Praesent vitae massa non lectus
							cursus ornare id ac nisi. Maecenas eget elit et nisl aliquam vulputate.
							<br /> <br /> Duis commodo et metus sit amet congue. Vestibulum nec nisi eget risus lacinia
							faucibus vitae a neque. Nam ante leo, fermentum et ornare vitae, lacinia a ex. Nulla
							facilisi. Proin non lacinia odio, egestas scelerisque risus. Nullam et nisi et ex congue
							ullamcorper non id eros. Sed scelerisque eu quam sed convallis. Sed blandit facilisis ligula
							non bibendum. Etiam fringilla est id ullamcorper aliquet. Duis rhoncus lacus sit amet ligula
							lobortis, vel venenatis ligula dictum.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col-12 border-bottom border-danger mt-4 mb-4" />
				</div>
				<div className="row">
					<div className="col-2 text-center text-danger">
						<p className="font-weight-bold">Name</p>
						<p className="font-italic">{planeta.name}</p>
					</div>
					<div className="col-2 text-center text-danger">
						<p className="font-weight-bold">Climate</p>
						<p className="font-italic">{planeta.climate}</p>
					</div>
					<div className="col-2 text-center text-danger">
						<p className="font-weight-bold">Population</p>
						<p className="font-italic">{planeta.population}</p>
					</div>
					<div className="col-2 text-center text-danger">
						<p className="font-weight-bold">Orbital Period</p>
						<p className="font-italic">{planeta.orbital_period}</p>
					</div>
					<div className="col-2 text-center text-danger">
						<p className="font-weight-bold">Rotation Period</p>
						<p className="font-italic">{planeta.rotation_period}</p>
					</div>
					<div className="col-2 text-center text-danger">
						<p className="font-weight-bold">Diameter</p>
						<p className="font-italic">{planeta.diameter}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
