import React from 'react';

function GreenButton({ onclick, text = 'Click Me' }) { // Destructured props with default value

  return (
    <div className="">
      <button
        onClick={onclick}
        type="button" // Specify button type
        className="bg-ayurveda-green border-ayurveda-yellow hover:opacity-70 text-white px-7 py-1 rounded-2xl font-open-sans font-medium md:text-xl text-sm"
      >
        {text}
      </button>
    </div>
  );
}

export default GreenButton;
