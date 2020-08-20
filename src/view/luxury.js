import React from 'react';
import LuxuryReason from '../components/luxury/luxury_reason';
import LuxurySperialSlider from '../components/luxury/luxury-sperial-slider';
import LuxuryColection from '../components/luxury/luxury-colection';
import LuxuryGoto from '../components/luxury/luxyry_goto';


function Luxury() {
    return (
        <div className="luxury">
            <div className="luxury__top">
                <div className="slider">
                    <img alt="slider" src={require(`../assets/img/banner.png`)}></img>
                </div>
            </div>
            <div className="luxury__content">
                <div className="container">
                    <LuxuryReason></LuxuryReason>
                    <LuxurySperialSlider></LuxurySperialSlider>
                    <LuxuryColection></LuxuryColection>
                    <LuxuryGoto></LuxuryGoto>
                </div>
            </div>
        </div>
    );
}

export default Luxury;