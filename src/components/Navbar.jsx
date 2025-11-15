import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="backdrop-blur-xl bg-white/10 border-b border-white/20 flex items-center justify-center shadow-lg text-[1.2rem] rounded-full h-full">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="logo"
          className="object-cover object-top"
          height="400px"
          width="400px"
        />
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-10 text-white font-medium">
        <motion.a
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, ease: "linear" }}
          href="#"
          className="px-4 py-2 rounded-full transition-all duration-300 
              hover:text-green-200"
        >
          Superpowers
        </motion.a>

        <motion.a
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2, ease: "linear", delay: 0.2 }}
          href="#"
          className="px-4 py-2 rounded-full transition-all duration-300 
              hover:text-green-200"
        >
          Dashboard
        </motion.a>
        <motion.a
        initial={{y:-100, opacity:0}}
       animate={{y:0, opacity:1}}
       transition={{duration:0.2, ease:'linear', delay:0.4}}
          href="#"
          className="px-4 py-2 rounded-full transition-all duration-300 
              hover:text-green-200"
        >
          Pricing
        </motion.a>

        <motion.div
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{delay:0.6}}
         className="px-6 py-2 !px-6 !py-2 rounded-full bg-blue-500/80 hover:bg-blue-600 transition shadow-md">
          Try for Free
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
