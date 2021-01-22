import React, { useState, useEffect } from 'react';
// import Header from "../Path/Header";
// import Footer from "../Path/Footer";
import { NavLink } from 'react-router-dom';
import BG from "../Icon/banner/b03.jpg";
import api from "../callapi/index";
function ChangePass() {
    const [user, setUser] = useState({
        oldPassword: "",
        newPassword: ""
    });
    const [notify, setNotify] = useState('');
    const handleChange = (name) => e => {
        let userInfo = { ...user, [name]: e.target.value }
        setUser(userInfo);
    };
    const handleSubmitChangePass = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/api/auth/changePassword", {MaTK: parseInt(localStorage.getItem("MaTK")), oldPassword: user.oldPassword, newPassword: user.newPassword });
            setNotify(res.data.message);
        } catch (err) {
            setNotify(err.response.data.message);
        }
    }
    return (
        <>
            {/* <Header /> */}
            <section class="section-account parallax bg-11" style={{ backgroundImage: `url(${BG})` }}>
                <div class="awe-overlay"></div>
                <div class="container">
                    <div class="login-register">
                        <div class="text text-center">
                            <h2>THAY ĐỔI MẬT KHẨU</h2>
                            <p>Vui lòng nhập thông tin tài khoản</p>
                            <h4>{notify}</h4>
                            <form action="#" class="account_form" onSubmit={handleSubmitChangePass}>
                                <div class="field-form">
                                    <input type="password" name="oldPassword" class="field-text" placeholder="OldPassword" onChange={handleChange("oldPassword")} />
                                </div>
                                <div class="field-form">
                                    <input type="password" name="newPassword" class="field-text" placeholder="NewPassword" onChange={handleChange("newPassword")} />
                                </div>
                                <div class="field-form field-submit">
                                    <button class="awe-btn awe-btn-13" type="submit">Thay đổi</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ChangePass;