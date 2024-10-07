import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DonateNow from './DonateNow';

const RAZORPAY_KEY_ID = import.meta.env.RAZORPAY_KEY_ID;

const DonationComponent = () => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Dynamically load Razorpay script
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    if (!amount || amount < 100) {
      setError('The minimum donation amount is ₹100.');
      return;
    }

    setError(''); // Clear error message if validation passes
    try {
      // Step 1: Create an order on the server
      const orderResponse = await axios.post('/create-order', {
        amount: amount * 100, // Convert amount to paise
        currency: 'INR',
      });

      const { id: order_id, amount: orderAmount, currency } = orderResponse.data;

      // Step 2: Open the Razorpay Checkout modal
      const options = {
        key: RAZORPAY_KEY_ID, // Razorpay Key ID
        amount: orderAmount, // Amount in smallest unit (paise)
        currency: currency,
        name: 'Your Organization Name',
        description: 'Donation',
        order_id: order_id,
        handler: async (response) => {
          const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;

          // Step 3: Verify payment on the server
          const verifyResponse = await axios.post('/verify-payment', {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
          });

          if (verifyResponse.data.message === 'Payment verified successfully') {
            alert('Thank you for your donation!');
          } else {
            alert('Payment verification failed!');
          }
        },
        prefill: {
          name: 'Donor Name', // Prefill donor details
          email: 'donor@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#3399cc',
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Donate to Support Us</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount (min ₹100)"
        min="100"
        required
        className='w-full outline-none h-10 py-2 px-2 border-2 border-green-800 rounded-md my-4'
      />
      {error && <p className="text-red-500">{error}</p>}
      <button
        onClick={handlePayment} // Trigger payment directly
        className="text-light bg-secondary w-32 h-10 rounded-full flex justify-center items-center"
      >
        Donate Now
      </button>
      
      {/* Modal */}
      <DonateNow showModal={showModal} closeModal={() => setShowModal(false)} />
    </div>
  );
};

export default DonationComponent;
