const getState = ({ getStore, getActions, setStore }) => {
	return {
		// en store estan las variables globales
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			personajes: [],
			planetas: []
		},

		// en actions estan las funciones para operar con las variables globales
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadSomeData: () => {
				//Traemos a los personajes
				fetch("https://www.swapi.tech/api/people")
					.then(resp => resp.json())
					.then(data => setStore({ personajes: data.results }))
					.catch(error => console.log(error));

				//Traemos a los planetas
				fetch("https://www.swapi.tech/api/planets")
					.then(resp => resp.json())
					.then(data => setStore({ planetas: data.results }))
					.catch(error => console.log(error));
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
