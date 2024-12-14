import React, { useContext } from "react";
import "../../styles/home.css";
import Card from "../component/Card.jsx"
import Demo from "./addcontact.js";
import { Context } from "../store/appContext.js";




// aqui primera vista de los usuarios
export const Home = () => {
	//hook useEstate 
	const { actions, store } = useContext(Context)// hook ayuda a acceso al contexto ,pasa datos
	// return solo lo que qiuero que se vea
	return (
		< div className="text-center mt-5" >

			{store.contacts.map((contact, index) => (
				<Card contact={contact} key={index} />

			)

			)}

		</div >
	);
};
