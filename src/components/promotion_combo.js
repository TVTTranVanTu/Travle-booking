import React, { useState, useEffect } from 'react';
import ListCombo from "../data/listCombo";

function PromotionCombo() {
    const [active, setActive] = useState(0);
    const [transition, setTransition] = useState(2);

    const next = () => {
        parseInt(active) === parseInt((272.61 + 15) * (ListCombo.length - 4)) ? setActive(0) : setActive(active + 272.61 + 15);
        parseInt(active) === parseInt((272.61 + 15) * (ListCombo.length - 4)) ? setTransition(0) : setTransition(2);

    }
    useEffect(() => {
        const interval = setInterval(() => {
            next()
        }, 10000);
        return () => clearInterval(interval);
    });

    return (
        <div className="promotion__combo">
            <div className="promotion__comboTitle">
                <h2 className="padding40">Top combo khuyến mãi: Vé máy bay  &amp; khách sạn</h2><span>&nbsp;</span>
            </div>
            <div className="container">
                <ul>
                    {
                        ListCombo.map((list, index) => {
                            return (
                                <li key={index} className="promotion__comboItem" style={{ left: `-${active}px`, transition: `all ${transition}s` }}>
                                    <div className="promotion__comboImage">
                                        <img alt={list.name} src={require(`../assets/img/ticket_hotel/${list.picture}`)}></img>
                                    </div>
                                    <div className="promotion__comboContent">
                                        <div className="text__top">
                                            <a href="/">{list.top}</a>
                                        </div>
                                        <div className="text__middle">
                                            <span>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12.2001 6.93329C12.4001 6.39996 12.5335 5.79996 12.5335 5.19996C12.5335 2.66663 10.5335 0.666626 8.00013 0.666626C5.4668 0.666626 3.4668 2.66663 3.4668 5.19996C3.4668 5.79996 3.60013 6.39996 3.80013 6.93329C3.8668 7.13329 3.93346 7.26663 4.0668 7.46663L8.00013 15.3333L11.9335 7.46663C12.0001 7.26663 12.1335 7.13329 12.2001 6.93329Z" stroke="#BFBFBF" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M9 5.42857C9 5.71429 8.71429 6 8.42857 6H7.57143C7.28571 6 7 5.71429 7 5.42857V4.57143C7 4.28571 7.28571 4 7.57143 4H8.42857C8.71429 4 9 4.28571 9 4.57143V5.42857Z" stroke="#BFBFBF" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                                {list.address}
                                            </span>
                                            <span className="text-lowercase">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="#BFBFBF" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M8 8V5.5" stroke="#BFBFBF" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    <path d="M8 8L11.1247 11.1253" stroke="#BFBFBF" strokeLinecap="round" strokeLinejoin="round"></path>
                                                </svg>
                                                <strong className="black">{list.middle}</strong>&nbsp;Người mua
                                                </span>
                                        </div>
                                        <div className="text__bottom">
                                            <p>Chỉ từ</p>
                                            <span>{list.price} &nbsp;đ</span>
                                        </div>
                                    </div>

                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default PromotionCombo;