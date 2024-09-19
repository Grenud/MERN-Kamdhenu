import React from 'react';

function Button({ btnText, className = "", onClick }) {
  return (
    <button
      onClick={onClick}
      className={`text-white font-semibold bg-green-800 hover:bg-green-900 rounded-md w-32 h-10 flex justify-center items-center ${className}`}
    >
      {btnText}
    </button>
  );
}

export default Button;
