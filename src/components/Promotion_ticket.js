import React from 'react';
import ListPromotionTicket from "../data/listPromotion_ticket";

function PromotionTicket() {
    return (
        <div className="promotion__ticketHot">
            <div className="promotion__ticketTitle">
                <h2>Khuyến mãi Hot trong tháng</h2>
            </div>
            <div className="container">
                <div className="promotion__ticketContent">
                    <ul>
                        {
                            ListPromotionTicket.map((list, index) => {
                                return (
                                    <li key={index} className={`item${list.id}`}>
                                        <a href="/" >
                                            <img alt={list.name} src={require(`../assets/img/aril_ticket/${list.picture}`)}></img>
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

export default PromotionTicket;