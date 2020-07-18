import React from 'react';


function FormSearhPlane() {
    return (
        <div className="searchhotelplane">
            <div className="container">
                <form className="form__search">
                    <div className="flighthome__content">
                        <div className="gate__start">
                            <p>Điểm khởi hành</p>
                            <input type="text" plachoder="Điểm khởi hành"></input>
                        </div>
                        <div className="gate__end">
                            <p>Điểm đến</p>
                            <input type="text" plachoder="Điểm khởi hành"></input>

                        </div>
                        <div className="select__numberuse">
                            <p>Số hành khách</p>
                            <input type="text" plachoder="Điểm khởi hành"></input>

                        </div>
                        <div className="plane__start">
                            <p>Khởi hành</p>
                            <input type="text" plachoder="Điểm khởi hành"></input>

                        </div>
                        <div className="come__back">
                            <p>Trở về</p>
                            <input type="text" plachoder="Điểm khởi hành"></input>

                        </div>
                        <button className="search__submit" types="submit"><i className="fas fa-search"></i>Tìm kiếm</button>

                    </div>


                </form>
            </div>

        </div>
    );
}

export default FormSearhPlane;