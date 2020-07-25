import React from 'react';


function RewardReason() {
    return (
        <div className="rewardreason">
            <div className="container">
                <div className="reward">
                    <div className="reward__content">
                        <div className="reward__title">
                            <h2>Ưu đãi khách sạn độc quyền khi đặt vé máy bay qua Vntrip.vn</h2>
                        </div>
                        <div className="reward__text">
                            <p>Khách hàng mới có thể nhận được lên đến thêm 10% giảm giá cho đặt phòng khách sạn đầu tiên.</p>
                        </div>
                    </div>
                    <div className="reward__image">
                        <img alt="home" src={require("../assets/img/image_icon/imagehome.png")}></img>
                    </div>
                </div>
                <div className="reason">
                    <div className="reason__form">
                        <div className="reason__img">
                            <img alt="img1" src={require("../assets/img/image_icon/flight-ticket-icon.svg")}></img>
                        </div>
                        <h2 className="title">RẺ HƠN GIÁ RẺ NHẤT, NGẠI GÌ KHÔNG ĐẶT?</h2>
                        <p>
                            Ở đâu giá rẻ hơn,
                            <span className="orange">
                                Thông báo ngay với Vntrip.vn
                            </span>
                            để được mua giá rẻ hơn rẻ nhất
                            <a href="/" className="best__price"><i className="fas fa-angle-right"></i></a>
                        </p>
                    </div>
                    <div className="reason__form">
                        <div className="reason__img">
                            <img alt="img2" src={require("../assets/img/image_icon/flight-teket-card.svg")}></img>
                        </div>
                        <h2 className="title">THANH TOÁN LINH HOẠT & AN TOÀN</h2>
                        <p>Chấp nhận mọi hình thức thanh toán, không cần thẻ tín dụng. Bảo mật tuyệt đối thông tin cá nhân.</p>
                    </div>
                    <div className="reason__form">
                        <div className="reason__img">
                            <img alt="img3" src={require("../assets/img/image_icon/hotline.svg")}></img>
                        </div>
                        <h2 className="title">HỖ TRỢ 24/7</h2>
                        <p>
                            Gọi ngay 0963 266 688 kể cả 2h sáng để được hỗ trợ.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default RewardReason;