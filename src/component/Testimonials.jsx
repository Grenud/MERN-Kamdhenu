import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import VishnuDas from "../assets/Vishnu-das.png";

function Testimonials() {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const [ref1, inView1] = useInView({ threshold: 0.55 });
  const [ref2, inView2] = useInView({ threshold: 0.55 });

  const isSmallDevice = window.matchMedia("(max-width: 640px)").matches;

  useEffect(() => {
    if (inView1) {
      controls1.start({ y: 0, x: 0 });
    } else {
      controls1.start({ y: -70, x: isSmallDevice ? -10 : -70 });
    }
  }, [controls1, inView1, isSmallDevice]);

  useEffect(() => {
    if (inView2) {
      controls2.start({ y: 0, x: 0 });
    } else {
      controls2.start({ y: 70, x: isSmallDevice ? 10 : 70 });
    }
  }, [controls2, inView2, isSmallDevice]);

  return (
    <div className="container mx-auto mt-36 px-4 md:px-0">
      <h1 className="text-center font-bold text-3xl text-[#6d9051] mb-10">
        Donor's Experience
      </h1>
      <div className="mt-30 shadow-xl p-10 mb-20 hover:bg-[#6d9051] group rounded-lg relative">
        <motion.img
          src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-left.svg"
          className="w-10 h-10 absolute top-0 m-8 left-0 self-start mt-4"
          initial={{ y: -70, x: isSmallDevice ? -10 : -70 }}
          animate={controls1}
          ref={ref1}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
        <div className="flex flex-col">
          <h2 className="text-xl text-black font-semibold group-hover:text-white mt-16">
            Help Cow Matas
          </h2>
          <p className="mt-10 text-black leading-8">
            My family and I have had a great experience with cows. We have been
            participating in donations for the cows at our ashram for several
            years and taking care of them. Every time we come to the ashram, we
            interact with the cows, feed them, and take care of them. Since we
            began to take part in the life of the ashram cows, everything in our
            family has become balanced; material well-being does not leave our
            house. The children in our family are always healthy, cheerful, and
            do well at school. We believe that a big part of this success is
            connected with the gratitude that cows give us on a spiritual level.
            The cows are very thankful, kind, and responsive creatures. Help the
            cows, and happiness will fill your life!
          </p>
          <motion.img
            src="https://eiwgew27fhz.exactdn.com/wp-content/themes/puttosaurus/img/quote-right.svg"
            className="w-10 h-10 self-end mt-4"
            initial={{ y: 70, x: isSmallDevice ? 10 : 70 }}
            animate={controls2}
            ref={ref2}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
        <div className="mt-8">
          <img
            src={VishnuDas}
            alt="Vishnudas"
            className="rounded-full w-28 h-28"
          />
          <h4 className="text-black font-semibold mt-3 group-hover:text-white">
            Vishnu Das
          </h4>
          <p className="text-black group-hover:text-white">
            Guruji's student, head of a family with 4 children from Moscow
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
