import React from "react";
import "./footer.css";
import {BsTelegram, BsInstagram, BsYoutube,} from "react-icons/bs";

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
                </div>
                <div className="logo-footer"></div>
            </div>
        </footer>
    )
};

export default Footer;