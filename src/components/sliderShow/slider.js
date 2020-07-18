import React from 'react';
import collection from "../../data/sliderImage";
import SliderShow from "./sliderShow";
import FormSearch from './formSearch';
import FormSearhHotel from './formSearch/formSearchHotel';
import FormSearchPlane from "./formSearch/formSearchPlane";
function Slider() {
    return (
        <div className="slider">
            <SliderShow input={collection}
                timeout={`15000`}></SliderShow>
            <div>
                <FormSearch></FormSearch>
                {/* <FormSearhHotel></FormSearhHotel> */}
                <FormSearchPlane></FormSearchPlane>
            </div>
        </div>
    );
}

export default Slider;