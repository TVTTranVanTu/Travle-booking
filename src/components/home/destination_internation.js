import React from 'react';

import DesnitionInternation from "../../data/listInternation";

function DestinationInternation() {
    let listDensnitionInter = DesnitionInternation;

    return (
        <div className="destination__inter">
            <div className="destination-inter__title">
                <h2>ĐIỂM ĐẾN QUẤC TẾ PHỔ BIẾN</h2>
            </div>
            <div className="container">
                <div className="destination-inter__content">
                    <ul>
                        {
                            listDensnitionInter.map((list, index) => {
                                return (
                                    <li key={index} className={`item${list.id}`}>
                                        <a href="/" >
                                            <img alt={list.name} src={require(`../../assets/img/destinationhot/${list.picture}`)}></img>
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

export default DestinationInternation;