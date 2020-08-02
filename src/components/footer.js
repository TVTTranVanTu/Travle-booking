import React from 'react';
import ListHotel from "../data/list-hotel";

function Footer() {
    let listHotel = ListHotel;

    return (
        <div className="footer">
            <div className="footer__wraper">
                <div className="container">
                    <div className="footer__head">
                        <span>Khách sạn theo tỉnh thành</span>
                    </div>
                    <ul>
                        {
                            listHotel.map((hotel, index) => {
                                return (
                                    <li key={index}>
                                        <a href="/">
                                            {hotel.name}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="clearfix"></div>
                    <div className="about__vntrip">
                        <div className="content">
                            <ul>
                                <li><a href="/">Về Vntrip</a></li>
                                <li><a href="/">Hợp tác đại lý</a></li>
                                <li><a href="/">Liên hệ</a></li>
                                <li><a href="/">Điều khoản sử dụng</a></li>
                                <li><a href="/">Quy chế hoạt động</a></li>
                                <li><a href="/">Chính sách bảo mật</a></li>
                                <li><a href="/">Hợp tác khách sạn</a></li>
                                <li><a href="/">Blog du lịch</a></li>
                                <li><a href="/">Tuyển dụng</a></li>
                                <li><a href="/">Hoàn tiền thành viên</a></li>

                            </ul>
                        </div>
                        <div className="app">
                            <ul>
                                <li>
                                    <a href="/"><img alt="appstote" src={require("../assets/img/image_icon/appStore.png")}></img></a>
                                </li>
                                <li>
                                    <a href="/"><img alt="appstote" src={require("../assets/img/image_icon/googlePlay.png")}></img></a>
                                </li>
                            </ul>
                        </div>
                        <div className="address">
                            <ul>
                                <li>
                                    <p>
                                        <strong>Công ty TNHH VNTRIP OTA</strong>
                                    </p>
                                </li>
                                <li>
                                    <span>
                                        <strong>Tầng 2 Tòa nhà 17T4 Hapulico Complex</strong>
                                    </span>
                                </li>
                                <li>
                                    <span>(Đ/c cũ: Tầng 5 Tòa nhà 21T1 Hapulico Complex)</span>
                                </li>
                                <li>
                                    <span>Số 1 Nguyễn Huy Tưởng, Thanh Xuân, Hà Nội</span>
                                </li>
                                <li>
                                    <span>Số tài khoản: 0491000136688</span>
                                </li>
                                <li>
                                    <span>Ngân hàng: Vietcombank</span>
                                </li>
                                <li>
                                    <span>Chi nhánh Thăng Long</span>
                                </li>
                                <li>
                                    <span>Ngày cấp ĐKKD: 9/5/2016</span>
                                </li>
                                <li>
                                    <span>Email: cs@vntrip.vn</span>
                                </li>
                                <li>
                                    <span>Hotline:</span>
                                    <i className="green">0963 266 688</i>
                                </li>
                            </ul>
                        </div>
                        <div className="subrice">
                            <p className="subrice__title">
                                <strong>Du lịch thông minh! </strong>
                            Đăng ký nhận tin để lên kế<br />
                            hoạch cho kỳ nghỉ tới ngay từ bây giờ:
                        </p>
                            <div className="form__subrice">
                                <input className="form__control" type="text" placeholder="Nhập địa chie email ..."></input>
                                <button type="submit">Đăng ký</button>
                            </div>
                            <div className="footer__cn">
                                <a href="/">
                                    <img alt="bctblue" src={require("../assets/img/image_icon/logo_bocongthuong_blue.png")}></img>
                                </a>
                                <a href="/">
                                    <img alt="bctred" src={require("../assets/img/image_icon/logo_bocongthuong_red.png")}></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;











