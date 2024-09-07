import React, { useRef, useEffect, useState } from "react";

const DonateNow = ({ showModal, closeModal }) => {
  const modalRef = useRef(null);
  const [selectedAmount, setSelectedAmount] = useState(58800); // Default amount
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState(""); // Phone number state
  const [errors, setErrors] = useState({});
  const [messageVisible, setMessageVisible] = useState(false);

  // Reset form when modal is opened
  useEffect(() => {
    if (showModal) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setTel("");
      setErrors({});
      setMessageVisible(false);
      setSelectedAmount(58800); // Reset to default amount
    }
  }, [showModal]);

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

  const handleTierClick = (amount) => {
    setSelectedAmount(amount);
  };

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
    if (!tel) {
      newErrors.tel = "Please fill in the phone.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Donation details:", { selectedAmount, firstName, lastName, email, tel });
      // Hide form and show thank you message
      setMessageVisible(true);
      setTimeout(() => {
        setMessageVisible(false);
        closeModal();
      }, 3000);
    }
  };

  const handleInputChange = (setter, field) => (e) => {
    setter(e.target.value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: "",
    }));
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
            className="p-2 bg-slate-400 text-black font-semibold text-xs w-[98%] md:w-[60%] mb-2"
            onClick={() => handleTierClick(352800)}
          >
            SILVER (6 MONTHS), EVERY TWO QUARTERS
          </button>
          <br />
          <button
            className="p-2 bg-yellow-600 text-black font-semibold text-xs w-[90%] md:w-[40%] mb-2"
            onClick={() => handleTierClick(705600)}
          >
            GOLD (12 MONTHS), YEARLY
          </button>
          <br />
          <button
            className="p-2 bg-slate-400 text-black font-semibold text-xs w-[95%] md:w-[60%] mb-2"
            onClick={() => handleTierClick(3528000)}
          >
            PLATINUM (5 YEARS), EVERY FIVE YEARS
          </button>

          <button
            className="p-2 bg-sky-400 text-black font-semibold text-xs w-[95%] md:w-[60%] mb-3"
            onClick={() => handleTierClick(14112000)}
          >
            DIAMOND (20 YEARS), EVERY SIX YEARS
          </button>
        </div>

        <p className="text-xs mb-2">You have chosen to donate ₹{selectedAmount.toFixed(2)} yearly.</p>

        <p className="font-bold text-black mt-2 text-sm">Select Payment Method</p>
        <hr className="my-2" />

        {/* Payment Method Radio Buttons */}
        <div className="flex space-x-4 mb-4">
          <label className="flex items-center space-x-2 text-xs">
            <input type="radio" name="payment-method" value="razorpay" />
            <span>RAZORPAY</span>
          </label>
          <label className="flex items-center space-x-2 text-xs">
            <input type="radio" name="payment-method" value="paypal" />
            <span>PAYPAL</span>
          </label>
        </div>

        {/* Conditionally render form or thank you message */}
        {!messageVisible ? (
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
                  onChange={handleInputChange(setFirstName, "firstName")}
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
                  onChange={handleInputChange(setLastName, "lastName")}
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
                onChange={handleInputChange(setEmail, "email")}
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
                value={tel}
                onChange={handleInputChange(setTel, "tel")}
              />
              {errors.tel && <p className="text-red-500 text-xs">{errors.tel}</p>}
            </div>

              {/* Agree to Terms */}
          <div className="flex justify-between text-[10px] mt-3">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Agree to Terms?
            </label>
            <p className='font-semibold text-black pr-1'>Show Terms</p>
          </div>
             

            <h2 className="text-xs font-bold mb-1 mt-3">
              <span className="font-semibold text-black inline-block">Donation Total:</span>
              <span className="text-green-800"> ₹{selectedAmount.toFixed(2)}</span>
            </h2>

            <button
          className="absolute top-2 right-2 p-1 text-gray-500"
          onClick={closeModal}
        >
          <span className="text-2xl">&times;</span>
        </button>


            <button
              type="submit"
                         className="text-black bg-[#6d9051] w-32 h-8 text-sm rounded-full flex items-center justify-center mt-3"
            >
              Donate Now
            </button>
          </form>
        ) : (
          <div className="text-center text-sm">
            <h3 className="text-green-600 font-bold">
              Thank you for your donation!
            </h3>
            <p className="text-xs mt-1">You will be redirected shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DonateNow;
