import React from 'react';

function GoogleLogin() {
  const handleGoogleLogin = () => {
    // Capture the current URL the user is on
    const currentUrl = window.location.origin;

    // Redirect to your backend Google login route, including the current URL in the state parameter
    window.location.href = `http://localhost:8000/auth/google?state=${encodeURIComponent(currentUrl)}`;
  };

  return (
    <button
      className='bg-primary text-light py-2 px-4 items-center justify-center text-center w-full'
      onClick={handleGoogleLogin}
    >
      Login with Google
    </button>
  );
}

export default GoogleLogin;
