import React from 'react';
import { FaRegStar } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

function CowPuja() {
  return (
    <div className='container mx-auto mt-20 px-4 md:px-6 mb-20 lg:px-8'>
      <div className='p-4 md:grid grid-cols-1 md:grid-cols-3 gap-6 shadow-2xl rounded-lg'>
        <div className='col-span-1 md:col-span-1 text-center bg-white shadow-md rounded-lg p-5'>
          <img className='w-full h-auto rounded-lg' src='https://kamdhenuseva.com/wp-content/uploads/2023/01/gai-tihar-300x197-1.jpg' alt='Cow Puja' />
          <h4 className='text-xl font-semibold mt-4'>Cow Puja</h4>
          <div className='flex justify-center mt-2'>
            <p className='line-through text-gray-500'>₹2,000.00</p>
            <span className='ml-2 text-xl font-bold'>₹1,500.00</span>
          </div>
          <div className='flex justify-center mt-4'>
            <button className='flex items-center bg-[#6d9051] text-white px-4 py-2 rounded-lg hover:bg-[#5a7b3d]'>
              <FaShoppingCart className='mr-2'/>ADD TO CART
            </button>
          </div>
        </div>
        <div className='col-span-1 md:col-span-2 flex flex-col justify-center mt-6 md:mt-0'>
          <h1 className='text-3xl font-semibold mb-4'>Cow Puja</h1>
          <p className='text-justify text-gray-700 leading-relaxed'>
            Our Pundits can perform Cow Puja for you either with you at the Ashram or on behalf of you if you are unable to attend. 
            If this is the case, we can send you photographs or videos of your Puja. Your donations for Cow Puja will be used for purchasing Puja materials and as per Vedic rules, giving dakshina to the Pundits for performing the Puja. 
            Please contact us for further information at <a href="mailto:welcome@kamdhenuseva.com" className='text-[#6d9051] hover:underline'>welcome@kamdhenuseva.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CowPuja;
