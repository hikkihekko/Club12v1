import React,{useState,useEffect} from "react";
import { useInView } from 'react-intersection-observer';
import "./Advantages.css";
import {RiBuilding2Line} from "react-icons/ri";
import {AiOutlineSafety} from "react-icons/ai";
import {TbBuildingBridge} from "react-icons/tb";

function Advantages(){
    
    const [ViewAdv, SetViewAdv] = useState(false);
    const { ref:Adv, inViewMap:InViewAdv} = useInView({
        threshold: 0.1,
      });
    useEffect(()=>{SetViewAdv(true)},[InViewAdv]);


    const [ViewMap, SetViewMap] = useState(false);
    const { ref:Map, inViewMap:ViewMapMap} = useInView({
        threshold: 0.1,
      });
    useEffect(()=>{SetViewMap(true)},[ViewMapMap]);


    return(
        <>
        <div ref={Adv} id="services" className="services">
            <div className={`advantages-card ${ViewAdv ? 'visible':''}`}>
                    <RiBuilding2Line className="advantages-icon" />
                <h3>Прекрасная инфраструктура</h3>
                <div className="advantages-card-content">
                    <p>Депутатский город - это один из самых современных и комфортных районов Астаны.</p>
                </div>	
            </div>
            <div className="advantages-card">
                    <AiOutlineSafety className="advantages-icon" />
                <h3>Высокий уровень безопасности</h3>
                <div className="advantages-card-content">
                    <p>Депутатский город - это закрытый район, находящийся под постоянной охраной, что гарантирует безопасность жителей.</p>
                </div>
            </div>
            <div className="advantages-card">	
                    <TbBuildingBridge className="advantages-icon" />
                <h3>Расположение</h3>
                <div className="advantages-card-content">
                    <p ref={Map}>По миму высокого уровня инфраструктуры у нас находятся туристические центры, такие как Синий купол и Пирамида</p>
                </div>
            </div>
        </div>
        {ViewMap ?
        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40085.25776959043!2d71.47240646467843!3d51.102396957879904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424583a1cfd078bd%3A0x85d46986fbe70106!2z0JTQtdC_0YPRgtCw0YLRgdC60LjQuSDQs9C-0YDQvtC00L7Qug!5e0!3m2!1sru!2skz!4v1680687388716!5m2!1sru!2skz" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        :
        <div></div>}
        </>
    )
}

export default Advantages;