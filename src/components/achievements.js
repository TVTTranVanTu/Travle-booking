import React from 'react';
import ListAchivements from "../data/listReward";

function Achievements() {
    let ListReward = ListAchivements;
    return (
        <div className="achievements">
            <div className="achievements__title">
                <h2 className="padding40">VNTRIP.VN - THÀNH TỰU &amp; GIẢI THƯỞNG</h2><span>&nbsp;</span>
            </div>
            <div className="container">
                <button className="buttonleft"><i className="fas fa-angle-left"></i></button>
                <ul>
                    {
                        ListReward.map((list, index) => {
                            return (
                                <li className="achievement__item" key={index}>
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
                <button className="buttonright"><i className="fas fa-angle-right"></i></button>
            </div>
        </div>
    );
}

export default Achievements;