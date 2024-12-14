import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
import { useNavigate } from "react-router-dom";

const Addcontacts = () => {
	const { store, actions } = useContext(Context);
	const [fullName, setFullName] = useState("")
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [address, setAddress] = useState("")
	const navigate = useNavigate() //me lleva a otra pagina, vistas del layout, en un evento me puedo mover a otra pagina automaticamente 
	const contact = {
		name: fullName,
		phone: phone,
		email: email,
		address: address,
	}
	const handleSubmit = () => {
		actions.addContact(contact)
		navigate("/")

	}

	return (
		<div className="container">
			<ul className="list-group">
				<h1>Add a new Contact</h1>
				<h2>Full Name</h2>
				<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setFullName(e.target.value)} value={fullName} />
				<h2>Email</h2>
				<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} value={email} />
				<h2>Phone</h2>
				<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setPhone(e.target.value)} value={phone} />
				<h2>Address</h2>
				<input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setAddress(e.target.value)} value={address} />

				<div className="mt-3">
					<button className="btn btn-primary w-100" onClick={() => handleSubmit()}>Save</button>
				</div>

			</ul>
			<Link to="/">
				<span className="btn btn-primary btn-lg " href="#" role="button">
					go back to contacts
				</span>
			</Link>

		</div>
	);
};

export default Addcontacts;



