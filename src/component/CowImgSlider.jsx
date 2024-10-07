import React, { useState } from 'react';
import CowSlider from '../data/CowSlider';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';

function CowImgSlider({ bottomRef }) {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((prevSlide) => (prevSlide + 1) % CowSlider.length);
  };

  const prevSlide = () => {
    setSlide((prevSlide) => (prevSlide - 1 + CowSlider.length) % CowSlider.length);
  };

  const getTransformValue = () => {
    return `translateX(-${(slide % CowSlider.length) * (100 / 3)}%)`;
  };

  return (
    <div className='mt-32' ref={bottomRef}>
      <h1 className='font-bold text-center text-4xl md:text-5xl'>Donate Now to Change Lives</h1>
      <div className='flex items-center'>
        <button
          className='flex items-center justify-center w-10 h-10 p-2 md:p-1 cursor-pointer disabled:opacity-50'
          onClick={prevSlide}
          disabled={slide === 0} // Disable when at the first slide
          aria-label="Previous Slide"
        >
          <IoChevronBackOutline className="text-xl md:text-base" />
        </button>
        
        <div className='flex overflow-hidden flex-grow'>
          <div
            className="flex transition-transform duration-500 gap-3 mt-12"
            style={{ transform: getTransformValue() }}
          >
            {CowSlider.concat(CowSlider.slice(0, 3)).map((item, index) => (
              <div key={index} className='min-w-[33%] border shadow-lg hover:scale-95 duration-200 rounded-md flex-shrink-0'>
                <div className='rounded-t-xl'>
                  <img
                    className='h-36 md:h-56 lg:h-64 w-full object-cover rounded-t-md'
                    src={item.image}
                    alt={item.Name}
                  />
                </div>
                <div className='flex flex-col justify-start items-start gap-3 p-4'>
                  <h4 className='text-lg font-semibold'>{item.Name}</h4>
                  <p className='text-sm text-gray-500'>{item.Sponsor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <button
          className='flex items-center justify-center w-10 h-10 p-2 md:p-1 cursor-pointer disabled:opacity-50'
          onClick={nextSlide}
          disabled={slide === CowSlider.length - 1} // Disable when at the last slide
          aria-label="Next Slide"
        >
          <IoChevronForwardOutline className="text-xl md:text-base" />
        </button>
      </div>
    </div>
  );
}

export default CowImgSlider;
