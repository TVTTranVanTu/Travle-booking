import React from 'react';
import ListExperience from "../../data/lisstExperience";

function PromotionTickitHot() {
    return (
        <div className="promotion-hot__ticket">
            <div className="container">
                <div className="promotion-hot combo-flight">
                    <div className="promotion-hot__title">
                        <h1>Vé máy bay giá rẻ</h1>
                        <p>Giá vé 1 chiều trung bình cho một người lớn, đã bao gồm thuế và phí. Lưu ý giá vé liên tục thay đổi</p>
                    </div>
                    <div className="promotion-flight__content">

                    </div>
                </div>
                <div className="promotion-hot">
                    <div className="promotion-hot__title">
                        <h1>Kinh nghiệm đặt vé máy bay</h1>
                    </div>
                    <div className="promotion-hot__content">
                        {
                            ListExperience.map((list, index) => {
                                return (
                                    <div className="promotion-hot__item" key={index}>
                                        <div className="promotion-hot__content__image">
                                            <img src={require(`../../assets/img/list_imageExp/${list.picture}`)} alt={list.name}></img>
                                        </div>
                                        <div className="promotion-hot__contents__text">
                                            <div className="text-top">
                                                <a href="/" >{list.name}</a>
                                            </div>
                                            <div className="text-mid">
                                                <span>
                                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <g clipPath="url(#clip0)">
                                                            <path d="M4.99984 7H4.33317C4.15636 7 3.98679 7.07024 3.86177 7.19526C3.73674 7.32029 3.6665 7.48986 3.6665 7.66667C3.6665 7.84348 3.73674 8.01305 3.86177 8.13807C3.98679 8.2631 4.15636 8.33333 4.33317 8.33333H4.99984C5.17665 8.33333 5.34622 8.2631 5.47124 8.13807C5.59627 8.01305 5.6665 7.84348 5.6665 7.66667C5.6665 7.48986 5.59627 7.32029 5.47124 7.19526C5.34622 7.07024 5.17665 7 4.99984 7Z" fill="#BFBFBF"></path>
                                                            <path d="M8.33333 7H7.66667C7.48986 7 7.32029 7.07024 7.19526 7.19526C7.07024 7.32029 7 7.48986 7 7.66667C7 7.84348 7.07024 8.01305 7.19526 8.13807C7.32029 8.2631 7.48986 8.33333 7.66667 8.33333H8.33333C8.51014 8.33333 8.67971 8.2631 8.80474 8.13807C8.92976 8.01305 9 7.84348 9 7.66667C9 7.48986 8.92976 7.32029 8.80474 7.19526C8.67971 7.07024 8.51014 7 8.33333 7Z" fill="#BFBFBF"></path>
                                                            <path d="M11.6668 7H11.0002C10.8234 7 10.6538 7.07024 10.5288 7.19526C10.4037 7.32029 10.3335 7.48986 10.3335 7.66667C10.3335 7.84348 10.4037 8.01305 10.5288 8.13807C10.6538 8.2631 10.8234 8.33333 11.0002 8.33333H11.6668C11.8436 8.33333 12.0132 8.2631 12.1382 8.13807C12.2633 8.01305 12.3335 7.84348 12.3335 7.66667C12.3335 7.48986 12.2633 7.32029 12.1382 7.19526C12.0132 7.07024 11.8436 7 11.6668 7Z" fill="#BFBFBF"></path>
                                                            <path d="M4.99984 9.66675H4.33317C4.15636 9.66675 3.98679 9.73699 3.86177 9.86201C3.73674 9.98703 3.6665 10.1566 3.6665 10.3334C3.6665 10.5102 3.73674 10.6798 3.86177 10.8048C3.98679 10.9298 4.15636 11.0001 4.33317 11.0001H4.99984C5.17665 11.0001 5.34622 10.9298 5.47124 10.8048C5.59627 10.6798 5.6665 10.5102 5.6665 10.3334C5.6665 10.1566 5.59627 9.98703 5.47124 9.86201C5.34622 9.73699 5.17665 9.66675 4.99984 9.66675Z" fill="#BFBFBF"></path>
                                                            <path d="M8.33333 9.66675H7.66667C7.48986 9.66675 7.32029 9.73699 7.19526 9.86201C7.07024 9.98703 7 10.1566 7 10.3334C7 10.5102 7.07024 10.6798 7.19526 10.8048C7.32029 10.9298 7.48986 11.0001 7.66667 11.0001H8.33333C8.51014 11.0001 8.67971 10.9298 8.80474 10.8048C8.92976 10.6798 9 10.5102 9 10.3334C9 10.1566 8.92976 9.98703 8.80474 9.86201C8.67971 9.73699 8.51014 9.66675 8.33333 9.66675Z" fill="#BFBFBF"></path>
                                                            <path d="M11.6668 9.66675H11.0002C10.8234 9.66675 10.6538 9.73699 10.5288 9.86201C10.4037 9.98703 10.3335 10.1566 10.3335 10.3334C10.3335 10.5102 10.4037 10.6798 10.5288 10.8048C10.6538 10.9298 10.8234 11.0001 11.0002 11.0001H11.6668C11.8436 11.0001 12.0132 10.9298 12.1382 10.8048C12.2633 10.6798 12.3335 10.5102 12.3335 10.3334C12.3335 10.1566 12.2633 9.98703 12.1382 9.86201C12.0132 9.73699 11.8436 9.66675 11.6668 9.66675Z" fill="#BFBFBF"></path>
                                                            <path d="M4.99984 12.3333H4.33317C4.15636 12.3333 3.98679 12.4035 3.86177 12.5285C3.73674 12.6535 3.6665 12.8231 3.6665 12.9999C3.6665 13.1767 3.73674 13.3463 3.86177 13.4713C3.98679 13.5963 4.15636 13.6666 4.33317 13.6666H4.99984C5.17665 13.6666 5.34622 13.5963 5.47124 13.4713C5.59627 13.3463 5.6665 13.1767 5.6665 12.9999C5.6665 12.8231 5.59627 12.6535 5.47124 12.5285C5.34622 12.4035 5.17665 12.3333 4.99984 12.3333Z" fill="#BFBFBF"></path>
                                                            <path d="M8.33333 12.3333H7.66667C7.48986 12.3333 7.32029 12.4035 7.19526 12.5285C7.07024 12.6535 7 12.8231 7 12.9999C7 13.1767 7.07024 13.3463 7.19526 13.4713C7.32029 13.5963 7.48986 13.6666 7.66667 13.6666H8.33333C8.51014 13.6666 8.67971 13.5963 8.80474 13.4713C8.92976 13.3463 9 13.1767 9 12.9999C9 12.8231 8.92976 12.6535 8.80474 12.5285C8.67971 12.4035 8.51014 12.3333 8.33333 12.3333Z" fill="#BFBFBF"></path>
                                                            <path d="M11.6668 12.3333H11.0002C10.8234 12.3333 10.6538 12.4035 10.5288 12.5285C10.4037 12.6535 10.3335 12.8231 10.3335 12.9999C10.3335 13.1767 10.4037 13.3463 10.5288 13.4713C10.6538 13.5963 10.8234 13.6666 11.0002 13.6666H11.6668C11.8436 13.6666 12.0132 13.5963 12.1382 13.4713C12.2633 13.3463 12.3335 13.1767 12.3335 12.9999C12.3335 12.8231 12.2633 12.6535 12.1382 12.5285C12.0132 12.4035 11.8436 12.3333 11.6668 12.3333Z" fill="#BFBFBF"></path>
                                                            <path d="M14.3335 2H12.5002C12.456 2 12.4136 1.98244 12.3823 1.95118C12.3511 1.91993 12.3335 1.87754 12.3335 1.83333V0.666667C12.3335 0.489856 12.2633 0.320286 12.1382 0.195262C12.0132 0.0702379 11.8436 0 11.6668 0C11.49 0 11.3204 0.0702379 11.1954 0.195262C11.0704 0.320286 11.0002 0.489856 11.0002 0.666667V3.83333C11.0002 3.96594 10.9475 4.09312 10.8537 4.18689C10.7599 4.28065 10.6328 4.33333 10.5002 4.33333C10.3676 4.33333 10.2404 4.28065 10.1466 4.18689C10.0528 4.09312 10.0002 3.96594 10.0002 3.83333V2.33333C10.0002 2.24493 9.96504 2.16014 9.90253 2.09763C9.84002 2.03512 9.75524 2 9.66683 2H5.50016C5.45608 2 5.41378 1.98253 5.38255 1.95142C5.35131 1.92031 5.33367 1.87809 5.3335 1.834V0.666667C5.3335 0.489856 5.26326 0.320286 5.13823 0.195262C5.01321 0.0702379 4.84364 0 4.66683 0C4.49002 0 4.32045 0.0702379 4.19543 0.195262C4.0704 0.320286 4.00016 0.489856 4.00016 0.666667V3.83333C4.00016 3.96594 3.94748 4.09312 3.85372 4.18689C3.75995 4.28065 3.63277 4.33333 3.50016 4.33333C3.36755 4.33333 3.24038 4.28065 3.14661 4.18689C3.05284 4.09312 3.00016 3.96594 3.00016 3.83333V2.33333C3.00016 2.24493 2.96504 2.16014 2.90253 2.09763C2.84002 2.03512 2.75523 2 2.66683 2H1.66683C1.31321 2 0.974069 2.14048 0.72402 2.39052C0.473972 2.64057 0.333496 2.97971 0.333496 3.33333V14.6667C0.333496 15.0203 0.473972 15.3594 0.72402 15.6095C0.974069 15.8595 1.31321 16 1.66683 16H14.3335C14.6871 16 15.0263 15.8595 15.2763 15.6095C15.5264 15.3594 15.6668 15.0203 15.6668 14.6667V3.33333C15.6668 2.97971 15.5264 2.64057 15.2763 2.39052C15.0263 2.14048 14.6871 2 14.3335 2ZM14.3335 14.3333C14.3335 14.4217 14.2984 14.5065 14.2359 14.569C14.1734 14.6315 14.0886 14.6667 14.0002 14.6667H2.00016C1.91176 14.6667 1.82697 14.6315 1.76446 14.569C1.70195 14.5065 1.66683 14.4217 1.66683 14.3333V6.33333C1.66683 6.24493 1.70195 6.16014 1.76446 6.09763C1.82697 6.03512 1.91176 6 2.00016 6H14.0002C14.0886 6 14.1734 6.03512 14.2359 6.09763C14.2984 6.16014 14.3335 6.24493 14.3335 6.33333V14.3333Z" fill="#BFBFBF"></path>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0">
                                                                <rect width="16" height="16" fill="white"></rect>
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                    {list.day}
                                                </span>
                                                <span className="text-lowercase">
                                                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7.99984 0C4.6665 0 1.81984 2.07333 0.666504 5C1.81984 7.92667 4.6665 10 7.99984 10C11.3332 10 14.1798 7.92667 15.3332 5C14.1798 2.07333 11.3332 0 7.99984 0ZM7.99984 8.33333C6.15984 8.33333 4.6665 6.84 4.6665 5C4.6665 3.16 6.15984 1.66667 7.99984 1.66667C9.83984 1.66667 11.3332 3.16 11.3332 5C11.3332 6.84 9.83984 8.33333 7.99984 8.33333ZM7.99984 3C6.89317 3 5.99984 3.89333 5.99984 5C5.99984 6.10667 6.89317 7 7.99984 7C9.1065 7 9.99984 6.10667 9.99984 5C9.99984 3.89333 9.1065 3 7.99984 3Z" fill="#8C8C8C"></path>
                                                    </svg>
                                                    {list.number} &nbsp;Lượt xem
                                                    </span>
                                            </div>
                                            <div className="text-icon-views">
                                                <p>{list.content}</p>
                                            </div>
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

export default PromotionTickitHot;