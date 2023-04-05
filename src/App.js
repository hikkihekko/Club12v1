import './App.css';
import Header from './components/header/Header';
import VideoLink from './components/video-link/Video-block';
import AboutProject from './components/AboutProject/AboutProject';
import OurProjects from './components/OurProjects/OurProjects';
import BuyInvest from './components/buy-invest/buy-invest';
import Layouts from './components/layouts/Layouts';
import Advantages from './components/advantages/Advantages';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/footer/footer';
import Modal from './components/modal/modal';

import React, { useState, useEffect } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 20000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Header/>
      <VideoLink/>
      <AboutProject/>
      <OurProjects/>
      <BuyInvest/>
      <Layouts/>
      <Advantages/>
      <ContactForm/>
      <Footer/>
      {showModal && <Modal active={showModal} setActive={setShowModal} />}
    </div>
  )
}

export default App;
