import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Gallery() {
  const [zoomedIndex, setZoomedIndex] = useState(null); 

  const image = [
    {
      id: 1,
      image: 'https://kamdhenuseva.com/wp-content/uploads/2023/01/Gopal-Krishna-with-Cow-HD-Wallaper-705x614-1.jpg'
    },
    {
      id: 2,
      image: 'https://kamdhenuseva.com/wp-content/uploads/2023/01/ddc908fed9d84384198e112fd9cd0f8b-705x529-1.jpg'
    },
    {
      id: 3,
      image: 'https://kamdhenuseva.com/wp-content/uploads/2023/01/govinda-705x414-1.jpg'
    },
    {
      id: 4,
      image: 'https://kamdhenuseva.com/wp-content/uploads/2023/01/krishna-705x420-1.jpg'
    },
    {
      id: 5,
      image: 'https://kamdhenuseva.com/wp-content/uploads/2023/01/lord_krishnas_cow_or38-705x506-1.jpg'
    },
    {
      id: 6,
      image: 'https://kamdhenuseva.com/wp-content/uploads/2023/01/pure-cow-ghee-india-gomataseva.jpg'
    }
  ];

  const toggleZoom = (index) => {
    if (zoomedIndex === index) {
      setZoomedIndex(null);
    } else {
      setZoomedIndex(index);
    }
  };

  return (
    <div className='container mx-auto mt-36 px-4 md:px-0'>
      <h1 className='text-3xl font-bold text-[#6d9051] '>Gallery</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20 mt-10'>
        {image.map((item, index) => (
          <div key={index} className={`relative overflow-hidden rounded-lg shadow-lg ${zoomedIndex === index ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
            <motion.img
              src={item.image}
              alt={`Image ${item.id}`}
              className={`w-full h-full object-cover rounded-lg ${zoomedIndex === index ? 'scale-150' : 'scale-100'}`}
              onClick={() => toggleZoom(index)}
              initial={{ scale: 1, opacity: 0 }}
              whileInView={{ scale: 1.05, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
