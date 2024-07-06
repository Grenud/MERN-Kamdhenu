import React, { useState, useEffect } from 'react';
import coverImageData from '../data/coverImage';

function Slider({ bottomRef }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === coverImageData.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleLearnMoreClick = () => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div>
      {/* Image Slider Section */}
      <div className="relative overflow-hidden w-full mt-[78px] md:mt-0">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {coverImageData.map((item, index) => (
            <div key={index} className="min-w-full relative">
              <img
                src={item.image}
                className="w-full h-full object-cover"
                alt={item.altText}
              />
              <div className="absolute inset-0 flex flex-col items-start ml-[20px] md:ml-[50px] justify-center top-[15%] text-gray-300 text-center">
                <h1 className="text-xl md:text-3xl font-bold mb-2">{item.heading}</h1>
                <p className="mb-4">{item.paragraph}</p>
                <button className="py-1 md:py-2 px-4 rounded-md bg-green-800 font-semibold hover:bg-green-600 transition-colors border-[#213547] duration-200 ease-in focus:outline-none focus:ring-1 focus:ring-[#270e8c]" onClick={handleLearnMoreClick}>
             {item.button}
           </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
