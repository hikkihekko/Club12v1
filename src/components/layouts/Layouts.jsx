import React, { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import "../layouts/Layouts.css";
import { IoLocationOutline } from "react-icons/io5";
import { BsHouseDoor } from "react-icons/bs";
import { CiViewTable } from "react-icons/ci";
import Aparts from "./About-apart.json";

function Layouts() {
    const [View, SetView] = useState(false);
    const { ref, inView } = useInView({
        threshold: 0.2,
      });
      useEffect(()=>{SetView(true)},[inView]);

    const [VisibleElement, setVisibleElement] = useState(
        Aparts.filter((el) => el.isActive)
    );

    function ChangeVisible(elementId) {
        const newVisibleElements = Aparts.map((el) =>
        el.id === elementId ? { ...el, isActive: true } : { ...el, isActive: false }
        );
        setVisibleElement(newVisibleElements.filter((el) => el.isActive));
    }

  return (
    <div id="layouts" className="layouts-container">
        <div className="layouts-card">
            <div ref={ref} className="bytton-conteyner">
                {Aparts.map((element) => (
                <button key={element.id} onClick={() => ChangeVisible(element.id)} className="button">
                Планировка {element.id}
                </button>
                ))}
            </div>
        { View ? 
        VisibleElement.map((element) => (
            <div key={element.id} className="card">
                <div className="card-img-container">
                    <img src={element.src} alt="apart" className="card-img" />
                </div>
            <div className="card-text">
                <h3 className="card-text-header">УЗНАЙТЕ ЦЕНУ</h3>
                <div className="card-text-paragraph">
                    <IoLocationOutline />
                    <p>Место : {element.location}</p>
                </div>
                <div className="card-text-paragraph">
                    <BsHouseDoor />
                    <p>Тип жилья : {element.type}</p>
                </div>
                <div className="card-text-paragraph">
                    <CiViewTable />
                    <p>Этаж : {element.floor}</p>
                </div>
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
