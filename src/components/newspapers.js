import React from 'react';


function Newspapers() {
    return (
        <div className="newspapers">
            <div className="container">
                <div className="newspaper__title">
                    <h2>TRUYỀN THÔNG NÓI VỀ CHÚNG TÔI</h2>
                </div>
                <div className="articles">
                    <div className="articles__item">
                        <a href="/">
                            <div className="sprite__logo item1"></div>
                        </a>
                    </div>
                    <div className="articles__item">
                        <a href="/">
                            <div className="sprite__logo item2"></div>
                        </a>
                    </div>
                    <div className="articles__item">
                        <a href="/">
                            <div className="sprite__logo item3"></div>
                        </a>
                    </div>
                    <div className="articles__item">
                        <a href="/">
                            <div className="sprite__logo item4"></div>
                        </a>
                    </div>
                    <div className="articles__item">
                        <a href="/">
                            <div className="sprite__logo item5"></div>
                        </a>
                    </div>
                    <div className="articles__item">
                        <a href="/">
                            <div className="sprite__logo item6"></div>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Newspapers;