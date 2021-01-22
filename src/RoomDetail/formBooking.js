import React, { useState } from 'react';
import "../App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import IncreDecreChild from "./IncreDecreChild";
import IncreDecreAdult from "./IncreDecreAdult";
import Grid from '@material-ui/core/Grid';
import api from '../callapi';
// import TextField from '@material-ui/core/TextField';
// import AdapterDateFns from '@material-ui/lab/dateAdapter/date-fns';
// import LocalizationProvider from '@material-ui/lab/localization-provider';
// import DatePicker from '@material-ui/lab/datePicker';
Date.prototype.yyyymmdd = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [this.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
    ].join('/');
};
function Booking({ roomInfo, match }) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [child, setChild] = useState(0);
    const [adult, setAdult] = useState(0);
    const [book, setBook] = useState();
    const [price, setPrice] = useState(roomInfo ? roomInfo.GiaThue : 0);
    const [notify, setNotify] = useState('')
    const handleSubmitBooking = async (e) => {
        e.preventDefault();
        if (!(adult) || !price)
            setNotify("Thiếu thông tin!");
        else {
            let beginDate = new Date(startDate).yyyymmdd();
            let finishedDate = new Date(endDate).yyyymmdd();
            let res = await api.post("/api/createreservation", { roomId: match.params.id, userId: parseInt(localStorage.getItem("MaKH")), arrivalDate: beginDate, departureDate: finishedDate, adults: adult, childs: child, cost: price, status: 1 })
            setNotify(res.data.message);
        }
    }

    const countDateNumber = (beginDate, endDate) => {
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        const firstDate = new Date(beginDate);
        const secondDate = new Date(endDate);

        const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
        return diffDays;
    }
    const handleChangeEndDate = (date) => {
        setEndDate(date);
        let beginDate = new Date(startDate).yyyymmdd();
        let finishedDate = new Date(date).yyyymmdd();
        try {
            console.log(beginDate, finishedDate)
            let countDate = countDateNumber(beginDate, finishedDate);
            countDate = countDate ? countDate + 1 : 1

            console.log(countDate);
            let totalprice = 0;
            if (roomInfo.KhuyenMai === 'null' || roomInfo.KhuyenMai === 'undefind') {
                totalprice = countDate * roomInfo.GiaThue;
            } else {
                totalprice = countDate * roomInfo.GiaThue * (100 - roomInfo.KhuyenMai) / 100;
            }
            setPrice(totalprice);
        } catch (error) {

        }
    }
    const handleChangeBeginDate = (date) => {
        setStartDate(date);
        let beginDate = new Date(date).yyyymmdd();
        let finishedDate = new Date(endDate).yyyymmdd();
        try {
            console.log(beginDate, finishedDate)
            let countDate = countDateNumber(beginDate, finishedDate);
            countDate = countDate ? countDate + 1 : 1

            console.log(countDate);
            let totalprice = 0;
            if (roomInfo.KhuyenMai === 'null' || roomInfo.KhuyenMai === 'undefind') {
                totalprice = countDate * roomInfo.GiaThue;
            } else {
                totalprice = countDate * roomInfo.GiaThue * (100 - roomInfo.KhuyenMai) / 100;
            }
            setPrice(totalprice);
        } catch (error) {

        }
    }
    return (
        roomInfo ? <>
            <div class="sidebar">
                <div class="widget widget_check_availability" >
                    <h4 class="widget-title">ĐẶT PHÒNG</h4>
                    <h5 class="widget-title" style={{ color: "red" }}>{notify}</h5>
                    <form class="contentCenter" onSubmit={handleSubmitBooking}>
                        <div class="check_availability">
                            <div class="check_availability-field">
                                <label>Ngày nhận</label>
                                <DatePicker
                                    dateFormat="yyyy/MM/dd"
                                    selected={startDate}
                                    onChange={date => handleChangeBeginDate(date)}
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                />
                            </div>
                            <div class="check_availability-field">
                                <label>Ngày trả</label>
                                {/* <input type="text" class="awe-calendar awe-input to" placeholder="Ngày trả" /> */}
                                <DatePicker
                                    dateFormat="yyyy/MM/dd"
                                    selected={endDate}
                                    onChange={date => handleChangeEndDate(date)}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                />
                            </div>
                            <div class="check_availability-field">
                                <Grid container xs={12}>
                                    <Grid xs={5}><label>Số trẻ em:</label></Grid>
                                    <Grid xs={6}><IncreDecreChild member={child} setMember={setChild} roomInfo={roomInfo} /></Grid>
                                </Grid>
                            </div>
                            <div class="check_availability-field">
                                <Grid container xs={12}>
                                    <Grid xs={6}><label>Số người lớn:</label></Grid>
                                    <Grid xs={6}><IncreDecreAdult member={adult} setMember={setAdult} roomInfo={roomInfo} /></Grid>
                                </Grid>
                            </div>
                            <div class="check_availability-field">
                                <Grid container xs={12}>
                                    <Grid xs={5}><label>Tạm tính:</label></Grid>
                                    <Grid xs={6}><label>{price * 1000} VNĐ</label></Grid>
                                </Grid>
                            </div>
                            <button class="awe-btn awe-btn-13" type="submit">ĐẶT PHÒNG</button>
                        </div>
                    </form>
                </div>
            </div></> : " "
    )
}

export default Booking;