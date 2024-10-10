import React, { useRef } from "react";
import AboutDevraha from "../component/AboutDevraha";
import Slider from "../component/Slider";
import JoinCampaign from "../component/JoinCampaign";
import CowImgSlider from "../component/CowImgSlider";
import CowPuja from "../component/CowPuja";
import DonateButton from "../component/DonateNow";

function Home() {
  const bottomRef = useRef(null);

  return (
    <div className="bg-black/10" id="home-top">
      <Slider bottomRef={bottomRef} />
      <AboutDevraha />
      <JoinCampaign />
      <CowImgSlider bottomRef={bottomRef} />
      <CowPuja />
    </div>
  );
}

export default Home;
