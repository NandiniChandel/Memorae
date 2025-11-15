import React from 'react';
import { motion } from 'framer-motion';

// --- Placeholder Imports (Replace with your actual paths) ---
// Remember to place your images in the 'public' folder
const MASCOT_SRC = '/bubble.png'; 
const PHONE_MOCKUP_SRC = '/mobile.png'; 

// --- Animation configurations ---

// Staggered Fade-in for the main elements
const mainContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const popIn = {
  initial: { opacity: 0, scale: 0.8, rotate: -5 },
  animate: { opacity: 1, scale: 1, rotate: 0, transition: { type: 'spring', stiffness: 120, damping: 10, duration: 0.8 } },
};

const Page3 = () => {
  // Benefit data for cleaner mapping
  const benefits = [
    { text: "No more mental lists", className: "top-10 left-[-80px] md:top-20 md:left-[-120px] lg:left-[-180px]" },
    { text: "No more missed appointments", className: "top-10 right-[-80px] md:top-20 md:right-[-120px] lg:right-[-180px]" },
    { text: "No more post-its on the mirror", className: "top-[40%] left-[-120px] md:left-[-180px] lg:left-[-240px]" },
    { text: "No more dead plants", className: "top-[40%] right-[-120px] md:right-[-180px] lg:right-[-240px]" },
    { text: "No more missed deadlines", className: "bottom-10 left-[-90px] md:bottom-20 md:left-[-140px] lg:left-[-200px]" },
    { text: "No more reminders on napkins", className: "bottom-10 right-[-90px] md:bottom-20 md:right-[-140px] lg:right-[-200px]" },
  ];

  return (
    <section 

      // IMPROVEMENT: Applied aggressive padding/margin as requested (!p, !m) and generous vertical padding
      className="page3 relative min-h-screen !p-4 !m-0 !py-48 overflow-hidden flex items-center justify-center bg-gray-50/20"
    >
      
      <img src="/bubble.png" alt="" className="w-[350px] absolute h-[350px] object-contain top-10 right-10 pointer-events-none "/>

      {/* Container for the central design element */}
      <motion.div 
        className="relative w-full max-w-5xl h-full flex justify-center items-center"
        variants={mainContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        {/* Animated Central Glow */}
        <motion.div
          className="absolute inset-0 bg-white/10 rounded-[50%] blur-3xl opacity-50 z-0"
          animate={{ scale: [0.9, 1.1, 0.9], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
        />

        {/* Floating Benefit Text */}
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className={`absolute p-3 bg-white/90 backdrop-blur-xl rounded-xl shadow-2xl text-sm md:text-base text-gray-800 font-medium whitespace-nowrap transition-all duration-300 border border-white/80 ${benefit.className}`}
            variants={popIn}
            // SUPER INTERACTIVE: Hover for a pronounced pop and shadow lift
            whileHover={{ scale: 1.15, rotate: index % 2 === 0 ? 2 : -2, zIndex: 50, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.2)" }} 
          >
            {benefit.text}
          </motion.div>
        ))}

        {/* Central Phone Mockup and Mascot */}
        <motion.div 
          className="relative w-72 h-[450px] md:w-80 md:h-[550px] z-10" // Adjusted size
          variants={popIn}
          // SUPER INTERACTIVE: Add a 3D perspective tilt on hover
          whileHover={{ 
            scale: 1.05, 
            rotateX: 5, 
            rotateY: -5,
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)" 
          }}
          transition={{ duration: 0.5 }}
          style={{ perspective: 1000 }} // Enable 3D perspective
        >
            
          {/* Phone Frame Mockup */}
          <img
            src={PHONE_MOCKUP_SRC}
            height='100%'
            width='100%'
            alt="Phone Mockup"
            className="absolute inset-0 w-full h-full object-contain drop-shadow-2xl z-20"
          />

          {/* Cute Bubble Mascot floating in front of the screen */}
          <motion.img
            src={MASCOT_SRC}
            alt="Memorae Mascot"
            className="absolute w-60 h-auto z-30" 
            style={{ 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)', 
              filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.4))' 
            }}
            // Animation: Gentle vertical float
            animate={{ y: [0, 20, 0], scale: [1, 1.03, 1] }}
            transition={{ 
              duration: 8, 
              ease: "easeInOut", 
              repeat: Infinity 
            }}
          />

          {/* Content inside the phone screen */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-8 z-10">
            <h3 className="mt-16 text-xl md:text-2xl font-semibold text-gray-800 leading-snug">
              You’re not making a mess of yourself; you’re trying to do it all yourself.
            </h3>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Page3;