import React, { useRef } from "react";
import AboutDevraha from "../component/AboutDevraha";
import Slider from "../component/Slider";
import JoinCampaign from "../component/JoinCampaign";
import CowImgSlider from "../component/CowImgSlider";
import CowPuja from "../component/CowPuja";

function Home() {
  const bottomRef = useRef(null);
  return (
    <div>
      <Slider bottomRef={bottomRef} />
      <AboutDevraha />
      <JoinCampaign />
      <CowImgSlider bottomRef={bottomRef} />
      <CowPuja />
    </div>
  );
}

export default Home;
