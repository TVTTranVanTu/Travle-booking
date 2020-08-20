import React, { useState } from 'react';
import ListDealFlex from "../../data/list-dealFlex";

function Rightbar() {
    let listDealFlex = ListDealFlex;
    const [active, setActive] = useState(2)
    const [category, setCategory] = useState("bestseller")
    const handlechange1 = () => {
        setActive(1)
        setCategory("Highlights")
    }
    const handlechange2 = () => {
        setActive(2)
        setCategory("bestseller")
    }
    const handlechange3 = () => {
        setActive(3)
        setCategory("")
    }
    return (
        <div className="rightbar">
            <div className="hotel-deal-list-sort">
                <ul>
                    <li className={`deal-sort-item ${active === 1 ? "active" : ""}`} onClick={() => handlechange1()}><a href="#" >Nổi bật</a></li>
                    <li className={`deal-sort-item ${active === 2 ? "active" : ""}`} onClick={() => handlechange2()}> <a href="#" >Bán chạy</a></li>
                    <li className={`deal-sort-item ${active === 3 ? "active" : ""}`} onClick={() => handlechange3()}> <a href="#">Giá tốt</a></li>
                </ul>
            </div>
            <div className="deal-flex">
                {
                    listDealFlex.map((list, index) => {
                        if (list.Category === category) {
                            return (
                                <div className="deal-flex__item" key={index} style={{ paddingLeft: `${index % 2 === 0 ? "0" : "15px"}`, paddingRight: `${index % 2 === 0 ? "15px" : "0"}` }}>
                                    <a className="deal-item" href="/">
                                        <div className="deal-item__img">
                                            <img alt="" src={require(`../../assets/img/ticket_hotel/${list.picture}`)}></img>
                                        </div>
                                        <div className="deal-item__content">
                                            <div className="deal-item__title">
                                                <h2>{list.top}</h2>
                                            </div>
                                            <div className="deal-item__text">
                                                {list.text}
                                            </div>
                                            <div className="deal-item__combo">

                                                <span>Combo:&nbsp;</span>
                                                <span className="span-value">
                                                    {list.combo}
                                                </span>

                                            </div>
                                            <div className="deal-item__icon">
                                                <div className={`deal-item__icon__title ${list.include === "" && list.service === "" ? "hidden" : ""}`}>
                                                    <span>Bao gồm:</span>
                                                </div>
                                                <div className="deal-item__icon__fi">
                                                    <span>
                                                        {list.include}
                                                    </span>
                                                    <span>
                                                        {list.service}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="deal-item__price">
                                                <h5>{list.price}đ</h5>
                                            </div>


                                        </div>
                                    </a>
                                </div>
                            )
                        }

                    })
                }
            </div>
            <div className="select__deal__item">
                <ul className="pagination">
                    <li className="active">
                        <a href="/">
                            Trang 1
                        </a>
                    </li>
                    <li>
                        <a href="/">2</a>
                    </li>
                    <li className="next">
                        <a href="/">
                            <i className="fa fa-angle-right" ></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Rightbar;

