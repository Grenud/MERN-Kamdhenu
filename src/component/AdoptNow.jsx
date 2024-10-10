import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const RAZORPAY_KEY_ID = import.meta.env.RAZORPAY_KEY_ID;

const AdoptNow = ({ showModal, closeModal, cattleId }) => {
  const { user } = useSelector((state) => state.Auth);
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const [selectedAmount, setSelectedAmount] = useState(58800); // Default amount
  const [messageVisible, setMessageVisible] = useState(false);
  const [error, setError] = useState('');

  // Handle Razorpay payment
  const handlePayment = async () => {
    try {
      // Create the order
      const response = await axios.post("/create-order", {
        amount: selectedAmount,
        userId: user._id,
        cattleId: cattleId
      });
      const { order } = response.data;

      // Set up Razorpay options
      const options = {
        key: RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Kamdhenu-seva",
        description: "Donation for Cattle",
        order_id: order.id,
        handler: async function (response) {
          try {
            // Verify payment
            const verificationResponse = await axios.post("/verify-payment", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });
            toast.success("Payment verification successful! Thank you for your donation!");
          } catch (error) {
            setError("Payment verification failed.");
            toast.error("Payment verification failed.");
          }
        },
        prefill: {
          name: user.name || "",
          email: user.email || "",
        },
        theme: {
          color: "#F37254",
        },
      };

      const rzp = new Razorpay(options);
      rzp.open();
    } catch (error) {
      setError(error.response?.data?.message || "Failed to create order");
      toast.error("Failed to create order. Please try again.");
    }
  };


  // Reset form when modal is opened
  useEffect(() => {
    if (showModal) {
      setMessageVisible(false);
      setSelectedAmount(580); // Reset to default amount
    }

  }, [showModal]); // Include user in the dependency array

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

  useEffect(() => {
    // Dynamically load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  if (!showModal) return null;

  const handleTierClick = (amount) => {
    setSelectedAmount(amount);
  };

  const handleAdoptNow = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please login to Adopt")
      return
    }
    handlePayment(); // Trigger payment directly
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
            onClick={() => handleTierClick(580)}
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

        <p className="text-xs mb-2">You have chosen to adopt ₹{selectedAmount.toFixed(2)} yearly.</p>

        <p className="font-bold text-black mt-2 text-sm">Select Payment Method</p>
        <hr className="my-2" />

        {/* Payment Method Radio Buttons */}
        <div className="flex space-x-4 mb-4">
          <label className="flex items-center space-x-2 text-xs">
            <input type="radio" name="payment-method" value="razorpay" defaultChecked />
            <span>RAZORPAY</span>
          </label>
        </div>

        {/* Conditionally render thank you message */}
        {!messageVisible ? (
          <form className="p-1" onSubmit={handleAdoptNow}>
            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Adopt Now
              </button>
            </div>
          </form>
        ) : (
          <div className="p-4 bg-green-100 text-green-700 text-center rounded-md">
            <p>Thank you for your generous donation! We truly appreciate your support.</p>
          </div>
        )}

        {/* Error Message Display */}
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
      </div>
    </div>
  );
};

export default AdoptNow;
