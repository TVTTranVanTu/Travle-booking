import React from 'react';
import Slider from '../components/sliderShow/slider';
import RewardReason from '../components/rewardReason';
import PromotionTicket from '../components/air_ticket/Promotion_ticket';
import PromotionCombo from '../components/air_ticket/promotion_combo';
import PromotionTickitHot from '../components/air_ticket/promotionTickit_hot';
import Information from '../components/air_ticket/information';


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