import React from 'react';


function Register() {
    return (
        <div className="register__form">
            <div className="register__title">
                Đăng Ký
            </div>
            <div className="register__content">
                <div className="accout__form">
                    <p>Đăng ký mới tài khoản VNTRIP:</p>
                    <div className="form-group-register">
                        <input type="email" placeholder="Tài khoản, email..." className="form-control" id="register-email" />
                    </div>
                    <div className="form-group-register">
                        <input type="password" placeholder="Mật khẩu" className="form-control" id="register-password" aria-autocomplete="list" />
                    </div>
                    <div className="form-group-register">
                        <input type="password" placeholder="Nhập lại mật khẩu" className="form-control" id="register-re-password" />
                    </div>
                    <button type="button" id="btn-register-header" className="btn btn-primary uppercase button register-button">Đăng ký</button>
                </div>
                <div className="accout__footer">
                    <p>
                        Đã có tài khoản ? <a href="/">Đăng Nhập</a>
                    </p>
                    <p className="tern">
                        Qua việc đăng ký tài khoản VNTRIP, bạn đồng ý hoàn toàn với các
                    <a href="/">Điều khoản, Điều kiện</a>
                    &nbsp;
                    <a href="/">Chính sách bảo mật</a>
                    &nbsp;
                    của VNTRIP
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;