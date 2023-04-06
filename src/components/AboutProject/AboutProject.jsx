import React, {useState} from "react";
import "./AboutProject.css"
import Modal from "../modal/modal";

function AboutProject(){
    const [ModalActive, setModalActive] = useState(false)

    return(
        <div id="advanteges" className="OurAdvantages">
            <h2 className="advanteges-header">Шагните в мир Club 12 и ощутите вершину роскоши,<br/> живя в самом сердце Депутатского городка Астаны</h2>
            <div className="about-project-card">
                <div className="advantages-container container1 ">
            </div>
            <div className="about-project-text-container">
                <p className="advantages-paragraph">Каждый аспект проекта был тщательно продуман, чтобы предоставить жителям максимальную современную жизнь. От гладкой и стильной архитектуры до высококачественной отделки и первоклассных удобств. </p>
                <p className="advantages-paragraph">Elevate by Prescott включает в себя не только просторные апартаменты</p>
                <button onClick={()=> setModalActive(true)}>Связаться с нами</button>
                <span className="about-project-connect-text">Чтобы получить детальную информацию <br/> по проекту нажмите на эту кнопку</span>
            </div>
            </div>
            <div className="about-project-card">
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