import React, { useState } from "react";
import { motion } from "framer-motion";

function SpiritualImp() {
  const [zoomedIndex, setZoomedIndex] = useState(null);

  const image = [
    {
      id: 1,
      image:
        "https://kamdhenuseva.com/wp-content/uploads/2023/01/Gopal-Krishna-with-Cow-HD-Wallaper-705x614-1.jpg",
    },
    {
      id: 2,
      image:
        "https://kamdhenuseva.com/wp-content/uploads/2023/01/ddc908fed9d84384198e112fd9cd0f8b-705x529-1.jpg",
    },
    {
      id: 3,
      image:
        "https://kamdhenuseva.com/wp-content/uploads/2023/01/govinda-705x414-1.jpg",
    },
    {
      id: 4,
      image:
        "https://kamdhenuseva.com/wp-content/uploads/2023/01/krishna-705x420-1.jpg",
    },
    {
      id: 5,
      image:
        "https://kamdhenuseva.com/wp-content/uploads/2023/01/lord_krishnas_cow_or38-705x506-1.jpg",
    },
    {
      id: 6,
      image:
        "https://kamdhenuseva.com/wp-content/uploads/2023/01/pure-cow-ghee-india-gomataseva.jpg",
    },
  ];

  const toggleZoom = (index) => {
    if (zoomedIndex === index) {
      setZoomedIndex(null);
    } else {
      setZoomedIndex(index);
    }
  };

  return (
    <div className="container mx-auto mt-24 px-4 md:px-0">
      <p className="mt-8 leading-8 text-justify">
        Hindu religion considers cows as goddesses, as it bestows us with life
        savior milk.
        <br />
        The cow is considered a motherly figure, who takes such good care of her
        people.
        <br />
        Even a well-known deity, Lord Krishna, is popular as Govinda and Gopala
        which means literally “lord and guardian of cows.” As per Hinduism and
        spiritual reasons cow is worshipped as a mother. Being symbolic of
        wealth and good fortune, cows are considered to be the purest of all
        animals and are worshipped as Kamdhenu, the sacred cow, which is
        considered as the source of all prosperity in Hindu Religion. Our Vedas
        also link cows as a symbol of well-being and prosperity in the house.
        Cow Mata is very sacred and special to Lord Krishna and as Hindus it is
        our duty to protect and care for Cow Mata.
        <br />
        Sri Devraha Baba said: “a Hindu can be recognised by the way he loves
        and worships cows”. Baba felt so passionately about the holiness of cows
        that he revealed “Bharat Varsh (India) will be saved by Cow Mata when
        time will come”.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20 mt-10">
        {image.map((item, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-lg ${
              zoomedIndex === index ? "lg:col-span-2 lg:row-span-2" : ""
            }`}
          >
            <motion.img
              src={item.image}
              alt={`Image ${item.id}`}
              className={`w-full h-full object-cover rounded-lg ${
                zoomedIndex === index ? "scale-150" : "scale-100"
              }`}
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

export default SpiritualImp;
