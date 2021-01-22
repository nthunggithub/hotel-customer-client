import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom"
import BG from "../Icon/banner/b03.jpg";
import api from '../callapi';
import Grid from '@material-ui/core/Grid';
Date.prototype.yyyymmdd = function () {
    var mm = this.getMonth() + 1; // getMonth() is zero-based
    var dd = this.getDate();

    return [this.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
    ].join('/');
};
function UserInfo() {
    const [accInfor, setAccInfor] = useState({});
    const [notify, setNotify] = useState('');
    let history = useHistory();
    useEffect(() => {
        const fetchData = async () => {
            let res = await api.get("/api/getUser");
            try {
                let x = new Date(res.data.NgaySinh)
                //x = x.setDate(x.getDate() + 1)
                //console.log(x);
                res.data.NgaySinh = new Date(x).yyyymmdd();
            } catch (error) {
                console.log(error);
            }
            setAccInfor(res.data);
        }
        fetchData();
    }, [])
    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await api.post("/api/auth/changeinfor", accInfor);
        setNotify(res.data.message);
        history.push("/viewInfo")
    }
    return (
        <>
            {/* <Header /> */}
            <section class="section-account parallax bg-11" style={{ backgroundImage: `url(${BG})` }}>
                <div class="awe-overlay"></div>
                <div class="container">
                    <div class="login-register">
                        <div class="text text-center">
                            <h2>Cập nhật thông tin cá nhân</h2>
                            {notify}
                            <form action="#" class="account_form" onSubmit={handleSubmit} style={{ color: "white" }}>
                                <div class="field-form">
                                    <Grid container xs={12}>
                                        <Grid container xs={12} sm={3} style={{ fontWeight: "bold", fontSize: "15px" }}>Tên tài khoản: </Grid>
                                        <Grid container xs={12} sm={9}>
                                            <input type="text" name="TenTaiKhoan" class="field-text" value={accInfor.TenTaiKhoan} readOnly />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div class="field-form">
                                    <Grid container xs={12}>
                                        <Grid container xs={12} sm={3} style={{ fontWeight: "bold", fontSize: "15px" }}>Email: </Grid>
                                        <Grid container xs={12} sm={9}>
                                            <input type="email" name="Email" class="field-text" value={accInfor.Email} readOnly />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div class="field-form">
                                    <Grid container xs={12}>
                                        <Grid container xs={12} sm={3} style={{ fontWeight: "bold", fontSize: "15px" }}>Họ tên: </Grid>
                                        <Grid container xs={12} sm={9}>
                                            <input type="text" name="HoTen" class="field-text" value={accInfor.HoTen} onChange={(e) => { setAccInfor({ ...accInfor, HoTen: e.target.value }) }} />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div class="field-form">
                                    <div class="check_availability-field">
                                        <Grid container xs={12}>
                                            <Grid container xs={12} sm={3} style={{ fontWeight: "bold", fontSize: "15px" }}>Giới tính: </Grid>
                                            <Grid container xs={12} sm={9}>
                                                <select class="awe-select" style={{ height: "40px", width: "350px" }} value={accInfor.GioiTinh} onChange={(e) => { setAccInfor({ ...accInfor, GioiTinh: e.target.value }) }}>
                                                    <option value={1}>Nam</option>
                                                    <option value={2}>Nữ</option>
                                                </select>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                                <div class="field-form">
                                    <Grid container xs={12}>
                                        <Grid container xs={12} sm={3} style={{ fontWeight: "bold", fontSize: "15px" }}>Ngày sinh: </Grid>
                                        <Grid container xs={12} sm={9}>
                                            <input type="text" name="NgaySinh" class="field-text" value={accInfor.NgaySinh} onChange={(e) => { setAccInfor({ ...accInfor, NgaySinh: e.target.value }) }} />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div class="field-form">
                                    <Grid container xs={12}>
                                        <Grid container xs={12} sm={3} style={{ fontWeight: "bold", fontSize: "15px" }}>Di động: </Grid>
                                        <Grid container xs={12} sm={9}>
                                            <input type="text" name="SDT" maxLength={10} class="field-text" value={accInfor.SDT} onChange={(e) => { setAccInfor({ ...accInfor, SDT: e.target.value }) }} />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div class="field-form">
                                    <Grid container xs={12}>
                                        <Grid container xs={12} sm={3} style={{ fontWeight: "bold", fontSize: "15px" }}>Địa chỉ: </Grid>
                                        <Grid container xs={12} sm={9}>
                                            <input type="text" name="DiaChi" class="field-text" value={accInfor.DiaChi} onChange={(e) => { setAccInfor({ ...accInfor, DiaChi: e.target.value }) }} />
                                        </Grid>
                                    </Grid>
                                </div>
                                <div class="field-form field-submit">
                                    <Grid container xs={12}>
                                        <Grid container xs={12} sm={3} style={{ fontWeight: "bold", fontSize: "15px" }}></Grid>
                                        <Grid container xs={12} sm={9} justify="center">
                                            <button class="awe-btn awe-btn-13" type="submit">LƯU THAY ĐỔI</button>
                                        </Grid>
                                    </Grid>
                                    {/* <button class="awe-btn awe-btn-13" type="submit">THAY ĐỔI</button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <br /><br /><br />
            {/* <Footer /> */}

        </>
    )
}

export default UserInfo;