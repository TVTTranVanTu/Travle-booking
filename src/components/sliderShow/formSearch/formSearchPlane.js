import React from 'react';


function FormSearhPlane() {
    return (
        <div className="searchhotelplane">
            <div className="container">
                <form className="form__search">
                    <div className="flighthome__content">
                        <div className="gate__start">
                            <p>Điểm khởi hành</p>
                            <div className="input__wrapper">
                                <input type="text" plachoder="Điểm khởi hành"></input>
                                <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="flight-placeholder">
                                    <path d="M1.49984 16H20.4998V18H1.49984V16ZM21.0698 6.64C20.8598 5.84 20.0298 5.36 19.2298 5.58L13.9198 7L7.01984 0.57L5.08984 1.08L9.22984 8.25L4.25984 9.58L2.28984 8.04L0.839844 8.43L2.65984 11.59L3.42984 12.92L5.02984 12.49L10.3398 11.07L14.6898 9.91L19.9998 8.49C20.8098 8.26 21.2798 7.44 21.0698 6.64Z" fill="#BFBFBF"></path>
                                </svg>
                                <div className="fc__icon hidden-xs">
                                    <a href="" className="change-flight" id="switch_depature_return">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.2481 7.25H0.374682C0.305932 7.25 0.249682 7.30625 0.249682 7.375V8.3125C0.249682 8.38125 0.305932 8.4375 0.374682 8.4375H9.83093L7.57624 11.2969C7.51218 11.3781 7.56999 11.5 7.67468 11.5H8.80749C8.88406 11.5 8.95593 11.4656 9.00437 11.4047L11.6419 8.05937C11.8997 7.73125 11.6669 7.25 11.2481 7.25ZM11.6247 3.5625H2.16843L4.42312 0.703125C4.48718 0.621875 4.42937 0.5 4.32468 0.5H3.19187C3.11531 0.5 3.04343 0.534375 2.99499 0.595313L0.357495 3.94063C0.0996824 4.26875 0.332495 4.75 0.749682 4.75H11.6247C11.6934 4.75 11.7497 4.69375 11.7497 4.625V3.6875C11.7497 3.61875 11.6934 3.5625 11.6247 3.5625Z" fill="#1890FF"></path>
                                        </svg></a>
                                </div>
                            </div>
                        </div>
                        <div className="gate__end">
                            <p>Điểm đến</p>
                            <div className="input__wrapper">
                                <input type="text" plachoder="Điểm đến"></input>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="18px" height="20px" className="flight-placeholder">
                                    <path d="M193.617,303.697l117.086,31.394l143.225,38.4c21.558,5.794,43.655-7.006,49.448-28.564     c5.794-21.558-7.006-43.655-28.564-49.448l-143.225-38.4l-74.24-243.065L205.204,0v223.124l-133.794-35.84l-25.061-62.518     L7.276,114.257v139.453l43.25,11.587L193.617,303.697z" data-original="#000000" className="active-path" data-old_color="#000000" fill="#BFBFBF"></path>
                                    <rect y="458.105" width="512" height="53.895" data-original="#000000" className="active-path" data-old_color="#000000" fill="#BFBFBF"></rect>
                                </svg>
                            </div>
                        </div>
                        <div className="select__numberuse">
                            <p>Số hành khách</p>
                            <div className="input__wrapper">
                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="flight-placeholder">
                                    <path d="M17.1216 15.8969C16.6795 14.8496 16.0379 13.8984 15.2326 13.0961C14.4297 12.2915 13.4786 11.65 12.4318 11.207C12.4224 11.2023 12.413 11.2 12.4037 11.1953C13.8638 10.1406 14.813 8.42266 14.813 6.48438C14.813 3.27344 12.2115 0.671875 9.00055 0.671875C5.78961 0.671875 3.18805 3.27344 3.18805 6.48438C3.18805 8.42266 4.13727 10.1406 5.59742 11.1977C5.58805 11.2023 5.57867 11.2047 5.5693 11.2094C4.5193 11.6523 3.57711 12.2875 2.76852 13.0984C1.96393 13.9013 1.32243 14.8524 0.879453 15.8992C0.444271 16.924 0.209567 18.0228 0.188047 19.1359C0.187421 19.161 0.191809 19.1858 0.200951 19.2091C0.210093 19.2324 0.223805 19.2537 0.241279 19.2716C0.258753 19.2895 0.279635 19.3037 0.302694 19.3134C0.325754 19.3231 0.350525 19.3281 0.375547 19.3281H1.7818C1.88492 19.3281 1.96695 19.2461 1.9693 19.1453C2.01617 17.3359 2.74273 15.6414 4.02711 14.357C5.35602 13.0281 7.12086 12.2969 9.00055 12.2969C10.8802 12.2969 12.6451 13.0281 13.974 14.357C15.2584 15.6414 15.9849 17.3359 16.0318 19.1453C16.0341 19.2484 16.1162 19.3281 16.2193 19.3281H17.6255C17.6506 19.3281 17.6753 19.3231 17.6984 19.3134C17.7215 19.3037 17.7423 19.2895 17.7598 19.2716C17.7773 19.2537 17.791 19.2324 17.8001 19.2091C17.8093 19.1858 17.8137 19.161 17.813 19.1359C17.7896 18.0156 17.5576 16.9258 17.1216 15.8969ZM9.00055 10.5156C7.92477 10.5156 6.91227 10.0961 6.15055 9.33438C5.38883 8.57266 4.9693 7.56016 4.9693 6.48438C4.9693 5.40859 5.38883 4.39609 6.15055 3.63437C6.91227 2.87266 7.92477 2.45312 9.00055 2.45312C10.0763 2.45312 11.0888 2.87266 11.8505 3.63437C12.6123 4.39609 13.0318 5.40859 13.0318 6.48438C13.0318 7.56016 12.6123 8.57266 11.8505 9.33438C11.0888 10.0961 10.0763 10.5156 9.00055 10.5156Z" fill="#BFBFBF"></path>
                                </svg>
                                <input type="text" plachoder="1 người lớn"></input>
                            </div>
                        </div>
                        <div className="plane__start">
                            <p>Khởi hành</p>
                            <div className="input__wrapper">
                                <img alt="flight" src={require("../../../assets/svg/calct-flight-input.svg")}></img>
                                <input type="text" plachoder="20 Tháng 8 2020"></input>
                            </div>
                        </div>
                        <div className="come__back">
                            <div className="come__back-title">Quay về
                                <label className="control__toggle">
                                    <input className="needsclick" type="checkbox" id="toggle"></input>
                                    <div className="change"></div>
                                </label>
                            </div>
                            <div className="input__wrapper">
                                <img alt="flight" src={require("../../../assets/svg/calct-flight-input.svg")}></img>
                                <input type="text" plachoder="20 Tháng 8 2020"></input>
                            </div>
                        </div>
                        <button className="search__submit" types="submit"><i className="fas fa-search"></i>Tìm kiếm</button>

                    </div>


                </form>
            </div>

        </div>
    );
}

export default FormSearhPlane;