import React, { useEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import { gsap } from "gsap";
import {motion} from "framer-motion"
import Page2 from './Page2';

const Page1 = () => {

  const bubble1 = useRef(null);

  useEffect(() => {
    gsap.to(bubbleRef.current, {
      y: -40,         // move upward
      duration: 3,    // seconds
      ease: "ease.inOut",
      repeat: -1,     // infinite loop
      yoyo: true      // go up & down smoothly
    });
  }, []);

  return (<>
    <div className="page1 relative overflow-none">

      {/* Navbar */}
      <div className="h-20 p-5">
        <Navbar />
      </div>

      {/* Bubble Image with GSAP ref */}
        {/* 🫧 Bubble 1 */}
      <img
        ref={bubble1}
        src="/bubble.png"
        className="w-[200px] absolute right-20 top-32  pointer-events-none"
      />
        <div
        
        className="absolute top-60 left-1/2 -translate-x-1/2 flex gap-2 items-center text-white text-lg font-medium "
      >
        <span className="flex gap-1 text-yellow-400 text-2xl">
          ⭐ ⭐ ⭐ ⭐ ⭐
        </span>
        <span>4.8 | 60k+ users worldwide</span>
        
      </div>

      {/* Hero Text */}
      <br /><br />
      <div className="flex justify-center items-center mt-72 px-5">
        <h1  className="
      text-[4rem]
      font-extrabold
      text-center
      text-white
      leading-[1.15]
      tracking-tight
      drop-shadow-[0_0_25px_rgba(255,255,255,0.25)]
      !pt-40
    " 
        
        >
        <motion.span
        initial={{ y:100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1.2, ease: "linear" }}
        viewport={{ once: false, amount: 0 }}
        >You are not designed 
        </motion.span><br />
          <motion.div
          initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.4, ease: "linear" }}
        viewport={{ once: false, amount: 0 }}
          >to remember everything.</motion.div>
          <motion.div
           initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 1, ease: "linear" }}
        viewport={{ once: false, amount: 0 }}
          >Memorae is.</motion.div>
        </h1>
      </div>
<div className="flex justify-center items-center !mt-10">
  <button
    className="
      !px-8 !py-3 
      rounded-full 
      text-white 
      text-lg 
      font-semibold 
      bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500
      shadow-lg shadow-purple-500/30
      hover:scale-105 hover:shadow-xl hover:shadow-pink-500/40
      transition-all duration-300
    "
  >
    Try for this
  </button>
</div>

<a 
  href="https://wa.me/xxxxxxxxxx"
  target="_blank"
  className="
    fixed left-6 bottom-6 
    w-14 h-14 
    bg-white 
    rounded-full 
    flex items-center justify-center 
    shadow-lg shadow-green-600/40 
    hover:scale-110 transition duration-300
  "
>
  <img src="/whatsapp.gif" alt="whatsapp" className="w-10 h-10" />
</a>


<a 
  href="https://t.me/xxxxxxxx"
  target="_blank"
  className="
    fixed left-6 bottom-24 
    w-14 h-14 
    bg-white
    rounded-full 
    flex items-center justify-center 
    shadow-lg shadow-blue-600/40 
    hover:scale-110 transition duration-300
  "
>
  <img src="/telegram.gif" alt="telegram" className="w-10 h-10" />
</a>


  <a 
  href="mailto:nandinichandel107@gmail.com"
  className="
    fixed right-6 bottom-6 
    w-14 h-14 
    bg-white
    rounded-full 
    flex items-center justify-center 
    shadow-lg shadow-red-600/40 
    hover:scale-110 transition duration-300
  "
>
  <img src="/gmail.png" alt="gmail" className="w-8 h-8" />
</a>
</div>
<Page2></Page2>

</>
  )
}

export default Page1
