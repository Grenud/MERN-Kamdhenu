import React from 'react';

function Loading({ size = 'w-12 h-12' }) {
  return (
    <section className="w-full flex justify-center items-center">
      <img 
        src={'/loading.svg'} 
        className={`${size} animate-spin`} // Adding a spin animation class
        alt="Loading spinner" 
        onError={(e) => { e.target.src = '/fallback-image.svg'; }} // Fallback image
      />
    </section>
  );
}

export default Loading;
