import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../Icon/hotel.png";
import BG from "../Icon/banner/b03.jpg";
function Header () {
return (
 
        <div class="footer_center bgr-footer" style={{height: "auto", backgroundColor:"black"}}>
            <div class="container">
                <div class="content pt10 pb60">
                    <div class="row">
                        <div class="col-xs-6 col-sm-3">
                            <div class="footer-logo clearfix">
                                <div class="widget widget_logo clearfix">
                                    <div class="widget-logo text-center">
                                        <div class="img">
                                            <a href="#"><img class="img-center" src="/images/logo.jpg" alt="" /></a>
                                        </div>
                                    </div>
                                </div>
                                <div class="widget widget_tripadvisor clearfix">
                                    <div class="tripadvisor text-center">
                                        <img class="img-center" src="images/home-3/footer/logo-trivision.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-6 col-sm-3">
                            <div class="widget">
                                <h4 class="widget-title f20 bold">Thông tin</h4>
                                <div class="text">
                                    <p>Việt Nam</p>
                                    <p>0335.435.604</p>
                                    <p><a href="mailto:nhom05Booking@gmail.com">nhom05Booking@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-6 col-sm-3">
                            <div class="widget">
                                <h4 class="widget-title f20 bold">Khách sạn</h4>
                                <ul>
                                    <li>Dịch vụ</li>
                                    <li>Bộ sưu tập</li>
                                    <li>Sự kiện</li>
                                    <li>Ưu đãi</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xs-6 col-sm-3">
                            <div class="widget">
                                <h4 class="widget-title f20 bold">Liên kết</h4>
                                <ul>
                                    <li><a href="">Thông tin</a></li>
                                    <li><a href="">Liện hệ</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

)
}

export default Header;