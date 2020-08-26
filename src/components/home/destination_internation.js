import React from 'react';

import DesnitionInternation from "../../data/listInternation";

function DestinationInternation() {
    let listDensnitionInter = DesnitionInternation;

    return (
        <div className="promotion destination__inter">
            <div className="container">
                <div className="destination__title">
                    <h2>ĐIỂM ĐẾN QUẤC TẾ PHỔ BIẾN</h2>
                </div>
                <div className="destination-inter__content">
                    <ul>
                        {
                            listDensnitionInter.map((list, index) => {
                                return (
                                    <li key={index} className={`item${list.id}`}>
                                        <div className="hot-place-panel">
                                            <a href="/" >
                                                <img alt={list.name} src={require(`../../assets/img/destinationhot/${list.picture}`)}></img>
                                            </a>
                                            <div className="place-overlay">
                                                <div className="place-content">
                                                    <div className="middle">
                                                        <div className="place-name">
                                                            <h3>{list.name}</h3><span>&nbsp;</span>
                                                        </div>
                                                        <p className="place-info place-info-head"><i className="fa fa-search"></i>{list.number} khách sạn {list.name} </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default DestinationInternation;