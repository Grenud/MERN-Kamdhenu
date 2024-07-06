import React, { useState, useEffect } from 'react';
import coverImageData from '../data/coverImage';

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === coverImageData.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Image Slider Section */}
      <div className="relative overflow-hidden w-full md:mt-0">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {coverImageData.map((item, index) => (
            <div key={index} className="min-w-full relative">
              <div className='w-full h-full bg-black opacity-60 absolute top-0 left-0'></div>
              <img
                src={item.image}
                className="w-full h-[100vh] object-cover"
                alt={item.altText}
              />
              <div className="absolute inset-0 flex flex-col items-start ml-[20px] md:ml-[50px] justify-center top-[15%] text-gray-300 text-center tracking-wide">
                <h1 className="text-3xl md:text-6xl font-bold mb-2 tracking-wider ">{item.heading}</h1>
                <p className="mb-4 text-start font-light tracking-wide ">{item.paragraph}</p>
                <button className="px-10 py-3 rounded-md bg-transparent text-green-light hover:bg-green-light hover:border-green-light hover:text-light font-semibold border-2 border-green-light duration-300 outline-none">
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
