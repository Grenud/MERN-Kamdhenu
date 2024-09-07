import React, { useRef, useEffect, useState } from "react";

const DonateNow = ({ showModal, closeModal }) => {
  const modalRef = useRef(null);
  const [selectedAmount, setSelectedAmount] = useState(58800); // Default amount
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  // Handle closing modal on outside click
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

  // Function to handle tier selection
  const handleTierClick = (amount) => {
    setSelectedAmount(amount);
  };

  // Form validation on "Donate Now" button click
  const handleDonateNow = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!firstName) {
      newErrors.firstName = "Please fill in the first name.";
    }
    if (!lastName) {
      newErrors.lastName = "Please fill in the last name.";
    }
    if (!email) {
      newErrors.email = "Please fill in the email.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Proceed with donation process
      console.log("Proceed with donation");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="bg-white p-7 rounded-lg shadow-lg w-full max-w-lg relative overflow-hidden ml-2 md:ml-0 mr-2 md:mr-0 max-h-[90vh] overflow-y-auto"
      >
        {/* Display the selected amount */}
        <h2 className="text-base font-bold mb-3">
          <span className="bg-[#6d9051] text-white text-lg inline-block px-2">
            ₹
          </span>
          <span className="border px-2">{selectedAmount.toFixed(2)}</span>
        </h2>

        {/* Donation Options */}
        <div className="flex flex-wrap space-x-1 mb-2">
          <button
            className="p-2 bg-green-800 text-black font-semibold text-xs w-[48%]"
            onClick={() => handleTierClick(58800)}
          >
            GREEN (1 MONTH), MONTHLY
          </button>
          <button
            className="p-2 bg-orange-600 text-black font-semibold text-xs w-[48%]"
            onClick={() => handleTierClick(176400)}
          >
            BRONZE (3 MONTHS), QUARTERLY
          </button>
        </div>

        <div>
          <button
            className="p-2 bg-slate-400 text-black font-semibold text-xs w-[60%] mb-2"
            onClick={() => handleTierClick(352800)}
          >
            SILVER (6 MONTHS), EVERY TWO QUARTERS
          </button>
          <br />
          <button
            className="p-2 bg-yellow-600 text-black font-semibold text-xs w-[40%] mb-2"
            onClick={() => handleTierClick(705600)}
          >
            GOLD (12 MONTHS), YEARLY
          </button>
          <br />
          <button
            className="p-2 bg-slate-400 text-black font-semibold text-xs w-[60%] mb-2"
            onClick={() => handleTierClick(3528000)}
          >
            PLATINUM (5 YEARS), EVERY FIVE YEARS
          </button>

          <button
            className="p-2 bg-sky-400 text-black font-semibold text-xs w-[60%] mb-3"
            onClick={() => handleTierClick(14112000)}
          >
            DIAMOND (20 YEARS), EVERY SIX YEARS
          </button>
        </div>

        {/* Display chosen donation frequency */}
        <p className="text-xs mb-2">
          You have chosen to donate ₹{selectedAmount.toFixed(2)}.
        </p>


        {/* Payment and personal info form */}
        <form className="p-1" onSubmit={handleDonateNow}>
          <h2 className="font-bold text-black text-sm">Personal Info</h2>
          <hr className="my-2" />

          <div className="flex flex-wrap space-x-1 mb-2">
            <div className="flex-1">
              <label className="block text-xs font-semibold mb-1">
                First Name<span className="ml-1 text-red-700 text-xs">*</span>
              </label>
              <input
                type="text"
                className="border p-2 w-full text-xs"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs">{errors.firstName}</p>
              )}
            </div>
            <div className="flex-1">
              <label className="block text-xs font-semibold mb-1">
                Last Name<span className="ml-1 text-red-700 text-xs">*</span>
              </label>
              <input
                type="text"
                className="border p-2 w-full text-xs"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs">{errors.lastName}</p>
              )}
            </div>
          </div>

          <div className="mb-2">
            <label className="block text-xs font-semibold mb-1">
              Email Address<span className="ml-1 text-red-700 text-xs">*</span>
            </label>
            <input
              type="email"
              className="border p-2 w-full text-xs"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
          </div>

          <div className="mb-2">
            <label className="block text-xs font-semibold mb-1">
              Phone<span className="ml-1 text-red-700 text-xs">*</span>
            </label>
            <input
              type="tel"
              className="border p-2 w-full text-xs"
              placeholder="Phone"
            />
          </div>

          <button
            type="submit"
            className="text-black bg-[#6d9051] w-32 h-8 text-sm rounded-full flex justify-center items-center mt-3"
          >
            Donate Now
          </button>
        </form>

        <button
          onClick={closeModal}
          className="absolute top-1 right-3 text-3xl font-semibold text-gray-500"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default DonateNow;
