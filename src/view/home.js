import React from 'react';

import Slider from '../components/sliderShow/slider';
import RewardReason from '../components/rewardReason';
import DestinationHot from '../components/destination_hot';
import DestinationInternation from '../components/destination_internation';
import Achievements from '../components/achievements';
import Newspapers from '../components/newspapers';


function Home() {
    return (
        <div className="home">
            <Slider></Slider>
            <RewardReason></RewardReason>
            <DestinationHot></DestinationHot>
            <DestinationInternation></DestinationInternation>
            <Achievements></Achievements>
            <Newspapers></Newspapers>
        </div>
    );
}

export default Home;
