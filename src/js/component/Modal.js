import React, { useState } from 'react';
import { Context } from '../store/appContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router';


// modal desplegable
const Modal = ({ isOpen, onClose, id }) => {
    const { actions, store } = useContext(Context)
    const navigate = useNavigate()

    const handleDelete = () => {
        actions.deleteContact(id)
        onClose()
    }

    //logitech mecanico, para programar
    //siempre se redacta igual

    if (!isOpen)
        return null;
    return (
        <div>

            <div className="modal show" tabIndex="-1" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={() => handleDelete()}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};


export default Modal;
