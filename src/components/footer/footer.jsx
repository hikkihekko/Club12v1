import React from "react";
import "./footer.css";
import {BsTelegram, BsInstagram, BsYoutube, BsWhatsapp, BsPhoneFill} from "react-icons/bs";

function Footer(){

    return(
        <footer id="footer" className="footer">
            <div className="footer-container">
                <div className="more-info">
                    <h4 className="more-info-header">СМОТРЕТЬ НАС :</h4>
                    <div className="more-info-social-block">
                        <ul className="socials">
                            <li><BsTelegram className="social"/></li>
                            <li><BsInstagram className="social"/></li>
                            <li><BsYoutube className="social"/></li>
                        </ul>
                    </div>
                    <h4 className="more-info-header">СВЯЗАТЬСЯ С НАМИ :</h4>
                    <div className="more-info-social-block">
                        <ul className="socials">
                            <li><BsTelegram className="social"/></li>
                            <li><BsWhatsapp className="social"/></li>
                            <li><a href="tel:+97142473678" className="elementor-item"><BsPhoneFill className="social"/></a></li>
                        </ul>
                    </div>
                    <p className="call-paragraph">
                        Построим счастливый дом для вашей семьи!
                    </p>
                </div>
            </div>
        </footer>
    )
};

export default Footer;