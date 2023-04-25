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

    const [ViewAdv2, SetViewAdv2] = useState(false);
    const { ref:Adv2, inViewMap:InViewAdv2} = useInView({
        threshold: 0.1,
      });
    useEffect(()=>{SetViewAdv2(true)},[InViewAdv2]);

    const [ViewAdv3, SetViewAdv3] = useState(false);
    const { ref:Adv3, inViewMap:InViewAdv3} = useInView({
        threshold: 0.1,
      });
    useEffect(()=>{SetViewAdv3(true)},[InViewAdv3]);



    return(
        <>
        <div ref={Adv} id="services" className="services">
            <div className={`advantages-card ${ViewAdv ? 'visible':''}`}>
                    <RiBuilding2Line className="advantages-icon" />
                <h3>Инновации в каждой детали </h3>
                <div className="advantages-card-content">
                    <p>мы создаем уникальные дизайны и инновационные конструкции, которые не только обеспечивают красоту дома, но и экономят ресурсы и снижают нагрузку на окружающую среду.</p>
                </div>	
            </div>
            <div ref={Adv2} className={`advantages-card ${ViewAdv2 ? 'visible':''}`}>
                    <AiOutlineSafety className="advantages-icon" />
                <h3>Защита вашего комфорта и безопасности </h3>
                <div className="advantages-card-content">
                    <p>мы используем передовые технологии и инновации при строительстве каждого дома, чтобы гарантировать максимальную защиту и комфорт для наших клиентов.</p>
                </div>
            </div>
            <div ref={Adv3} className={`advantages-card ${ViewAdv3 ? 'visible':''}`}>	
                    <TbBuildingBridge className="advantages-icon" />
                <h3>Красота, которая вызывает восхищение </h3>
                <div className="advantages-card-content">
                    <p>наши дома не только функциональны и удобны, но и впечатляют своей эстетикой и гармоничным сочетанием материалов и цветов. Они не только защищают вас, но и приносят красоту и уют в вашу жизнь.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Advantages;