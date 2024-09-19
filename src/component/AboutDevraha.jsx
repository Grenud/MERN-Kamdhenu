import React, { useState } from 'react';
import DonateNow from './DonateNow';

function AboutDevraha() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      {/* About Devraha Section */}
      <div className="flex justify-between mb-4 md:mt-[50px] ml-5 mt-10">
        <h1 className="text-3xl md:text-4xl font-bold">About Sri Devraha Baba Ashram</h1>
      </div>

      <div className="w-full flex flex-col md:flex-row p-4">
        <div className="w-full md:w-2/3 p-4 text-gray-500 order-2 md:order-1">
          <p className="mb-2 font-semibold">
            Here, away from the noisy streets, in the gardens of Vrindavan, amazing games of Radha and Krishna take place at all times. Krishna's friends, the cows, find shelter and love in this blessed place.
          </p>
          <p className="mb-2">
            In the ancient city of Vrindavan, on the banks of the sacred Yamuna River, there is an Ashram of the world-famous sage Sri Devraha Baba, one of the greatest siddha yogis of India in the parampara of Sri Ramanuja Acharya. People of all castes and classes came to him to pay obeisances from different parts of India and many countries of the world. It was attended by Indian Prime Minister Indira Gandhi and her son Rajiv, the first President of the USSR Mikhail Gorbachev, as well as other politicians, saints, yogis, priests, rich and poor—all came for the blessing of Sri Devraha Baba—the true spiritual incarnation of love.
          </p>
          <p className="mb-2 font-semibold">
            Today, the ashram is run by the successor of Sri Devraha Baba, Mahatma Sri Devadas Maharaj, following the instructions of the great sage.
          </p>
          <button
          onClick={openModal}
          className="bg-green-800 text-white hidden sm:inline-block px-6 lg:px-12 py-3 rounded-md md:mr-14 hover:bg-green-900 duration-200 mt-10"
        >
          Donate Now
        </button>
        </div>
        <div className="w-full md:w-1/3 p-4 flex justify-end order-1 md:order-2 flex-col gap-2">
          <img
            src="https://kamdhenuseva.com/wp-content/uploads/2023/01/IMG_8577-1487x1536.jpg"
            alt="Sri Devraha Baba Ashram"
            className="object-cover rounded-md"
          />
          <p className='italic'>Brahm Rishi Shri Shri Dev Das Ji Maharaj</p>
        </div>
      </div>

      {/* DonateNow Modal */}
      <DonateNow showModal={showModal} closeModal={closeModal} />
    </div>
  );
}

export default AboutDevraha;
