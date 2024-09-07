import React from 'react'
import Button from '../component/Button';

function AboutCowPuja() {
  return (
    <div>
    <div className="container mx-auto mt-36 px-4 md:px-0">
      <h1 className="text-3xl font-semibold text-black text-center md:text-left">About KamdhenuSeva</h1>
      <p className="mt-8 leading-8 text-justify">
        At Sri Devraha Baba’s Ashram, Vrindavan, we have a long tradition of dedicated Cow seva as Sri Devraha Baba stated his blessings are with those devotees who serve and protect Cow Mata.
        <br />
        The unfortunate fate of many cows in India after their ability to produce milk has ceased is that they are either sent to slaughterhouses or abandoned by their owners to roam the streets as they are no longer seen as being productive. Here at Sri Devraha Baba’s Ashram in Vrindavan, we have started a movement in which we protect and care for cows regardless of their age or any illnesses they might have.
        <br />
        We are currently blessed with the opportunity of caring for over 500 cows and bulls and our numbers are increasing as we never refuse a cow or bull in need of shelter and care.
        <br />
        We treat Cow Mata with love and care and see great potential in utilizing all the magnificent things Cow Mata can produce and offer us apart from just giving milk, for example, we are exploring the possibility of making paper, tiles, bricks, medicine and natural gas from cow dung and urine.
      </p>
      <div className="flex flex-col md:flex-row mb-20 mt-10">
        <img
          src="https://kamdhenuseva.com/wp-content/uploads/2023/01/gai-tihar-300x197-1.jpg"
          className="w-full md:w-1/2"
          alt="Cow Puja"
        />
        <div className="mt-4 md:mt-0 md:ml-8 flex flex-col justify-center">
          <h1 className="text-2xl font-semibold text-black">Cow Puja</h1>
          <p className="mt-4 mb-4 text-justify">
            Our Pundits can perform Cow Puja for you either with you at the Ashram or on behalf of you if you are unable to attend. If this is the case, we can send you photographs or videos of your Puja. Your donations for Cow Puja will be used for purchasing Puja materials and as per Vedic rules, giving dakshina to the Pundits for performing the Puja. Please contact us for further information on info@kamdhenuseva.com
          </p>
          <Button btnText="Order Now" subText="Click to proceed" />
        </div>
      </div>
    </div>
      
    </div>
  )
}


export default AboutCowPuja
