import React from 'react';
import "../App.css";
import Grid from '@material-ui/core/Grid';
function RoomInfo({ roomInfo }) {
    return (
        roomInfo ? <div>
            <div class="entry-header">
                <article class="post post-single">
                    <div class="entry-media">
                        <img src={roomInfo.Image ? roomInfo.Image : "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/46/2016/10/03040240/3-Nagas-Luang-Prabang-MGallery-By-Sofitel-Superior-double.jpg"} alt="" style={{ height: "440px" }} />
                    </div>
                </article>
                <br />
                <h1 class="entry-title">{roomInfo.TenP}</h1>
                <br />
                <Grid container xs={12} >
                    <h1 class="entry-title">Giá thuê: {roomInfo.GiaThue * 1000} VNĐ</h1>
                </Grid>
                {parseInt(roomInfo.KhuyenMai ? roomInfo.KhuyenMai : 0) > 0 ? <> <Grid container xs={12}>
                    <Grid container xs={12} sm={2} className="titleInfo">Khuyến mãi: </Grid>
                    <Grid container xs={12} sm={2} className="cntInfo">{roomInfo.KhuyenMai}%</Grid>
                </Grid> <Grid container xs={12} >
                        <h1 class="entry-title"><div >Chỉ còn: {roomInfo.GiaThue * (100 - roomInfo.KhuyenMai) / 100 * 1000} VNĐ</div></h1>
                    </Grid> </> : ''}


                <br />
                <Grid container xs={12} >
                    <Grid container xs={12} sm={4} >
                        <Grid container xs={12} sm={5} className="titleInfo">Trạng thái:</Grid>
                        <Grid container xs={12} sm={7} className="cntInfo">{roomInfo.TrangThai === "2" ? "Đã thuê dài hạn" : roomInfo.TrangThai === "3" ? "Đang sửa chữa" : "Sẵn sàng"}</Grid>
                    </Grid>
                    <Grid container xs={12} sm={4}>
                        <Grid container xs={12} sm={6} className="titleInfo">Loại phòng:</Grid>
                        <Grid container xs={12} sm={6} className="cntInfo">{roomInfo.LoaiP}</Grid>
                    </Grid>
                    <Grid container xs={12} sm={4} justify="center">
                        <Grid container xs={12} sm={5} className="titleInfo">Số người: </Grid>
                        <Grid container xs={12} sm={6} className="cntInfo">{roomInfo.SoNguoiToiDa}</Grid>
                    </Grid>
                </Grid>
            </div>
            <br />
            <h1>Mô tả:</h1>
            <div >
                <p>{roomInfo.MoTa}</p>
            </div>
        </div> : ''
    )
}

export default RoomInfo;