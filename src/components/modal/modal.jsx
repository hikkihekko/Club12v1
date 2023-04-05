import React from "react";
import "./modal.css";
import ContactForm from "../ContactForm/ContactForm";

const Modal = ({active, setActive}) =>{
    const BodyBclock = document.querySelector("body")
    BodyBclock.classList.toggle("modal-open", active);

    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <ContactForm/>
            </div>
        </div>
    )
};

export default Modal;