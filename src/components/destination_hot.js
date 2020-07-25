import React from 'react';
import DesnitionHot from "../data/listDestination";

function DestinationHot() {
    let listDensnitionhot = DesnitionHot;
    return (
        <div className="destination__hot">
            <div className="destination-hot__title">
                <h2>ĐIỂM ĐẾN VIỆT NAM PHỔ BIẾN</h2>
            </div>
            <div className="container">
                <div className="destination-hot__content">
                    <ul>
                        {
                            listDensnitionhot.map((list, index) => {
                                return (
                                    <li key={index} className={`item${list.id}`}>
                                        <a href="/" >
                                            <img alt={list.name} src={require(`../assets/img/destinationhot/${list.picture}`)}></img>
                                        </a>
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