import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

import Last from "./Last";

const Page2 = () => {
  const bubble1 = useRef(null);
  const bubble2 = useRef(null);

  // RANDOM FLOATING FUNCTION
  const floatRandom = (element, range = 80, duration = 5) => {
    const float = () => {
      gsap.to(element.current, {
        x: Math.random() * range - range / 2,
        y: Math.random() * range - range / 2,
        duration: duration,
        ease: "power2.inOut",
        onComplete: float,
      });
    };
    float();
  };

  useEffect(() => {
    floatRandom(bubble1, 100, 6);
    floatRandom(bubble2, 120, 7);
  }, []);

  return (
    <>
    <div className="page2 relative min-h-screen w-screen overflow-hidden flex items-center justify-center px-8 py-20">

      {/* 🫧 Bubble 1 */}
      <img
        ref={bubble1}
        src="/bubble.png"
        className="w-[200px] absolute right-20 top-32  pointer-events-none"
      />

      {/* 🫧 Bubble 2 */}
      <img
        ref={bubble2}
        src="/bubble.png"
        className="w-[150px] absolute left-16 bottom-24 opacity-80 pointer-events-none"
      />

      {/* 🌈 Overlay for better contrast */}
      

      {/* ⭐ Star Decoration */}
      <img
        src="/star.png"
        className="w-14 absolute left-12 top-32 opacity-90"
        alt=""
      />

      {/* CONTENT */}
      <div className="relative max-w-3xl text-center text-white leading-relaxed space-y-6 drop-shadow-[0_0_10px_rgba(0,0,0,0.6)]">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-7xl font-extrabold"
        >
          Let's Talk About{" "}
          <span className="text-purple-300 drop-shadow-[0_0_10px_rgba(150,50,255,0.6)]">
            You.
          </span>
        </motion.h1>

        <p className="text-[1.35rem] text-white !mt-10">
          You normalized living with your head about to explode.
          And you don't even notice anymore.
        </p>

        <p className="text-[1.35rem] text-white">
          There's always something pending. Something you forget.
          Something you should be doing right now…
          but you don't know what.
        </p>

        <p className="text-white text-[1.35rem]">
        You jot📝 downimgthings so you won't forget them.
But you end up forgetting why you wrote img
them. And you start again. Over and over. As if
organization were the goal, not thesolution.
        </p>

        <p className="italic font-bold text-[1.35rem] text-white">
          As if organization were the goal, not the solution.
        </p>
        <br />

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-3xl text-purple-200 drop-shadow-[0_0_12px_rgba(180,60,255,0.8)] font-extrabold"
        >
          Until you decide to let go.
        </motion.h2>
        <br />

        <p className="text-white text-[1.35rem] ">
          And someone appears. Someone who doesn't complicate things.
          They just stay. And they give you back something
          you lost a long time ago:
        </p>
        <br /><br />

        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-6xl font-extrabold text-green-300 drop-shadow-[0_0_15px_rgba(80,255,150,0.8)]"
        >
          Peace of mind.
        </motion.h2>
      </div>
     
    </div>
     <Last></Last>
     </>
  );
};

export default Page2;
