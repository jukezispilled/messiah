import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Xlogo from './XLogo.jpg';
import TG from './TG.png';
import enterSound from './angel.mp3';

function App() {
  const videoRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(true);
  const audioRef = useRef(null);

  const handleEnter = () => {
    setModalVisible(false);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const floatingAnimation = {
    y: ['-10px', '10px'],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }
    }
  };

  return (
    <div className="h-screen w-screen bg-cover bg-center flex justify-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
      {modalVisible && (
        <div className="fixed inset-0 bg-sky-300 flex items-center justify-center z-50">
          <div className="p-8 bg-white rounded-lg text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black font-custom">are you ready to be saved?</h2>
            <button
              onClick={handleEnter}
              className="px-6 py-3 bg-sky-400 text-black text-xl font-semibold md:hover:bg-sky-500 transition duration-300 font-custom"
            >
              yes
            </button>
          </div>
        </div>
      )}
      <audio ref={audioRef} src={enterSound} />
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-45"
        style={{ pointerEvents: 'none' }}
      >
        <source src={`${process.env.PUBLIC_URL}/vid.mp4`} type="video/mp4" />
      </video>
      <div className='absolute top-0 w-screen bg-sky-400 text-center font-custom text-[10px] md:text-base text-white py-1'>
        CA: patience...
      </div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="savi.png"
          alt="Savi"
          className="w-[85%] md:w-[40%]"
          animate={floatingAnimation}
        />
      </motion.div>
    </div>
  );
}

export default App;