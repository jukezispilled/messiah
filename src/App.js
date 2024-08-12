import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Xlogo from './XLogo.jpg';
import TG from './TG.png';
import enterSound from './angel.mp3'; // Import your MP3 file

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

  return (
    <div className="h-screen w-screen bg-cover bg-center flex justify-center" style={{ backgroundImage: "url('/bg.jpg')" }}>
      {modalVisible && (
        <div className="fixed inset-0 bg-[#FFDC22] flex items-center justify-center z-50">
          <div
            className="p-8 bg-white rounded-lg text-center text-white"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black font-custom">are you ready to be saved?</h2>
            <button
              onClick={handleEnter}
              className="px-6 py-3 bg-yellow-400 text-black text-xl font-semibold md:hover:bg-yellow-500 transition duration-300 font-custom"
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
        className="absolute inset-0 w-full h-full object-cover opacity-35"
        style={{ pointerEvents: 'none' }}
      >
        <source src={`${process.env.PUBLIC_URL}/vid.mp4`} type="video/mp4" />
      </video>
      <div className='absolute top-0 w-screen bg-yellow-400 text-center font-custom text-[10px] md:text-base text-white py-1'>
        CA: patience...
      </div>
      <motion.img
        src="savior.png"
        className='z-10 w-[85%] md:w-[40%] absolute bottom-0'
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        transition={{
          type: 'easeOut',
          duration: 5,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
      />
      <div className='z-10 mt-[25%] md:mt-[15%]'>
        <div className='text-9xl md:text-[190px] font-custom text-center leading-none text-white stroke'>
          savior
        </div>
        <div className='font-custom text-4xl text-white text-center stroke -mt-7 md:-mt-10'>everyone needs a savior</div>
      </div>
      <div className="absolute bottom-5 left-5 flex flex-row z-30">
        <a
          href="https://x.com/savioronsol"
          className="p-1 hover:scale-110 transition ease-in-out duration-200"
        >
          <img src={Xlogo} alt="Xlogo" className="size-10 md:size-12 rounded-md" />
        </a>
        <a
          href="https://t.me/savioronsol"
          className="p-1 hover:scale-110 transition ease-in-out duration-200"
        >
          <img src={TG} alt="Tg logo" className="size-10 md:size-12" />
        </a>
      </div>
    </div>
  );
}

export default App;