import React,{useState} from "react";
import "./buy-invest.css";
import Modal from "../modal/modal";

function BuyInvest() {
    const [ModalActive, setModalActive] = useState(false);

    return(
        <div id="buy-invest" className="buy-invest">
            <div className="buy-invest-container">
                <div className="buy-block">
                    <h3>Купить кваритру</h3>
                    <p>При покупке 100% - 1 000 000 тг квм </p>
                    <p>При покупке 50% - 1 200 000 тг квм</p>
                </div>
                <div className="invest-block">
                    <h3>Цена инвестиции:</h3>
                    <p>Инвестиционное предложение <br/> для ранних инвесторов 150 000 000 тенге </p>
                    <span>(минимальная сумма от 5 000 000)</span>
                    <span>Доходность 30% </span>
                    <button onClick={()=> setModalActive(true)}>Связаться с нами</button>
                    <Modal active={ModalActive} setActive={setModalActive}/>
                </div>
            </div>
        </div>
    )
}

export default BuyInvest;