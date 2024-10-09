import React from 'react';

function SmallYellowOutlineButton(props) {
    const { text, onClick } = props;

    return (
        <button 
            onClick={onClick} 
            className='min-[933px]:text-xl text-sm bg-transparent hover:bg-white hover:text-black text-smoke-yellow font-medium p-2 border border-smoke-yellow hover:border-transparent rounded-md'
            aria-label={text} // Added aria-label for accessibility
        >
            {text}
        </button>
    );
}

export default SmallYellowOutlineButton;
