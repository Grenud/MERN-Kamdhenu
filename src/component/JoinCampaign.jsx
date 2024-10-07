import React from 'react';
import { FaHeart, FaDonate } from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { motion } from 'framer-motion';
import cowBackground from '../assets/Cow-outline.png';

function JoinCampaign() {
  return (
    <div className="relative min-h-screen py-16 px-4 md:px-8 overflow-hidden bg-gray-100">
      <div 
        className="absolute inset-0 bg-center bg-cover bg-no-repeat" 
        style={{ backgroundImage: `url(${cowBackground})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className='w-full h-full absolute top-0 left-0 bg-black/10'></div>
      </div>
      <div className="relative z-10 mt-0 md:mt-10 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-8">JOIN OUR CAMPAIGN</h1>
        <div className="max-w-6xl mx-auto p-0 md:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Adopt Card */}
          <motion.div 
            className="shadow-xl rounded-lg hover:scale-105 duration-500 flex flex-col items-center border-2 border-gray-600 hover:border-[#6d9051] p-4 bg-white/60 font-semibold tracking-wide" 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: 0.75, ease: "easeOut" }}
          >
            <FaHeart className="text-4xl md:text-6xl text-[#6d9051]" aria-label="Adopt icon" />
            <div className="text-center mt-4">
              <h2 className="text-xl md:text-2xl font-semibold">Adopt</h2>
              <p className="mt-2 text-sm md:text-base drop-shadow-2xl">We provide Calves, Cows and Bulls ready for Adoption</p>
            </div>
          </motion.div>

          {/* Volunteer Card */}
          <motion.div 
            className="shadow-xl rounded-lg hover:scale-105 duration-500 flex flex-col items-center border-2 border-gray-600 hover:border-[#6d9051] p-4 bg-white/60 text-primary font-semibold tracking-wide" 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
          >
            <IoPerson className="text-4xl md:text-6xl text-[#6d9051]" aria-label="Volunteer icon" />
            <div className="text-center mt-4 text-black">
              <h2 className="text-xl md:text-2xl font-semibold">VOLUNTEER</h2>
              <p className="mt-2 text-sm md:text-base">We welcome you, Become a Cow Volunteer- Kamdhenu Volunteer.</p>
            </div>
          </motion.div>

          {/* Donate Card */}
          <motion.div 
            className="shadow-xl rounded-lg hover:scale-105 duration-500 flex flex-col items-center border-2 border-gray-600 hover:border-[#6d9051] p-4 bg-white/60 text-primary font-semibold tracking-wide" 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: 1.2, ease: "easeOut" }}
          >
            <FaDonate className="text-4xl md:text-6xl text-[#6d9051]" aria-label="Donate icon" />
            <div className="text-center mt-4 text-black">
              <h2 className="text-xl md:text-2xl font-semibold">DONATE</h2>
              <p className="mt-2 text-sm md:text-base">Open your hearts to serve our Mission and Donate for this noble cause.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default JoinCampaign;
