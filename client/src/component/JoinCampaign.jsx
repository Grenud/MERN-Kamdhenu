import React from 'react';
import { FaHeart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaDonate } from "react-icons/fa";
import {motion} from  "framer-motion";

function JoinCampaign() {
  return (
    <div className='py-[100px] px-3 bg-green-200'> 
      <h1 className='text-center font-bold text-4xl md:text-5xl'>JOIN OUR CAMPAIGN</h1>
      <div className='max-w-[1024px] mx-auto md:grid grid-cols-3 gap-5 mt-8'>
        <motion.div className='shadow-xl my-4 h-[300px] bg-transparent hover:scale-105 duration-500 flex flex-col items-center border-2 border-gray-400 hover:border-[#6d9051]' initial = {{opacity : 0}} whileInView={{opacity : 1}} transition={{duration : 0.5 , delay : 0.75 , ease : "easeOut"}}>
          <FaHeart className="mt-[50px] size-10 text-[#6d9051]" />
          <div className="text-center mt-[30px]">
            <h1 className='text-2xl font-semibold'>Adopt</h1>
            <p className='mt-3 text-gray-600'>We provide Calves, Cows and Bulls ready for Adoption</p>
          </div>  
        </motion.div>
        <motion.div className='shadow-xl my-4 h-[300px] bg-transparent hover:scale-105 duration-500 flex flex-col items-center border-2 border-gray-400  hover:border-[#6d9051]' initial = {{opacity : 0}} whileInView={{opacity : 1}} transition={{duration : 0.5 , delay : 1 , ease : "easeOut"}}>
          <IoPerson className="mt-[50px] size-10 text-[#6d9051]"/>
          <div className="text-center mt-[30px]">
            <h1 className='text-2xl font-semibold'>VOLUNTEER</h1>
            <p className='mt-3 text-gray-600'>We welcome you, Become a Cow Volunteer- Kamdhenu Volunteer.</p>
          </div>
        </motion.div>
        <motion.div className='shadow-xl my-4 h-[300px] bg-transparent hover:scale-105 duration-500 flex flex-col items-center border-2 border-gray-400 hover:border-[#6d9051]' initial = {{opacity : 0}} whileInView={{opacity : 1}} transition={{duration : 0.5 , delay : 1.2, ease : "easeOut"}}>
          <FaDonate className="mt-[50px] size-10 text-[#6d9051]"/>
          <div className="text-center mt-[30px]">
            <h1 className='text-2xl font-semibold'>DONATE</h1>
            <p className='mt-3 text-gray-600'>Open your hearts to serve our Mission and Donate for this noble cause.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default JoinCampaign;