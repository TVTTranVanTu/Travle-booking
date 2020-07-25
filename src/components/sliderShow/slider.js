import React from 'react';
// import collection from "../../data/sliderImage";
// import SliderShow from "./sliderShow";
import FormSearch from './formSearch';
import SliderShow1 from './sliderShow1';
function Slider() {
    return (
        <div className="slider">
            {/* <SliderShow input={collection}
                timeout={`15000`}></SliderShow> */}
            <SliderShow1></SliderShow1>
            <div>
                <FormSearch></FormSearch>
            </div>
        </div>
    );
}

export default Slider;