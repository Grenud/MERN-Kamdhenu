import React from 'react';
const VITE_API_KEY = import.meta.env.VITE_API_KEY

function GoogleLogin() {
  const handleGoogleLogin = () => {
    // Capture the current URL the user is on
    const currentUrl = window.location.origin;

    // Redirect to your backend Google login route, including the current URL in the state parameter
    window.location.href = `${VITE_API_KEY}/auth/google?state=${encodeURIComponent(currentUrl)}`;
  };

  return (
    <button
      className='bg-white text-light py-2 px-4 items-center justify-center text-center w-full'
      onClick={handleGoogleLogin}
    >
      <div className='flex gap-3 items-center justify-center'>
      <img src='/google-svg.svg' className='w-6 h-6'/>
        <div className='text-lg text-gray-400'>Sign in with Google</div>
      </div>
    </button>
  );
}

export default GoogleLogin;
