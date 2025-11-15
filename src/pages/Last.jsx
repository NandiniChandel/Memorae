import React, { useState } from 'react';
import {motion} from 'framer-motion'


// --- Placeholder Imports (Replace with your actual paths) ---
const DEMO_VIDEO_THUMBNAIL_PRO = '/pro-thumbnail.jpg';     
const DEMO_VIDEO_THUMBNAIL_SUPERNOVA = '/supernova-thumbnail.jpg'; 
const DEMO_VIDEO_THUMBNAIL_LIFETIME = '/lifetime-thumbnail.jpg'; 

// --- Framer Motion Variants ---
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { 
    opacity: 1, y: 0, scale: 1, 
    transition: { type: "spring", stiffness: 90, damping: 15, duration: 0.6 } 
  },
  // Superb Hover Effect
  hover: { 
    y: -15, // Lift significantly
    scale: 1.05, // Grow more
    boxShadow: "0 40px 80px rgba(147, 51, 234, 0.4)", // Strong, themed shadow
    transition: { type: "spring", stiffness: 150, damping: 10 }
  },
};

const toggleVariants = {
  monthly: { x: 0 },
  annual: { x: "100%" }, 
};

const Last = () => {
  const [isAnnual, setIsAnnual] = useState(true); // Set Annual as default based on screenshot

  // Data for pricing cards
  const pricingPlans = [
    {
      name: "Pro",
      currentPrice: isAnnual ? "2.99 $" : "4.99 $",
      oldPrice: "4.99 $",
      annualDescription: "12 months for $35.88 ($59.92)",
      discountTag: "3 MONTHS FREE",
      isMostPopular: false,
      thumbnail: DEMO_VIDEO_THUMBNAIL_PRO,
      buttonText: "Try for Free",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      isLifetime: false,
    },
    {
      name: "Supernova",
      currentPrice: isAnnual ? "8.99 $" : "14.99 $",
      oldPrice: "14.99 $",
      annualDescription: "12 months for $107.88 ($180.16)",
      discountTag: "3 MONTHS FREE",
      isMostPopular: true,
      thumbnail: DEMO_VIDEO_THUMBNAIL_SUPERNOVA,
      buttonText: "Try for Free",
      buttonColor: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
      isLifetime: false,
    },
    {
      name: "Lifetime",
      currentPrice: "199.00 $",
      oldPrice: null,
      annualDescription: "Save over $900 in 5 years",
      discountTag: "ONE-TIME PAYMENT",
      isMostPopular: false,
      thumbnail: DEMO_VIDEO_THUMBNAIL_LIFETIME,
      buttonText: "Activate Now",
      buttonColor: "bg-yellow-500 hover:bg-yellow-600",
      isLifetime: true,
    },
  ];

  return (
    <div 
      className="min-h-screen bg-gray-900 text-white relative !py-20 !px-4 overflow-hidden"
      // Apply subtle celestial gradient and star effect for super attraction
      style={{ backgroundImage: `radial-gradient(ellipse at center, rgba(30, 0, 70, 0.8) 0%, rgba(0,0,0,1) 100%)` }}


    >

      <img
        
        src="../public/bubble.png"
        alt="bubble"
        className="w-[350px] h-[350px] object-contain absolute top-10 right-10 pointer-events-none"
      />
      {/* Abstract Starfield Effect (Optional: requires CSS for actual stars) */}
      <div className="absolute inset-0 z-0 opacity-50">
         {/* Placeholder for star particles */}
      </div>
      
      <div className="relative !z-10 !max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16 pt-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl !md:text-6xl font-extrabold !mb-4 leading-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-400">
            Your chaos, your plan
          </h1>
          <p className="text-xl text-gray-400 !max-w-2xl !mx-auto">
            Choose how you want Memorae to help you don't lose your head.
          </p>
        </motion.div>

        {/* Monthly/Annual Toggle */}
        <div className="flex justify-center !mb-16">
          <div className="relative !w-72 p-1 bg-gray-700 rounded-full flex items-center justify-between shadow-xl">
            <motion.div
              className="absolute !w-1/2 h-full rounded-full bg-purple-600 shadow-2xl shadow-purple-900"
              variants={toggleVariants}
              animate={isAnnual ? "annual" : "monthly"}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
            <button
              className={`relative z-10 w-1/2 !py-2 rounded-full font-semibold transition-colors duration-300 text-base ${!isAnnual ? 'text-white' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`relative z-10 w-1/2 !py-2 rounded-full font-semibold transition-colors duration-300 text-base ${isAnnual ? 'text-white' : 'text-gray-300 hover:text-white'}`}
              onClick={() => setIsAnnual(true)}
            >
              Annual <span className="text-green-300 !ml-1 text-sm">(40% Off)</span>
            </button>
          </div>
        </div>
        

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`relative !p-8 rounded-[2rem] shadow-2xl flex flex-col items-center text-center backdrop-blur-sm transition-all duration-300 ease-in-out
                          ${plan.isMostPopular 
                            ? 'bg-gray-800/80 border-4 border-purple-500/80 ring-4 ring-purple-900/50' // Highlighted
                            : 'bg-gray-800/60 border border-gray-700/50'}
              `}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover" // Superb Hover Effect
              transition={{ delay: index * 0.15 }}
            >
              {/* Most Popular/Lifetime Tag */}
              {plan.isMostPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-sm font-bold !px-5 !py-1 rounded-full uppercase shadow-lg animate-pulse-slow">
                  MOST POPULAR
                </div>
              )}
              {plan.isLifetime && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-gray-900 text-sm font-bold !px-5 !py-1 rounded-full uppercase shadow-lg animate-pulse-slow">
                  ONE-TIME PAYMENT
                </div>
              )}

              <h2 className="text-3xl font-bold !mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-300">{plan.name}</h2>
              
              {/* Price Display */}
              <div className="!mb-4">
                <p className="text-6xl font-extrabold">
                  {plan.currentPrice}
                </p>
                {!plan.isLifetime && (
                  <div className="flex items-center justify-center !mt-1 !space-x-2">
                    <p className="text-xl text-gray-400 line-through">
                      {plan.oldPrice}
                    </p>
                    <span className="text-sm text-gray-400">/ {isAnnual ? 'per month' : 'month'}</span>
                  </div>
                )}
              </div>

              {/* Annual Description */}
              <p className="text-base text-gray-400 !mb-6">{plan.annualDescription}</p>

              {/* Video Thumbnail/Button Link */}
              <div className="flex items-center justify-center !mb-8">
                <a href="#" className="flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-300 font-semibold text-sm">
                  <svg className="!w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M10 16.5l6-4.5-6-4.5v9z"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                  </svg>
                  <span>View demo of {plan.name} Plan</span>
                </a>
              </div>

              <button
                className={`w-full py-4 rounded-xl font-bold text-lg shadow-xl transition-all duration-300 ease-in-out transform hover:shadow-2xl hover:scale-[1.02]
                            ${plan.buttonColor}`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
        
      </div>

    </div>

  );
};

export default Last;