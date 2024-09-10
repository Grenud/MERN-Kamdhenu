import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import {useAuth} from '../../component/Auth/AuthContext'
import cow from '../../assets/cowcover3.png';
import Button from '../../component/Button';

export default function Login() {
  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [otpTimer, setOtpTimer] = useState(0);
  const [usePassword, setUsePassword] = useState(false);
  const [otpClicked, setOtpClicked] = useState(false);
  const { login } = useAuth();  
  const navigate = useNavigate();

  const handleOtpClick = () => {
    setButtonDisabled(true);
    setShowOtpInput(true);
    setOtpTimer(60);
    setOtpClicked(true);

    const timerInterval = setInterval(() => {
      setOtpTimer((prev) => {
        if (prev === 1) {
          clearInterval(timerInterval);
          setButtonDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handlePasswordToggle = () => {
    setUsePassword(!usePassword);
    setShowOtpInput(false);
    setButtonDisabled(false);
    setOtpTimer(0);
    setOtpClicked(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login();  
    navigate('/signup');
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-[#e0d6bf]">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-gray-200 rounded-lg shadow-lg h-auto mt-20 mb-10">
        <div
          className="w-full md:w-1/2 min-h-[250px] md:h-auto bg-cover bg-center rounded-ts-lg md:rounded-l-lg"
          style={{
            backgroundImage: `url(${cow})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="max-w-md w-full space-y-8">
            <h2 className="text-center text-2xl md:text-3xl font-extrabold text-gray-900">
              Login
            </h2>
            <form className="mt-8 space-y-6" onSubmit={handleLoginSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold tracking-wider text-black">
                    Enter your phone number
                  </label>
                  <input
                    placeholder="Enter your phone number"
                    name="phone"
                    type="tel"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={usePassword}
                  onChange={handlePasswordToggle}
                  id="usePassword"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="usePassword"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Login with password
                </label>
              </div>

              {usePassword ? (
                <div className="flex flex-col gap-2">
                  <label className="font-semibold tracking-wider text-black">
                    Enter your password
                  </label>
                  <input
                    placeholder="Enter your password"
                    name="password"
                    type="password"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                
                  <Button btnText={"Login"}/>
                </div>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={handleOtpClick}
                    className={`text-light bg-secondary hover:bg-[#324458] w-32 h-10 rounded-full flex justify-center items-center ${
                      isButtonDisabled && 'opacity-50 cursor-not-allowed'
                    }`}
                    disabled={isButtonDisabled}
                  >
                    {isButtonDisabled ? `Retry in ${otpTimer}s` : 'Get OTP'}
                  </button>
                  {showOtpInput && (
                    <div className="flex flex-col gap-2 mt-4">
                      <label className="font-semibold tracking-wider text-black">
                        Enter OTP
                      </label>
                      <input
                        placeholder="Enter OTP"
                        name="otp"
                        type="number"
                        className="appearance-none rounded-none relative block w-full px-3 py-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      />
                       <Button btnText={"Login"}/>
                    </div>
                  )}
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
