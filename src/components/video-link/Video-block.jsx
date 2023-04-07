import React, { useState } from "react";
import { useRef } from 'react';
import '../video-link/Video-block.css';
import Modal from "../modal/modal";

function VideoLink() {
    const [ModalActive, setModalActive] = useState(false)

  const videoRef = useRef(null);

  function playVideo() {
    videoRef.current.play();
    videoRef.current.requestFullscreen();
  }

  return (
    <div>
        <div className="cutaway-text-container">
            <h2 className="cutaway-text-header">Club 12 </h2>
            <span className="cutaway-text-paragraph">идеально подходит для тех, кто ищет вершину современной жизни.</span>
            <div className="button-container">
              <button className="button-play" onClick={playVideo}>Play Video</button>
              <button onClick={()=> setModalActive(true)}>Связаться с нами</button>
            </div>
        </div>
      <div className="video-container">
        <video ref={videoRef} src="" className="video"></video>
      </div>
      <Modal active={ModalActive} setActive={setModalActive}/>
    </div>
  );
}

export default VideoLink;