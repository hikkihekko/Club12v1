import React, {useState,useEffect} from "react";
import { useInView } from 'react-intersection-observer';
import "./AboutProject.css"
import Modal from "../modal/modal";

function AboutProject(){
    const [ModalActive, setModalActive] = useState(false);


    const [ViewCard1, SetViewCard1] = useState(false);
    const { ref:Card1, inView: inViewCard1 } = useInView({
      threshold: 0.2,
    });
  
    useEffect(()=>{
      if (inViewCard1) {
        SetViewCard1(true)
      }
    },[inViewCard1]);

    const [ViewCard2, SetViewCard2] = useState(false);
    const { ref:Card2, inView: inViewCard2 } = useInView({
      threshold: 0.2,
    });
  
    useEffect(()=>{
      if (inViewCard2) {
        SetViewCard2(true)
      }
    },[inViewCard2]);


    return(
        <div id="advanteges" className="OurAdvantages">
            <h2 className="advanteges-header">FUTURE заботится о благосостоянии каждого клиента.</h2>
            <div ref={Card1} className={`about-project-card ${ViewCard1 ? 'visible' : ''}`}>
                <div className="advantages-container container1">
            </div>
            <div className="about-project-text-container">
                <p className="advantages-paragraph"> Наша команда находит индевидуальный подход к каждому проекту, старается раскрыть все нотки души заказчика, чтобы сделать для него идеальные уссловия. </p>
                <p className="advantages-paragraph">FUTURE - это про ваше будушее!</p>
                <button onClick={()=> setModalActive(true)}>Связаться с нами</button>
                <span className="about-project-connect-text">Чтобы получить детальную информацию <br/> по проекту нажмите на эту кнопку</span>
            </div>
            </div>
            <div ref={Card2} className={`about-project-card ${ViewCard2? 'visible' : ''}`}>
                <div className="about-project-text-container">
                    <h2 className="advanteges-header">Future: мы создаем не только дома, но и Ваше будущее! </h2>
                    <p className="advantages-paragraph">Добро пожаловать в Future - компанию, которая создает будущее вашей мечты! Мы специализируемся на строительстве жилых домов на заказ, которые сочетают в себе элегантный дизайн и высокое качество. </p>
                    <p className="advantages-paragraph">Мы предлагаем индивидуальный подход к каждому проекту, который учитывает все ваши потребности и желания. </p>
                    <p className="advantages-paragraph last-paragpaph">Наша команда профессионалов обеспечивает не только высококлассное строительство, но и внимательное отношение к деталям и превосходный сервис на всех этапах проекта. Мы создаем не просто дома, мы создаем ваше будущее!</p>
                </div>
                <div className="advantages-container container2">
                </div>
            </div>
                <Modal active={ModalActive} setActive={setModalActive}/>    
        </div>
    )
};

export default AboutProject;