import React, { useState } from 'react';
import Modal from './Modal';
import { useNavigate } from 'react-router';



const Card = ({ contact }) => {
  const [ismodalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)
  const navigate = useNavigate()

  return (

    <div>
      <div className="card col-3" style={{ width: "50rem" }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <img src="" />
          <p className="card-text">{contact.name}</p>
          <p className="card-text">{contact.phone}</p>
          <p className="card-text">{contact.email}</p>
          <p className="card-text">{contact.address}</p>
          <a href="#" className="btn btn-primary" onClick={openModal}> <i class="fa-sharp fa-solid fa-trash" ></i></a>
          <a href="#" className="btn btn-primary" onClick={() => navigate(`/editcontacts/${contact.id}`)}> <i >X</i></a>
        </div>
      </div>
      <Modal isOpen={ismodalOpen} onClose={closeModal} id={contact.id} />

    </div>
  );
};
export default Card;