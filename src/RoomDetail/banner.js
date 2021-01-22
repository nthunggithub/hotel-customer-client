import React from 'react';
import Banner from "../Icon/banner/b02.jpg";
function BannerHeader () {
return (
    <>
    <section class="section-sub-banner bg-9">
        <div class="awe-overlay"></div>
        <div class="sub-banner" style={{backgroundImage: `url(${Banner})`}}>
            <div class="container" >
                <div class="text text-center">
                    <h2>Hotel-BOOKING</h2>
                    <p>Tận hưởng giây phút tuyệt vời!</p>
                </div>
            </div>
        </div>
    </section>
    </>
)
}

export default BannerHeader;