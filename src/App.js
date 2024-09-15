import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
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

  const angelAnimation = {
    y: ['-7px', '7px'],
    opacity: 1,
    transition: {
      x: {
        duration: 3,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      },
      y: {
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      },
      opacity: { duration: 1 }
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
      <div className="flex absolute bottom-4 right-4">
        <a href="https://x.com/savioronsolana" className='transition ease-in-out duration-150'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-8 md:size-10 md:hover:scale-105 transition ease-in-out duration-150 cursor-pointer' fill="#000000" viewBox="0 0 50 50">
            <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
          </svg>
        </a>
        <a href="https://t.me/savioronsol" className='transition ease-in-out duration-150'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className='size-8 md:size-10 md:hover:scale-105 transition ease-in-out duration-150 cursor-pointer' fill="#33aaff" viewBox="0 0 50 50">
            <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
          </svg>
        </a>
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
        <motion.img
          src="al.png"
          alt="Left Angel"
          className="hidden md:block absolute left-[15%] w-[20%]"
          initial={{ opacity: 0, x: -50 }}
          animate={angelAnimation}
          transition={{ delay: 2 }}
        />
        <motion.img
          src="ar.png"
          alt="Right Angel"
          className="hidden md:block absolute right-[15%] w-[20%]"
          initial={{ opacity: 0, x: 50 }}
          animate={angelAnimation}
          transition={{ delay: 2 }}
        />
      </motion.div>
    </div>
  );
}

export default App;