import React, { useState } from 'react';
import "../App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Grid from '@material-ui/core/Grid';
import api from '../callapi';
Date.prototype.yyyymmdd = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [this.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
    ].join('/');
};
function Search({ setRooms }) {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [price, setPrice] = useState();
    const [notify, setNotifiy] = useState("");
    const handleChangePrice = (event) => {
        setPrice(event.target.value);
    };
    const handleSubmitSearch = async (e) => {
        e.preventDefault();
        let arrivalDate = new Date(startDate).yyyymmdd();
        let departureDate = new Date(endDate).yyyymmdd();
        console.log(arrivalDate, departureDate)
        let beginPrice, endPrice;

        if (price === '1') {
            beginPrice = 0;
            endPrice = 999;
        } else if (price === '2') {
            beginPrice = 1000;
            endPrice = 4999;
        } else if (price === '3') {
            beginPrice = 5000;
            endPrice = 999999;
        } else {
            beginPrice = 0;
            endPrice = 999;
        }
        try {
            let res = await api.post("searchRoom", { arrivalDate: arrivalDate, departureDate: departureDate, beginPrice: beginPrice, endPrice: endPrice })
            setRooms(res.data.listRooms);
            setNotifiy("");
        } catch (error) {
            setNotifiy(error.response.data.message);
        }
    }
    return (
        <div class="sidebar">
            <div class="widget widget_check_availability" >
                <h4 class="widget-title">Tìm kiếm phòng</h4>
                <h5 class="widget-title" style={{ color: "red" }}>{notify}</h5>
                <form onSubmit={handleSubmitSearch}>
                    <Grid container xs={12}>
                        <Grid xs={1}></Grid>
                        <Grid xs={3}>
                            <div class="check_availability-field">
                                <label>Ngày nhận: &nbsp;</label>
                                <DatePicker
                                    dateFormat="yyyy/MM/dd"
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                    selectsStart
                                    startDate={startDate}
                                    endDate={endDate}
                                />
                            </div>
                        </Grid>
                        <Grid xs={3}>
                            <div class="check_availability-field">
                                <label>Ngày trả: &nbsp;</label>
                                <DatePicker
                                    dateFormat="yyyy/MM/dd"
                                    selected={endDate}
                                    onChange={date => setEndDate(date)}
                                    selectsEnd
                                    startDate={startDate}
                                    endDate={endDate}
                                    minDate={startDate}
                                />
                            </div>
                        </Grid>
                        <Grid xs={3}>
                            <div class="check_availability-field">
                                <label>Khoảng giá: &nbsp;</label>
                                <select class="awe-select" style={{ height: "40px", width: "170px" }} value={price} onChange={handleChangePrice}>
                                    <option value={1}>Dưới 1.000.000</option>
                                    <option value={2}>1.000.000-5.000.000</option>
                                    <option value={3}>Trên 5.000.000</option>
                                </select>
                            </div>
                        </Grid>
                        <button class="awe-btn awe-btn-13" type="submit">TÌM KIẾM</button>
                    </Grid>
                    <br />
                </form>
            </div>
        </div>
    )
}

export default Search;