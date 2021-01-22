import React, { useState } from 'react';
// import Header from "../Path/Header";
// import Footer from "../Path/Footer";
import { NavLink } from 'react-router-dom';
import BG from "../Icon/banner/b03.jpg";
import api from "../callapi/index";
function ResetPass() {
    const [user, setUser] = useState({
        email: ""
    });
    const [notify, setNotify] = useState('');
    const handleChange = (name) => e => {
        let userInfo = { ...user, [name]: e.target.value }
        setUser(userInfo);
    };
    const handleSubmitResetPass = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/api/auth/forgotpassword", { email: user.email });
            setNotify(res.data.message);
        } catch (err) {
            console.log(err)
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
                            <h2>LÀM MỚI MẬT KHẨU</h2>
                            <p>Vui lòng nhập thông tin tài khoản</p>
                            <h4>{notify}</h4>
                            <form action="#" class="account_form" onSubmit={handleSubmitResetPass}>
                                <div class="field-form">
                                    <input type="email" name="username" class="field-text" placeholder="Email" onChange={handleChange("email")} />
                                </div>
                                <div class="field-form field-submit">
                                    <button class="awe-btn awe-btn-13" type="submit">GỬI</button>
                                </div>
                                <span class="account-desc">
                                    Đã có tài khoản?
                                 <NavLink to="/login" class="footer-link"> &nbsp;Đăng nhập</NavLink>
                                </span>
                                <span class="account-desc">
                                    Chưa có tài khoản?
                                 <NavLink to="/register" class="footer-link">&nbsp;Đăng ký</NavLink>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default ResetPass;