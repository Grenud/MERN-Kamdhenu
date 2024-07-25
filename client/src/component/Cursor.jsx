import React, { useEffect } from 'react';

function Cursor() {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const cursorBlur = document.querySelector('.cursor-blur');

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      cursorBlur.style.left = `${e.clientX}px`;
      cursorBlur.style.top = `${e.clientY}px`;
    };

    document.addEventListener('mousemove', moveCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div>
      <div className='cursor h-6 w-6 bg-[#95C11E] fixed rounded-full z-50 transition-all duration-100 hidden lg:block'></div>
      <div className='cursor-blur h-40 w-40 bg-[#96c11e41] rounded-full fixed filter blur-lg z-40 transition-all hidden lg:block'></div>
    </div>
  );
}

export default Cursor;
