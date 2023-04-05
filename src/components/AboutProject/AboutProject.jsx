import React from "react";
import "./AboutProject.css"

function AboutProject(){
    return(
        <div className="OurAdvantages">
            <h2 className="advanteges-header">Шагните в мир Club 12 и ощутите вершину роскоши,<br/> живя в самом сердце Депутатского городка Астаны</h2>
            <div className="advantages-container container1 advantages-text-container">
                <p className="advantages-paragraph">Каждый аспект проекта был тщательно продуман, чтобы предоставить жителям максимальную современную жизнь. От гладкой и стильной архитектуры до высококачественной отделки и первоклассных удобств. </p>
                <p className="advantages-paragraph">Elevate by Prescott включает в себя не только просторные <span>апартаменты</span></p>
            </div>
            <div className="advantages-container container2">
                <div className="advantages-text-container">
                    <h2 className="advanteges-header">Для тех, кто ищет удобство и легкий доступ к первоклассным удобствам </h2>
                    <p className="advantages-paragraph">Расположенный всего в нескольких шагах от реки Ишим, Президентского парка и школы <span> Haileybury Astana </span>, жители будут иметь лучшее, что есть в городе, прямо у их порога.</p>
                    <p className="advantages-paragraph">3-этажный комплекс <span>Club 12</span> с отдельной парковкой представляет собой идеальное сочетание роскоши и удобства.</p>
                    <p className="advantages-paragraph">Имея всего 2 квартиры на этаже, жители будут наслаждаться максимальной конфиденциальностью и эксклюзивностью, что делает Club идеальным выбором для тех, кто ищет максимальную роскошь.</p>
                </div>
            </div>
        </div>
    )
};

export default AboutProject;