const getState = ({ getStore, getActions, setStore }) => {
	return {
		// en store estan las variables globales
		store: {
			personajes: [],
			planetas: [],
			favoritos: [],
			imgPersonajes: [
				"https://www.hola.com/imagenes/actualidad/20200103157393/ewan-mcgregor-star-wars-luke-gt/0-764-938/portada-obi-wan-t.jpg",
				"https://i1.wp.com/wipy.tv/wp-content/uploads/2020/09/pierna-plateada-de-c3po.jpg",
				"https://cadenaser00.epimg.net/ser/imagenes/2017/06/29/gente/1498741307_615132_1498741388_rrss_normal.jpg",
				"https://i0.wp.com/hipertextual.com/wp-content/uploads/2020/01/hipertextual-star-wars-deseo-mas-grande-darth-vader-podria-hacerse-realidad-muy-pronto-2020659163.jpg",
				"https://www.tuenlinea.com/wp-content/uploads/2018/08/Fallece-Carrie-Fisher-Princesa-Leia-Organa-de-Star-Wars.jpg",
				"https://lh3.googleusercontent.com/proxy/YiV4NjCqOoqvDL3YE7-fdJsH9BsoIKoOjadbS2RCj-xjpkCc6020zAutRrZ4hrLCcUsrCX2t63ZK6lmI8iPhzwL1JtL_mFwsIXKH1WA62uUCmK8aEVXU7-gaLKVgcQ",
				"https://i.pinimg.com/originals/29/71/e3/2971e3eaaac6d31679aa0339f0b0c11b.jpg",
				"https://www.renderhub.com/ardera/r5-d4-astromech-droid/r5-d4-astromech-droid-01.jpg",
				"https://static.wikia.nocookie.net/esstarwars/images/0/00/BiggsHS-ANH.png/revision/latest?cb=20190110214931",
				"https://blogdesuperheroes.es/imagen-noti/104900_big.jpg"
			],
			imgPlanetas: [
				"https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357",
				"https://static.wikia.nocookie.net/esstarwars/images/4/4a/Alderaan.jpg/revision/latest?cb=20100723184830",
				"https://static.wikia.nocookie.net/esstarwars/images/d/d4/Yavin-4-SWCT.png/revision/latest?cb=20170924222729",
				"https://static.wikia.nocookie.net/esstarwars/images/1/1d/Hoth_SWCT.png/revision/latest?cb=20170802030704",
				"https://static.wikia.nocookie.net/esstarwars/images/5/58/Dagobah_FDNP.png/revision/latest?cb=20170622141310",
				"https://static.wikia.nocookie.net/esstarwars/images/2/2c/Bespin_EotECR.png/revision/latest?cb=20170527220537",
				"https://static.wikia.nocookie.net/esstarwars/images/5/50/Endor_FFGRebellion.png/revision/latest?cb=20170629163352",
				"https://static.wikia.nocookie.net/esstarwars/images/f/f0/Naboo_planet.png/revision/latest?cb=20190928214307",
				"https://static.wikia.nocookie.net/esstarwars/images/9/92/Coruscant_SWCT.png/revision/latest?cb=20200927225715",
				"https://static.wikia.nocookie.net/starwars/images/1/1d/Manaan_sw_tor.jpg/revision/latest?cb=20190624194757"
			]
		},

		// en actions estan las funciones para operar con las variables globales
		actions: {
			agregarFavorito: fav => {
				if (!getActions().esFavorito(fav)) {
					let store = getStore();
					setStore({ favoritos: [...store.favoritos, fav] });
				}
			},

			esFavorito: fav => {
				let store = getStore();
				return store.favoritos.includes(fav);
			},

			eliminarFavorito: fav => {
				let aux = getStore().favoritos;
				aux.map((elem, i) => {
					if (elem == fav) {
						aux.splice(i, 1);
					}
				});
				setStore({ favoritos: aux });
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
			}
		}
	};
};

export default getState;
