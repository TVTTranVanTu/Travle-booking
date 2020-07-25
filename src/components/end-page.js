import React from 'react';


function EndPage() {
    return (
        <div className="end__page">
            <div className="container">
                <div className="content__end">
                    <div className="content__left">
                        <span>
                            copyright &copy; by Trần Văn Tú
                        </span>
                    </div>
                    <div className="content__right">
                        <a href="/">
                            <i className="fab fa-facebook-square"></i>
                            <span>Facebook</span>
                        </a>
                        <a href="/">
                            <i className="fab fa-instagram"></i>
                            <span>instagram</span>
                        </a>
                        <a href="/">
                            <i className="fab fa-twitter-square"></i>
                            <span>instagram</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EndPage;