import React from 'react';
import FormSearch from './formSearch';
import SliderShow from './sliderShow';
function Slider(props) {
    console.log(props.active)
    return (
        <div className="slider">

            <SliderShow></SliderShow>
            <div>
                <FormSearch active={props.active}></FormSearch>
            </div>
        </div>
    );
}

export default Slider;