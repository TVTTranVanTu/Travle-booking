import React from 'react';


function Login() {
    return (
        <div className="login__form">
            <div className="login__title">
                Đăng Ký
        </div>
            <div className="login__content">
                <div className="accout__form">
                    <p>Bạn có thể sử dụng tài khoản:</p>
                    <div className="login-facebook button">
                        <i className="fab fa-facebook-f"></i>
                        <span>Facebook</span>
                    </div>
                    <div className="login-google button">
                        <i className="fab fa-google"></i>
                        <span>Google</span>
                    </div>
                    <p>hoặc đăng nhập sử dụng tài khoản VNTRIP:</p>
                    <div className="form-group-login">
                        <input type="email" placeholder="Tài khoản, email..." className="form-control" id="login-email" />
                    </div>
                    <div className="form-group-login">
                        <input type="password" placeholder="Mật khẩu" className="form-control" id="login-password" aria-autocomplete="list" />
                    </div>
                    <div className="form-password">
                        <div className="save-pass">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" className="form-check" value="" />Lưu mật khẩu
                                </label>
                            </div>
                        </div><a className="forget-pass a-click" data-id="box-3">Quên mật khẩu?</a>
                    </div>
                    <button type="button" id="btn-login-header" className="btn btn-primary uppercase button login-button">Đăng ký</button>

                </div>
                <div className="accout__footer">
                    <p>
                        Chưa có tài khoản ? <a href="/">Đăng ký</a>


                    </p>
                    <p>
                        Bạn là khách hàng doanh nghiệp?
                        &nbsp;

                <a href="/">Đăng nhập tại đây</a>
                &nbsp;
                </p>
                </div>
            </div>
        </div>
    );
}

export default Login;