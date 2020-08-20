import React, { useState, useEffect } from 'react';
import LuxurySpecialOffers from "../../data/luxury-special-offers";

function LuxurySperialSlider() {
    let ListSpecialOffers = LuxurySpecialOffers;

    let element = (n) => {
        for (var i = 0; i < n; i++) {
            return (
                <i className="fas fa-star"></i>
            )

        }
    }

    const [active, setActive] = useState(0);
    const [transition, setTransition] = useState(2);

    const next = () => {
        parseInt(active) === parseInt((379.984) * (ListSpecialOffers.length - 3)) ? setActive(0) : setActive(active + 379.984);
        parseInt(active) === parseInt((379.984) * (ListSpecialOffers.length - 3)) ? setTransition(0) : setTransition(2);

    }
    useEffect(() => {
        const interval = setInterval(() => {
            next()
        }, 10000);
        return () => clearInterval(interval);
    });
    return (
        <div className="luxury-sperial__slider">
            <div className="content__title">Ưu Đãi Đặc Biệt - Tặng Đêm Miễn Phí</div>
            <div className="slick-slider">
                <button type="button" className="slick-arrow slick-prev"> Previous</button>
                <div className="slick-list">
                    {
                        ListSpecialOffers.map((list, index) => {

                            return (
                                <div className="special-slide__item" key={index} style={{ left: `-${active}px`, transition: `all ${transition}s` }}>
                                    <div className="special-slide__contents">
                                        <a>
                                            <img src={require(`../../assets/img/luxury-special-offers/${list.picture}`)}></img>
                                            <div className="special-slide__contents__text">
                                                <div className="special-slide__contents__title">
                                                    <h2>{list.title}</h2>
                                                    <div className="hotel-rating">
                                                        <div className="rates" value={list.value}>
                                                            {element(5)}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="special-slide__contents__discount">
                                                    <p className="discount">%</p>
                                                    <div>
                                                        <p className="line-through">NaN Đ</p>
                                                        <p className="price">{list.price} Đ</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            )
                        })

                    }
                </div>
                <button type="button" className="slick-arrow slick-next"> Next</button>
            </div>
        </div>
    );
}

export default LuxurySperialSlider;