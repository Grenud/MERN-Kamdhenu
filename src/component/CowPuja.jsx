import React from 'react';
import { FaRegStar } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

function CowPuja() {
  return (
    <div className='max-w-[1240px] p-6 mx-auto my-10 mt-12'>
      <div className='p-4 md:grid grid-cols-3 mx-auto shadow-2xl'>
        <div className='col-span-1 md:w-[80%] text-center object-cover shadow-md p-5 leading-8 '>
          <img className='justify-center' src='https://kamdhenuseva.com/wp-content/uploads/2023/01/gai-tihar-300x197-1.jpg' alt='Cow Puja' />
          <h4>Cow Puja</h4>
          <div className='flex justify-center text-[#f3b732]'>
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
            <FaRegStar />
          </div>
          <div className='flex justify-center'>
            <p className='line-through'>₹2,000.00</p><span className='ml-2'>₹1,500.00</span>
          </div>
          <div className='flex justify-center mt-2'>
            <button className='flex items-center bg-[#6d9051] text-white px-3  py-1 rounded-lg'>
              <FaShoppingCart className='mr-2'/>ADD TO CART
            </button>
          </div>
        </div>
        <div className='col-span-2 flex flex-col justify-center mt-10 md:mt-0  md:mr-30'>
          <h1 className='text-3xl font-semibold'>Cow Puja</h1>
          <p className='my-2 text-justify text-gray-500'>
            Our Pundits can perform Cow Puja for you either with you at the Ashram or on behalf of you if you are unable to attend. 
            If this is the case, we can send you photographs or videos of your Puja. Your donations for Cow Puja will be used for purchasing Puja materials and as per Vedic rules, giving dakshina to the Pundits for performing the Puja. 
            Please contact us for further information on welcome@kamdhenuseva.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default CowPuja;
