import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast'

const DonateButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const { user } = useSelector((state) => state.Auth)

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setAmount(0)
  };
  console.log(amount, user)
  // Function to handle Razorpay payment
  const handlePayment = async () => {
    try {
      if(!user){
        throw new Error("please login to donate")
      }
      console.log(user)
      // Create the order
      const response = await axios.post("/create-order-adopt", {
        amount: amount,
        userId: user._id
      });
      console.log(response)
      const { order } = response.data;

      // Set up Razorpay options
      const options = {
        key: import.meta.env.RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Kamdhenu-seva",
        description: "Adoption",
        order_id: order.id,
        handler: async function (response) {
          try {
            // Verify payment
            const verificationResponse = await axios.post("/verify-payment-adopt", {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });
            toast.success("Payment verification successful! Thank you for your donation!");
            setIsModalOpen(false)
            setAmount(0)
          } catch (error) {
            toast.error("Payment verification failed.");
            setAmount(0)
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
      toast.error(error.message);
    }
  };
  return (
    <div>
      <button className="bg-green-800 text-white hidden sm:inline-block px-6 lg:px-12 py-3 rounded-md md:mr-14 hover:bg-green-900 duration-200 mt-10" onClick={openModal}>
        Adopt Now
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-xl mb-4">Enter the amount to donate</h2>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border p-2 w-full mb-4"
              placeholder="Enter amount"
            />
            <div className='flex gap-4 items-center'>
              <button
                onClick={handlePayment}
                aria-label="Adopt Now"
                className="bg-green-800 text-white px-6 py-2"
              >
                Adopt Now
              </button>
              <button className=" text-red-500" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonateButton;
