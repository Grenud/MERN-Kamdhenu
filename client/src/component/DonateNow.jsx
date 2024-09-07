import React, { useRef, useEffect } from "react";

const DonateNow = ({ showModal, closeModal }) => {
  const modalRef = useRef(null);

  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    
    document.addEventListener("mousedown", handleClickOutside);


    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="bg-white p-5 rounded-lg shadow-lg w-full max-w-lg relative overflow-hidden ml-2 md:ml-0 mr-2 md:mr-0"
      >
      
        <h2 className="text-sm font-bold mb-2">
          <span className="bg-[#6d9051] text-white text-lg inline-block px-1">
            ₹
          </span>
          <span className="border px-1">58,800.00</span>
        </h2>

        {/* Donation Options */}
        <div className="flex flex-wrap space-x-1 mb-1">
          <p className="p-1 bg-green-800 text-black font-semibold text-[10px] w-[48%]">
            GREEN (1 MONTH), MONTHLY
          </p>
          <p className="p-1 bg-orange-600 text-black font-semibold text-[10px] w-[48%]">
            BRONZE (3 MONTHS), QUARTERLY
          </p>
        </div>

        <div>
          <p className="p-1 bg-slate-400 text-black font-semibold text-[10px] w-[60%] mb-1">
            SILVER (6 MONTHS), EVERY TWO QUARTERS
          </p>
          <p className="p-1 bg-yellow-600 text-black font-semibold text-[10px] w-[40%] mb-1">
            GOLD (12 MONTHS), YEARLY
          </p>
          <p className="p-1 bg-slate-400 text-black font-semibold text-[10px] w-[60%] mb-1">
            PLATINUM (5 YEARS), EVERY FIVE YEARS
          </p>
          <p className="p-1 bg-sky-400 text-black font-semibold text-[10px] w-[60%] mb-2">
            DIAMOND (20 YEARS), EVERY SIX YEARS
          </p>
        </div>

        <p className="text-[10px] mb-1">
          You have chosen to donate ₹58,800.00 yearly.
        </p>

        <p className="font-bold text-black mt-2 text-xs">
          Select Payment Method
        </p>
        <hr className="my-1" />

        {/* Payment Method Radio Buttons */}
        <div className="flex space-x-2 mb-3 mt-2">
          <label className="flex items-center space-x-1 text-[10px]">
            <input type="radio" name="payment-method" value="razorpay" />
            <span>RAZORPAY</span>
          </label>
          <label className="flex items-center space-x-1 text-[10px]">
            <input type="radio" name="payment-method" value="paypal" />
            <span>PAYPAL</span>
          </label>
        </div>

        {/* Personal Info Form */}
        <form className="p-1">
          <h2 className="font-bold text-black text-xs">Personal Info</h2>
          <hr className="my-1" />

          {/* First Name and Last Name */}
          <div className="flex flex-wrap space-x-1 mb-1">
            <div className="flex-1 mt-2">
              <label className="block text-[10px] font-semibold mb-1">
                First Name
                <span className="ml-1 text-red-700 text-[8px] font-bold">
                  *
                </span>
                <span className="ml-1 inline-flex items-center justify-center text-[8px] font-bold rounded-full border-2 w-3 h-3">?</span>

              </label>
              <input
                type="text"
                className="border p-1 w-full text-[10px]"
                placeholder="First Name"
              />
            </div>
            <div className="flex-1">
              <label className="block text-[10px] font-semibold mb-1">
                Last Name
                <span className="ml-1 text-red-700 text-[8px] font-bold">
                  *
                </span>
              </label>
              <input
                type="text"
                className="border p-1 w-full text-[10px]"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Email */}
          <div className="mb-1 mt-2">
            <label className="block text-[10px] font-semibold mb-1">
              Email Address
              <span className="ml-1 text-red-700 text-[8px] font-bold">*</span>
              <span className="ml-1 inline-flex items-center justify-center text-[8px] font-bold rounded-full border-2 w-3 h-3">?</span>

            </label>
            <input
              type="email"
              className="border p-1 w-full text-[10px]"
              placeholder="Email Address"
            />
          </div>

          {/* Phone */}
          <div className="mb-1 mt-2">
            <label className="block text-[10px] font-semibold mb-1">
              Phone
              <span className="ml-1 text-red-700 text-[8px] font-bold">*</span>
              <span className="ml-1 inline-flex items-center justify-center text-[8px] font-bold rounded-full border-2 w-3 h-3">?</span>

            </label>
            <input
              type="tel"
              className="border p-1 w-full text-[10px]"
              placeholder="Phone"
            />
          </div>

          {/* Agree to Terms */}
          <div className="flex justify-between text-[10px] mt-3">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Agree to Terms?
            </label>
            <p className="font-semibold text-black pr-1">Show Terms</p>
          </div>

          <h2 className="text-xs font-bold mb-1 mt-3">
            <span className="font-semibold text-black inline-block">
              Donation Total:
            </span>
            <span className="text-[#6d9051]">₹58,800.00</span>
            <span className="font-light ml-1">Yearly</span>
          </h2>

          {/* Submit Button */}
          <button
            type="submit"
            className="text-black bg-[#6d9051] w-24 h-7 text-xs rounded-full flex justify-center items-center mt-3"
          >
            Donate Now
          </button>
        </form>

        <button
          onClick={closeModal}
          className="absolute top-1 right-3 text-2xl font-semibold text-gray-500"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default DonateNow;
