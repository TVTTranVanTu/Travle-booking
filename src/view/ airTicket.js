import React from 'react';
import Slider from '../components/sliderShow/slider';
import RewardReason from '../components/rewardReason';
import PromotionTicket from '../components/Promotion_ticket';
import PromotionCombo from '../components/promotion_combo';
import PromotionTickitHot from '../components/promotionTickit_hot';
import Information from '../components/information';


function AirTicket() {
    return (
        <div className="airticket">
            <Slider active={false}></Slider>
            <RewardReason></RewardReason>
            <PromotionTicket></PromotionTicket>
            <PromotionCombo></PromotionCombo>
            <PromotionTickitHot></PromotionTickitHot>
            <Information></Information>
        </div>
    );
}

export default AirTicket;