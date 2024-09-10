import React from 'react';
import cow from '../../assets/cowcover3.png';
import Button from '../../component/Button';

export default function SignUp() {
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
              Sign Up
            </h2>
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" value="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="sr-only">
                    Enter your phone number
                  </label>
                  <input
                    id="phone"
                    placeholder="Enter your phone number"
                    name="phone"
                    type="tel"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Enter your password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm ml-20">
                  <a
                    href="#"
                    className="font-medium  text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <Button  btnText="Sign Up"  />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
