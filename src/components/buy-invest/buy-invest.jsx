import React,{useState} from "react";
import "./buy-invest.css";
import Modal from "../modal/modal";

function BuyInvest() {
    const [ModalActive, setModalActive] = useState(false);

    return(
        <div id="buy-invest" className="buy-invest">
            <div className="buy-invest-container">
                <div className="buy-block">
                    <h3>Закажи мечту</h3>
                <div className="text-container">
                    <p>Давай создадим твой идеальный дом вместе </p>
                </div>
                </div>
            </div>
            <div className="buy-invest-container ">
                <div className="invest-block">
                    <h3>Получи выгоду</h3>
                    <div className="text-container">
                        <p>Заказывай у Future - защити свой дом и получи инновационные решения по красоте интерьера</p>
                        <button onClick={()=> setModalActive(true)}>Связаться с нами</button>
                    </div>
                    <Modal active={ModalActive} setActive={setModalActive}/>
                </div>
            </div>
        </div>
    )
}

export default BuyInvest;