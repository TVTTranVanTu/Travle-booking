import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import FormSearhHotel from './formSearch/formSearchHotel';
import FormSearhPlane from './formSearch/formSearchPlane';

function FormSearch() {
    const [active, setActive] = useState(false);

    const handleCLick = () => {
        setActive(!active)

    }

    return (
        <Router>
            <div className="formsearch">
                <div className="container">
                    <div className="title__form">
                        <NavLink to="/" onClick={() => handleCLick} className={`${active === true ? "active" : ""}`} >
                            <span>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0)">
                                        <path d="M3.5 16H0.5V9H3.5" stroke="#262626" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M12.5 16H15.5V9H12.5" stroke="#262626" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M12.5 1H3.5V16H12.5V1Z" stroke="#262626" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M6.5 4H9.5" stroke="#262626" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M6.5 7H9.5" stroke="#262626" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M6.5 10H9.5" stroke="#262626" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M6.5 16V13H9.5V16" stroke="#262626" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect y="0.5" width="16" height="16" fill="white"></rect>
                                        </clipPath>
                                    </defs>
                                </svg>
                            Khách sạn
                        </span>

                        </NavLink>
                        <NavLink to="/plane" onClick={() => handleCLick} className={`${active === true ? "active" : ""}`}  >
                            <span>
                                <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.0002 10.1667V8.83333L7.66683 5.5V1.83333C7.66683 1.27999 7.22016 0.833328 6.66683 0.833328C6.1135 0.833328 5.66683 1.27999 5.66683 1.83333V5.5L0.333496 8.83333V10.1667L5.66683 8.5V12.1667L4.3335 13.1667V14.1667L6.66683 13.5L9.00016 14.1667V13.1667L7.66683 12.1667V8.5L13.0002 10.1667Z" fill="#262626"></path>
                                </svg>
                            Máy bay
                        </span>

                        </NavLink>
                    </div>
                </div>
            </div>
            <Switch>
                <Route path="/" exact={true} component={FormSearhHotel}></Route>
                <Route path="/plane" exact component={FormSearhPlane}></Route>
            </Switch>
        </Router>
    );
}

export default FormSearch;