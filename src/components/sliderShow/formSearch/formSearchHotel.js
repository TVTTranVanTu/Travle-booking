import React from 'react';



function FormSearhHotel() {
    return (
        <div className="searchhotelplane">
            <div className="container">
                <form className="form__search">
                    <div className="formsearch__content">
                        <div className="search">
                            <p>Địa điểm hoặc tên khách sạn</p>
                            <input type="text" className="input__search" placeholder="Nhập điểm đến , khách sạn"></input>
                        </div>
                        <div className="check__in">
                            <p>Nhận phòng</p>
                            <img alt="flight" src={require("../../../assets/svg/calct-flight-input.svg")}></img>
                            <input type="text" className="input__time" placeholder=""></input>
                        </div>
                        <div className="check__out">
                            <p>Trả phòng</p>
                            <img alt="flight" src={require("../../../assets/svg/calct-flight-input.svg")}></img>
                            <input type="text" className="input__time" placeholder=""></input>
                        </div>
                        <button className="search__submit" types="submit"><i className="fas fa-search"></i>Tìm kiếm</button>
                    </div>

                </form>
            </div>

        </div>
    );
}

export default FormSearhHotel;