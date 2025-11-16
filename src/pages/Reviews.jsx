// App.jsx
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const reviews = [
  {
    name: "Priya S.",
    text: "Memorae has completely changed the way I organize my life. The 24/7 assistance is a game-changer!",
  },
  {
    name: "Rahul K.",
    text: "Other apps like Second Brain can't compare. Memorae always responds when I need help, anytime of the day.",
  },
  {
    name: "Ananya P.",
    text: "Finally, an app that actually understands my workflow. The 24/7 support makes Memorae unique.",
  },
];

const Reviews = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.from(heroRef.current, {
        y: -40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }
  }, []);

  const bubble1 = useRef(null);
  const bubble2 = useRef(null);
   const bubble3 = useRef(null);
  
    useEffect(() => {
      gsap.to(bubble1.current, {
        y: -40,         // move upward
        duration: 3,    // seconds
        ease: "ease.inOut",
        repeat: -1,     // infinite loop
        yoyo: true      // go up & down smoothly
      });
    }, []);
        useEffect(() => {
      gsap.to(bubble2.current, {
        y: -40,         // move upward
        duration: 3,    // seconds
        ease: "ease.inOut",
        repeat: -1,     // infinite loop
        yoyo: true      // go up & down smoothly
      });
    }, []);
        useEffect(() => {
      gsap.to(bubble3.current, {
        y: -40,         // move upward
        duration: 3,    // seconds
        ease: "ease.inOut",
        repeat: -1,     // infinite loop
        yoyo: true      // go up & down smoothly
      });
    }, []);

  return (
    <div className="reviews bg-gray-50 font-sans min-h-screen !w-[100%] !pt-5">
      {/* Header */}
              <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center rounded-xl shadow-lg !p-8 !mx-90 w-[100%] bg-[linear-gradient(135deg,#EEAECA_0%,#94BBE9_100%)]"
        >
          <h2 className="text-2xl md:text-5xl font-semibold !mb-2 text-gray-800 w-[] font-extrabold text-white">
            Memorae Reviews
          </h2>
          <p className="text-white text-lg leading-relaxed">
            Provides 24/7 assistance
          </p>
        </motion.div>



      {/* Hero Section */}
      <section className="text-center !py-16 !px-4 md:px-0">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg !p-8 !mx-90"
        >
          <h2 className="text-2xl md:text-3xl font-semibold !mb-2 text-gray-800">
            Why Memorae Stands Out
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Unlike other apps, Memorae provides round-the-clock support to help
            you manage your tasks, memories, and productivity seamlessly. No
            other app is as responsive, personal, and reliable as Memorae.
          </p>
        </motion.div>
      </section>
      
    

      {/* Reviews Section */}
      <section className="container !mx-auto !py-16 !px-4 md:px-0">
        <h2 className="text-2xl md:text-4xl font-bold text-center !mb-12 text-gray-800">
          What Our Users Say!!
        </h2>
            {/* 🫧 Bubble 1 */}
    

    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{reviews.map((review, index) => (
  <motion.div
    key={index}
    whileHover={{ scale: 1.05, y: -5 }}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white !p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-2xl  transition-all duration-300"
  >
    <p className="text-gray-700 text-lg !mb-6 italic">"{review.text}"</p>
    <div className="text-gray-500 font-semibold text-right">
      — {review.name}
    </div>
  </motion.div>
))}

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[linear-gradient(135deg,#EEAECA_0%,#94BBE9_100%)] text-white !py-16 text-center !px-4 md:px-0">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold !mb-4 drop-shadow-lg">
            Ready to Experience Memorae?
          </h2>
          <p className="!mb-8 text-lg md:text-xl text-white max-w-xl mx-auto leading-relaxed !ml-110">
            Join thousands of users who enjoy 24/7 assistance and unmatched
            productivity support.
          </p>
          <a
            href="#download"
            className="inline-block bg-white text-indigo-700 font-semibold !px-8 !py-4 rounded-xl hover:bg-gray-100 hover:text-indigo-800 transition-all shadow-lg"
          >
            Get Started Now
          </a>
        </motion.div>
      </section>
    </div>
  );
};

export default Reviews;
