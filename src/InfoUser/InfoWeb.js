import React from 'react';
import Banner from "../RoomDetail/banner";
function UserInfo () {
return (
    <>
    <Banner/> 
    <section class="section-about">
            <div class="container">
                <div class="about">
                    <div class="about-item">
                        <div class="img owl-single">
                            <img src="https://caodang.fpt.edu.vn/wp-content/uploads/teaser.jpeg.jpg" alt="" />
                        </div>
                        <div class="text">
                            <h2 class="heading">THÔNG TIN N5-BOOKING</h2>
                            <div class="desc">
                                <p>N5-BOOKING được phát triển từ đội ngũ phát triển bởi nhóm sinh viên trường Đại học 
                                    Khoa học tự nhiên TPHCM. </p>
                                <p>Di động: 0335.435.604</p>
                                <p>Email: nhom05Booking@gmail.com</p>
                                <p>Trụ sở: I82, Tòa nhà I, số 227, Nguyễn Văn Cừ, Phường 4, Quận 5, TPHCM. </p>
                            </div>
                        </div>
                    </div>
                    <div class="about-item about-right">
                        <div class="img">
                            <img src="https://isomnuscom.files.wordpress.com/2018/04/maxresdefault.jpg" alt="" />
                        </div>
                        <div class="text">
                            <h2 class="heading">Tại sao quý khách phải chọn N5-BOOKING?</h2>
                            <div class="desc">
                                <p>N5-BOOKING cung cấp nhiều dịch vụ và phòng nghỉ thượng hạng.
                                Mỗi phòng sẽ được thiết kế sang trọng, quý phái cùng với nội thất đầy đủ và hiện đại.
                                Qúy khách có thể trải qua những ngày nghỉ dưỡng ấm áp và hạnh phúc cùng người thân 
                                trong không gian mát mẻ, thoáng đảng và không kém phần sinh động, hấp dẫn.
                                Nếu bạn không tin? Hãy đến với chúng tôi! </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
</section>

    </>
)
}

export default UserInfo;