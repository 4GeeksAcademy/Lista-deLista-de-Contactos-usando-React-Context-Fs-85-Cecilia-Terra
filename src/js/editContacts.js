import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "./store/appContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const EditContacts = () => {
    const { store, actions } = useContext(Context);
    const [editedContact, setEditedContact] = useState(null);
    const params = useParams() //parmetro que usamos
    const navigate = useNavigate()
    console.log(editedContact);

    useEffect(() => {

        console.table(store.contacts)
        let selectedContact = store.contacts.find((contact) => contact.id == params.id)//igualamos al id para que la utilice
        setEditedContact(selectedContact)
    }, [store.contacts])

    const handleChange = (e) => {
        setEditedContact({ ...editedContact, [e.target.name]: e.target.value })// trae una copia de mi estado
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        actions.editContacts(params.id, editedContact)
        navigate("/")
    }

    return (
        <div className="container">
            {editedContact == null ? <h1>Cargando</h1> : //espera que los datos se carguen, esto ahce que espere la llegada de datos            
            <ul className="list-group">
            <h1>Edit contact</h1>
            <h3>Full Name</h3>
            <input type="text" className="form-control" name="name" onChange={handleChange} value={editedContact.name} />
            <h2>Email</h2>
            <input type="text" className="form-control" name="email" onChange={handleChange} value={editedContact.email} />
            <h2>Phone</h2>
            <input type="text" className="form-control" name="phone" onChange={handleChange} value={editedContact.phone} />
            <h2>Address</h2>
            <input type="text" className="form-control" name="address" onChange={handleChange} value={editedContact.address} />

        </ul>
            }
          
                <div className="mt-3">
                    <button className="btn btn-primary w-100" onClick={handleSubmit}>Save</button>
                </div>
            <Link to="/">
                <span className="btn btn-outline-primary" href="#" role="button">
                    go back to contacts
                </span>
            </Link>

        </div>
    );
};

export default EditContacts;



