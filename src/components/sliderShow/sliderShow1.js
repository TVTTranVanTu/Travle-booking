import React, { useState, useEffect } from 'react';
import collection from "../../data/sliderImage";


function SliderShow1() {
    let sliderArray = collection;
    const [active, setActive] = useState(0);
    const [dot, setDot] = useState(0);
    // const prev = () => {

    //     active === 0 ? setActive(-100 * (sliderArray.length - 1)) : setActive(active + 100)
    //     dot === 0 ? setDot(sliderArray.length - 1) : setDot(dot - 1);
    // }
    const next = () => {

        dot === (sliderArray.length - 1) ? setDot(0) : setDot(dot + 1);
        active === -100 * (sliderArray.length - 1) ? setActive(0) : setActive(active - 100)
    }
    const setNewActive = (index) => {

        console.log(index)
        setActive(-100 * index)
        setDot(index)

    }
    useEffect(() => {
        const interval = setInterval(() => {
            next()
        }, 15000);
        return () => clearInterval(interval);
    });
    return (

        <div className="slider1">
            {sliderArray.map((image, index) => {
                return (
                    <div key={index} className="slide1" style={{ transform: `translateX(${active}%)` }}>
                        <img className="image1" src={image.src} alt={image.caption} />

                    </div>
                )
            })}
            <div className="dotslider">
                {
                    sliderArray.map((image, index) => {
                        return (
                            <span
                                key={index}
                                className={
                                    `dot ${dot === index ? "active" : ""}`
                                }
                                onClick={() => setNewActive(index)}

                            >
                            </span>
                        )
                    })
                }
            </div>
            {/* <button className="buttonleft" onClick={prev}>left</button>
            <button className="buttonright" onClick={next}>right</button> */}
        </div >
    );
}

export default SliderShow1;