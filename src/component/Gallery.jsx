import React from 'react';
import { motion } from 'framer-motion';

function Gallery() {
  const images = [
    {
      id: 1,
      image: 'https://kamdhenuseva.com/wp-content/uploads/2023/01/Gopal-Krishna-with-Cow-HD-Wallaper-705x614-1.jpg',
    },
    {
      id: 2,
      image: 'https://kamdhenuseva.com/wp-content/uploads/2023/01/ddc908fed9d84384198e112fd9cd0f8b-705x529-1.jpg',
    },
    {
      id: 3,
      image: 'https://kamdhenuseva.com/wp-content/uploads/2023/01/govinda-705x414-1.jpg',
    },
    {
      id: 4,
      image: 'https://kamdhenuseva.com/wp-content/uploads/2023/01/krishna-705x420-1.jpg',
    },
    {
      id: 5,
      image: 'https://kamdhenuseva.com/wp-content/uploads/2023/01/lord_krishnas_cow_or38-705x506-1.jpg',
    },
    {
      id: 6,
      image: 'https://kamdhenuseva.com/wp-content/uploads/2023/01/pure-cow-ghee-india-gomataseva.jpg',
    },
  ];

  return (
    <div className="container mx-auto mt-24 lg:mt-32 px-6 md:px-10 lg:px-16 mb-10">
      <h1 className="text-5xl tracking-wider font-bold text-[#6d9051] mb-10 text-center">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((item) => (
          <motion.div
            key={item.id} // Use unique ID for keys
            className="overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.3)" }} // Added box shadow for hover
            transition={{ duration: 0.3 }}
          >
            <img
              src={item.image}
              alt={`Image ${item.id}`}
              loading="lazy" // Lazy loading for performance
              className="w-full h-80 object-cover rounded-lg" // Fixed height with object-cover
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
