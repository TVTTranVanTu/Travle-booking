import React, { useState, useEffect } from 'react';
import ListAchivements from "../data/listReward";

function Achievements() {
    const [active, setActive] = useState(0);
    const [transition, setTransition] = useState(2);

    const next = () => {
        parseInt(active) === parseInt((177) * (ListAchivements.length - 6)) ? setActive(0) : setActive(active + 177);
        parseInt(active) === parseInt((177) * (ListAchivements.length - 6)) ? setTransition(0) : setTransition(2);

    }
    const prev = () => {
        parseInt(active) === 0 ? setActive(ListAchivements.length * 177) : setActive(active - 177);
        parseInt(active) === 0 ? setTransition(2) : setTransition(0);

    }

    useEffect(() => {
        const interval = setInterval(() => {
            next()
        }, 10000);
        return () => clearInterval(interval);
    });

    let ListReward = ListAchivements;
    return (
        <div className="achievements">
            <div className="achievements__title">
                <h2 className="padding40">VNTRIP.VN - THÀNH TỰU &amp; GIẢI THƯỞNG</h2><span>&nbsp;</span>
            </div>
            <div className="container">
                <button className="buttonleft" onClick={() => prev}><i className="fas fa-angle-left"></i></button>
                <ul>
                    {
                        ListReward.map((list, index) => {
                            return (
                                <li className="achievement__item" key={index} style={{ left: `-${active}px`, transition: `all ${transition}s` }}>
                                    <div className="achievement__img">
                                        <div className={`sprite__logo ${list.name}`}></div>
                                    </div>
                                    <p className="title">{list.title}</p>
                                    <p className="about">{list.about}</p>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className="buttonright" onClick={() => next}><i className="fas fa-angle-right"></i></button>
            </div>
        </div>
    );
}

export default Achievements;