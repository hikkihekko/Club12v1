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
            <h2 className="advanteges-header">Шагните в мир Club 12 и ощутите вершину роскоши,<br/> живя в самом сердце Депутатского городка Астаны</h2>
            <div ref={Card1} className={`about-project-card ${ViewCard1 ? 'visible' : ''}`}>
                <div className="advantages-container container1">
            </div>
            <div className="about-project-text-container">
                <p className="advantages-paragraph">Каждый аспект проекта был тщательно продуман, чтобы предоставить жителям максимальную современную жизнь. От гладкой и стильной архитектуры до высококачественной отделки и первоклассных удобств. </p>
                <p className="advantages-paragraph">Elevate by Prescott включает в себя не только просторные апартаменты</p>
                <button onClick={()=> setModalActive(true)}>Связаться с нами</button>
                <span className="about-project-connect-text">Чтобы получить детальную информацию <br/> по проекту нажмите на эту кнопку</span>
            </div>
            </div>
            <div ref={Card2} className={`about-project-card ${ViewCard2? 'visible' : ''}`}>
                <div className="about-project-text-container">
                    <h2 className="advanteges-header">Для тех, кто ищет удобство и легкий доступ к первоклассным удобствам </h2>
                    <p className="advantages-paragraph">Расположенный всего в нескольких шагах от реки Ишим, Президентского парка и школы  Haileybury Astana , жители будут иметь лучшее, что есть в городе, прямо у их порога.</p>
                    <p className="advantages-paragraph">3-этажный комплекс Club 12 с отдельной парковкой представляет собой идеальное сочетание роскоши и удобства.</p>
                    <p className="advantages-paragraph last-paragpaph">Имея всего 2 квартиры на этаже, жители будут наслаждаться максимальной конфиденциальностью и эксклюзивностью, что делает Club идеальным выбором для тех, кто ищет максимальную роскошь.</p>
                </div>
                <div className="advantages-container container2">
                </div>
            </div>
                <Modal active={ModalActive} setActive={setModalActive}/>    
        </div>
    )
};

export default AboutProject;