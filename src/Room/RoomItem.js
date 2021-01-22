import React from "react";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import "../App.css";
function RoomItem({ room }) {
  return (
    <div>
      <div class="item room-item text-center accomd-modations-room_1">
      <Link to={`/roomDetail/${room.MaP}`}>
        <div class="img">
          <a href="#">
            <img
              class="img-responsive img-full"
              src={room.Image? room.Image : "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/46/2016/10/03040240/3-Nagas-Luang-Prabang-MGallery-By-Sofitel-Superior-double.jpg"}
              alt=""
              style={{height:"200px"}}
            />
          </a>
        </div>
        <h2 class="title">{room.TenP}</h2>
        </Link>
        <p class="price">Chỉ với {room.GiaThue * 1000}đ/ngày</p>
        <div class="upper">
          <p>
            <span  style={{fontSize:"18px"}}>{room.LoaiP}</span>
          </p>
        </div>
        {room.KhuyenMai >0 ?
        <Grid container xs={12}>
          <Grid container xs={12} sm={2}></Grid>
          <Grid container xs={12} sm={3}>
            <Grid container item xs={12} justify="center" style={{fontSize:"25px", fontWeight:"bold"}}>{room.SoNguoiToiDa}</Grid>
            <Grid container item xs={12} justify="center">Số người</Grid>
          </Grid>
          <Grid container xs={12} sm={2}></Grid>
          <Grid container xs={12} sm={3}>
            <Grid container item xs={12} justify="center" style={{fontSize:"25px", fontWeight:"bold"}}>{room.KhuyenMai}%</Grid>
            <Grid container item xs={12} justify="center">Khuyến mãi</Grid>
          </Grid>
          <Grid container xs={12} sm={2}></Grid>
        </Grid>
        :
        <Grid container xs={12}>
           <Grid container xs={12} sm={3}></Grid>
           <Grid container xs={12} sm={6}>
            <Grid container item xs={12} justify="center" style={{fontSize:"25px", fontWeight:"bold"}}>{room.SoNguoiToiDa}</Grid>
            <Grid container item xs={12} justify="center">Số người</Grid>
          </Grid>
        </Grid>
        }
        <br/><br/>
        {/* <Link
          class="awe-btn awe-btn-default btn-medium font-hind f12 bold"
          to={`/roomDetail/${room.MaP}`}
        >
          {" "}
          ĐẶT PHÒNG
        </Link> */}
      </div>
    </div>
  );
}

export default RoomItem;
