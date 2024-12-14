import React, { useState } from 'react';
import Modal from './Modal';
import { useNavigate } from 'react-router';



const Card = ({ contact }) => {
  const [ismodalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)
  const navigate = useNavigate()

  return (

    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "white", }}>
      <div className="card col-3" style={{ width: "80rem", position: "relative", justifyContent: "center" }}>
        <div style={{ position: "absolute", top: "10px", right: "10px", display: "flex", gap: "10px" }}>
          <a href="#" className="bg-dark text-white p-3" onClick={openModal} style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "35px", height: "35px", borderRadius: "50%", backgroundColor: "text-black bg-white", color: "white", textDecoration: "none" }}>
            <i className="fa-sharp fa-solid fa-trash"></i></a>
          <a href="#" className="bg-dark text-white p-3" onClick={() => navigate(`/editcontacts/${contact.id}`)} style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "35px", height: "35px", borderRadius: "50%", backgroundColor: "#007bff", color: "white", textDecoration: "none" }}>
            <i class="fa-regular fa-pen-to-square"></i></a>
        </div>

        <div className="card-body" style={{ display: "flex", alignItems: "center" }}>
          <img src="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg" style={{ borderRadius: "100%", width: "200px", height: "150px", marginRight: "20px" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", }}>
            <p className="card-text" style={{ display: "flex", alignItems: "center", gap: "10px" }}> <h3>{contact.name}</h3> </p>
            <p className="card-text" style={{ display: "flex", alignItems: "center", gap: "10px" }} class="fa-solid fa-phone">{contact.phone}</p>
            <p className="card-text" style={{ display: "flex", alignItems: "center", gap: "10px" }} class="fa-regular fa-envelope">{contact.email}</p>
            <p className="card-text" style={{ display: "flex", alignItems: "center", gap: "10px" }} class="fa-solid fa-location-dot">{contact.address}</p>
          </div>
        </div>
        <Modal isOpen={ismodalOpen} onClose={closeModal} id={contact.id} />
      </div>


    </div>
  );
};
export default Card;


