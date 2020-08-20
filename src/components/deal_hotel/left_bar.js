import React, { useState } from 'react';
import ListFilterDeal from "../../data/list_filter-deal";

function LeftBar() {
    let ListFilter = ListFilterDeal;
    const [active, setActive] = useState(false);


    const handlechange = () => {
        setActive(!active);
    }
    return (
        <div className="left__bar">
            <div className="deal-list__sideBar">
                <div className="sideBar">
                    {
                        ListFilter.map((list, index) => {
                            let ListContent = list.content;

                            return (
                                <div className="sideBar__item" key={index}>
                                    <h2>{list.title}</h2>
                                    <input className={`des-search form-control ${list.id === 3 ? "" : "hidden"}`} type="text"></input>
                                    <ul className={`sidebar__item_filter-list item${index} `} style={{ height: `${active === true && list.id === index + 1 ? `auto` : `155px`}` }}>
                                        {
                                            ListContent.map((list, index) => {

                                                return (
                                                    <li key={index}>
                                                        <label className="check-group" >
                                                            <input className="filter-deal filter-category" type="checkbox" />
                                                            {list.name}
                                                        </label>
                                                    </li>
                                                )


                                            })
                                        }


                                    </ul>
                                    <a href="#" className={`sidebar__item__show ${ListContent.length > 6 ? "" : "hidden"}`} onClick={() => handlechange()}>Hiển thị tất cả {ListContent.length} danh mục</a>
                                </div>

                            )
                        })
                    }

                    <div className="sideBar__item">
                        <h2>Xếp hạng khách sạn</h2>
                        <ul className="sidebar__item_filter-list">
                            <li>
                                <label className="check-group" >
                                    <input className="filter-deal filter-category" type="checkbox" />
                                    <div className="rating">
                                        <div className="rating-star"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i>
                                        </div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <label className="check-group" >
                                    <input className="filter-deal filter-category" type="checkbox" />
                                    <div className="rating">
                                        <div className="rating-star"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <label className="check-group" >

                                    <input className="filter-deal filter-category" type="checkbox" />
                                    <div className="rating">
                                        <div className="rating-star"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <label className="check-group" >
                                    <input className="filter-deal filter-category" type="checkbox" />
                                    <div className="rating">
                                        <div className="rating-star"><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <label className="check-group" >
                                    <input className="filter-deal filter-category" type="checkbox" />
                                    <div className="rating">
                                        <div className="rating-star"><i className="fa fa-star"></i></div>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftBar;