import React from 'react';
import DesnitionHot from "../../data/listDestination";

function DestinationHot() {
    let listDensnitionhot = DesnitionHot;
    return (
        <div className="promotion destination__hot">
            <div className="container">
                <div className="destination__title">
                    <h2>ĐIỂM ĐẾN VIỆT NAM PHỔ BIẾN</h2>
                </div>
                <div className="destination-hot__content">
                    <ul>
                        {
                            listDensnitionhot.map((list, index) => {
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
                                                            <h3>{list.name}</h3>
                                                            <span>&nbsp;</span>
                                                        </div>
                                                        <p className="place-info place-info-head hidden-sm hidden-xs">
                                                            <i className="fa fa-search"></i>{list.number} khách sạn {list.name}</p>
                                                        <p className="place-info hidden-sm hidden-xs">
                                                            <i className="fa fa-search"></i>Cẩm nang du lịch {list.name}</p>
                                                        <p className="place-info hidden-sm hidden-xs">
                                                            <i className="fa fa-search"></i>Khuyến mại du lịch {list.name}</p>
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

export default DestinationHot;