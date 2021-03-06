import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";

import { Context } from "../store/appContext";

import { Card } from "../component/card";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mt-2">
			<h2 className="ml-3" style={{ color: "red" }}>
				Characters
			</h2>
			<div className="contenedor d-flex mt-3 mb-3">
				{store.personajes.map((elem, i) => {
					return (
						<Card
							key={i}
							id={i + 1}
							nombre={elem.name}
							url={elem.url}
							tipo={"personaje"}
							source={store.imgPersonajes[i]}
						/>
					);
				})}
			</div>
			<h2 className="ml-3" style={{ color: "red" }}>
				Planets
			</h2>
			<div className="contenedor d-flex mt-3 mb-3">
				{store.planetas.map((elem, i) => {
					return (
						<Card
							key={i}
							id={i + 1}
							nombre={elem.name}
							url={elem.url}
							tipo={"planeta"}
							source={store.imgPlanetas[i]}
						/>
					);
				})}
			</div>
		</div>
	);
};
