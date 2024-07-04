
import React from 'react'
import AboutDevraha from '../component/AboutDevraha'
import Slider from '../component/Slider'
import JoinCampaign from '../component/JoinCampaign'
import CowImgSlider from '../component/CowImgSlider'
import CowPuja from '../component/CowPuja'

function Home() {
  return (
    <div>
        <Slider/>
        <AboutDevraha/>
        <JoinCampaign/>
        <CowImgSlider/>
        <CowPuja/>
    </div>
  )  

}



export default Home
