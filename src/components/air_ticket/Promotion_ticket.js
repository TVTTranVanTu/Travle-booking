import React from 'react';
import ListPromotionTicket from "../../data/listPromotion_ticket";

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
                                        <div className="ticket__item">
                                            <img alt={list.name} src={require(`../../assets/img/aril_ticket/${list.picture}`)}></img>
                                            <div className="content-item__text">
                                                <div className="item-name">
                                                    <a href="/" className="name">{list.name}</a>
                                                    <p className="code">{list.code}</p>
                                                </div>
                                                <div className="item-price">
                                                    <p className="text">Chỉ từ</p>
                                                    <p className="number">{list.price}</p>
                                                </div>
                                            </div>
                                            <div className="content-item__bg"></div>
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

export default PromotionTicket;