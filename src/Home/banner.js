import React from 'react';
import S1 from "../Icon/slide01.png";
import S2 from "../Icon/slide02.png";
function BannerHeader () {
return (
    <>
    <section class="section-slider slider-style-2 clearfix">
        <div id="slider-revolution">
            <ul>
                <li data-transition="fade">
                    <img src="images/slider/img-5.jpg" data-bgposition="left center" data-duration="14000" data-bgpositionend="right center" alt="" />
                    <div class="tp-caption sft fadeout slider-caption-sub slider-caption-1" data-x="center" data-y="100"  data-speed="700" data-start="1500" data-easing="easeOutBack">
                        <img src={S1} alt="icons" />
                    </div>
                    <div class="tp-caption sft fadeout slider-caption-sub slider-caption-1" data-x="center" data-y="240" data-speed="700" data-start="1500" data-easing="easeOutBack">
                        WELCOME TO
                    </div>
                    <div class="tp-caption sfb fadeout slider-caption slider-caption-sub-1" data-x="center" data-y="280"  data-speed="700" data-easing="easeOutBack" data-start="2000">N5-BOOKING
                    </div>
                    <a href="/room" class="tp-caption sfb fadeout awe-btn awe-btn-12 awe-btn-slider" data-x="center"  data-y="380" data-easing="easeOutBack" data-speed="700" data-start="2200">VIEW NOW</a>
                </li>
                <li data-transition="fade">
                    <img src={S2} data-bgposition="left center" data-duration="14000" data-bgpositionend="right center" alt="" />
                    <div class="tp-caption sft fadeout" data-x="center" data-y="195" data-speed="700" data-start="1300"data-easing="easeOutBack">
                        <img src="images/icon-slider-1.png" alt="" />
                    </div>
                    <div class="tp-caption sfb fadeout slider-caption-sub slider-caption-sub-3" data-x="center" data-y="365" data-easing="easeOutBack" data-speed="700" data-start="2200">JUST LIKE YOU
                    </div>
                    <div class="tp-caption sfb fadeout slider-caption-sub slider-caption-sub-3" data-x="center" data-y="395" data-easing="easeOutBack" data-speed="700" data-start="2400">
                      <img src="images/icon-slider-2.png" alt="" />
                    </div>
                </li>

            </ul>
        </div>

    </section>
    {/* <section class="section-sub-banner bg-9">
        <div class="awe-overlay"></div>
        <div class="sub-banner" style={{backgroundImage: `url(${S2})`}}>
            <div class="container" >
                <div class="text text-center">
                    <h2>Hotel-BOOKING</h2>
                    <p>Tận hưởng giây phút tuyệt vời!</p>
                </div>
            </div>
        </div>
    </section> */}
    </>
)
}

export default BannerHeader;