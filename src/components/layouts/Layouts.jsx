import React, { useEffect, useState } from "react";
// import { useInView } from 'react-intersection-observer';
import "../layouts/Layouts.css";
import Aparts from "./About-apart.json";

function Layouts() {
    const [View, SetView] = useState(true);
    // const { ref, inView } = useInView({
    //     threshold: 0.2,
    //   });
    //   useEffect(()=>{SetView(true)},[inView]);

    const [VisibleElement, setVisibleElement] = useState(
        Aparts.filter((el) => el.active == true)
    );

    function ChangeVisible(OldId) {
        if (OldId == 0){
            OldId = 12
        }
        else if (OldId == 13){
            OldId = 1
        }
        const newVisibleElements = Aparts.map((el) =>
        el.id === OldId ? { ...el, active: true } : { ...el, active: false }
        );
        setVisibleElement(newVisibleElements.filter((el) => el.active));
    }

  return (
    <div id="layouts" className="layouts-container">
        <div className="layouts-card">
            <div className="button-conteyner">
                <button onClick={() => ChangeVisible(1)} className="button">
                    Подъезд 1
                </button>
                <button onClick={() => ChangeVisible(5)} className="button">
                    Подъезд 2
                </button>
                <button onClick={() => ChangeVisible(9)} className="button">
                    Подъезд 3
                </button>
            </div>
        { View ? 
        VisibleElement.map((element) => (
            <div key={element.id} className="card">
                <div className="card-img-container">
                    <img src={process.env.PUBLIC_URL + element.src} alt="apart" className="card-img" />
                </div>
                <div className="card-text">
                    <h3 className="card-text-header">УЗНАЙТЕ ЦЕНУ</h3>
                    <div className="card-text-paragraph">
                        <p>Подъезд : {element.Подъезд}</p>
                    </div>
                    <div className="card-text-paragraph">
                        <p>Вариант : {element.Вариант}</p>
                    </div>
                    <div className="card-text-paragraph">
                        <p>Этаж : {element.Этаж}</p>
                    </div>
                    <div className="card-text-paragraph">
                        <p>Потолки  : {element.Потолки}</p>
                    </div>
                    <div className="card-text-paragraph">
                        <p>Площадь : {element.Площадь}</p>
                    </div>
                </div>
                <div className="card-button-container">
                    <button onClick={() => ChangeVisible(element.id+1)} class="slick-arrow slick-next"> Next</button>
                    <button onClick={() => ChangeVisible(element.id-1)} class="slick-arrow slick-prev"> Previous</button>
                </div>
            </div>
        ))
        :
        <div></div>
        }
      </div>
    </div>
  );
}

export default Layouts;
