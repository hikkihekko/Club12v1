import React from "react";
import "./ModalConnect.css";
import {BsTelegram, BsInstagram, BsYoutube, BsWhatsapp, BsPhoneFill} from "react-icons/bs";


const ModalConnect = ({active, setActive}) =>{

    const BodyBclock = document.querySelector("body")
    BodyBclock.classList.toggle("modal-open", active);

    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="see-us">
                    <h4 className="more-info-header">СМОТРЕТЬ НАС :</h4>
                    <div className="more-info-social-block">
                        <ul className="socials">
                            <li><BsTelegram className="social"/></li>
                            <li><BsInstagram className="social"/></li>
                            <li><BsYoutube className="social"/></li>
                        </ul>
                    </div>
                </div>
                <div className="call-us">
                    <h4 className="more-info-header">СВЯЗАТЬСЯ С НАМИ :</h4>
                    <div className="more-info-social-block">
                        <ul className="socials">
                            <li><BsTelegram className="social"/></li>
                            <li><BsWhatsapp className="social"/></li>
                            <li><a href="tel:+97142473678" className="elementor-item"><BsPhoneFill className="social"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ModalConnect;