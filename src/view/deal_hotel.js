import React from 'react';
import LeftBar from '../components/deal_hotel/left_bar';
import Rightbar from '../components/deal_hotel/right_bar';


function DealHotel() {
    return (
        <div className="deal_hotel">
            <div className="container">
                <div className="deal__hotel__content">
                    <LeftBar></LeftBar>
                    <Rightbar></Rightbar>
                </div>

            </div>
        </div>
    );
}

export default DealHotel;