import React from 'react';
import ListLuxuryGoto from "../../data/listLuxuryGoto";

function LuxuryGoto() {
    let listLuxuryGoto = ListLuxuryGoto;
    return (
        <div className="luxury__goto">
            <div className="content__title">
                Điểm Đến
            </div>
            <div className="luxyry__goto-content">
                <button></button>
                <div className="slick-list">
                    <div className="slick-track">
                        {
                            listLuxuryGoto.map((list, index) => {
                                return (
                                    <div className="slick-slide" key={index} style={{ left: "0px" }}>
                                        <div className="slide-item">
                                            <img alt="" src={require(`../../assets/img/luxuryGoto/${list.picture}`)}></img>
                                            <div className="slide-item__title">
                                                <p>{list.name}</p>
                                            </div>
                                            <a href="/" className="face-mask"></a>

                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LuxuryGoto;