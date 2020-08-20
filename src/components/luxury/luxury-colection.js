import React from 'react';
import Colection from "../../data/luxury_colection";

function LuxuryColection() {
    let listColection = Colection;
    return (
        <div className="luxyry__colection">
            <div className="content__title">
                Khám Phá / Bộ Sưu Tập
            </div>
            <div className="colection__content">
                <ul>
                    {
                        listColection.map((list, index) => {
                            return (
                                <li key={index} className={`item${list.id}`}>
                                    <a href="/" >
                                        <img alt={list.name} src={require(`../../assets/img/colection__luxyry/${list.picture}`)}></img>
                                        <div className="title">
                                            <span>{list.type}</span>
                                            <br />
                                            <span>{list.note}</span>
                                        </div>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default LuxuryColection;