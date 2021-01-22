import React, {useState} from 'react';
// import Header from "../Path/Header";
// import Footer from "../Path/Footer";
import { NavLink } from 'react-router-dom';
import BG from "../Icon/banner/b03.jpg";
import api from "../callapi/index";
import {useHistory} from "react-router-dom"
import { useLogin } from '../contexts/LoginProvider';
function Login () {
    const [user, setUser] = useState({
        email: "",
        password: "",
      });
    const [notify, setNotify] = useState('');
    const [isLogin, setIsLogin] = useLogin();
    const history = useHistory();
    const handleChange = (name) => e => {
        let userInfo = {...user, [name]: e.target.value}
        setUser(userInfo);
    };
    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post("/api/auth/signin", { email: user.email, password: user.password });
            if (res.status === 200) {
                await localStorage.setItem("token", res.data.accessToken);
                if(res.data.accessToken){
                  api.defaults.headers = { 'Authorization': 'Bearer ' + res.data.accessToken }
                  setIsLogin(true);
                  history.push('/')
                }else{
                  setNotify(res.data.message)
                }
            } else{
                setNotify(res.data.message)
            }
        } catch (err) {
            setNotify(err.response.data.message);
        }
    }
return (
    <>
    {/* <Header /> */}
    <section class="section-account parallax bg-11" style={{backgroundImage: `url(${BG})`}}>
            <div class="awe-overlay"></div>
            <div class="container">
                <div class="login-register">
                    <div class="text text-center">
                        <h2>ĐĂNG NHẬP TÀI KHOẢN</h2>
                        <p>Vui lòng nhập thông tin tài khoản</p>
                        <h4>{notify}</h4>
                        <form action="#" class="account_form" onSubmit={handleSubmitLogin}>
                            <div class="field-form">
                                <input type="email" name="email" class="field-text" placeholder="Email" onChange={handleChange("email")} required/>
                            </div>
                            <div class="field-form">
                                <input type="password" name="password" class="field-text" placeholder="Password" onChange={handleChange("password")} required/>
                            </div>
                            <div class="field-form field-submit">
                                <button class="awe-btn awe-btn-13" type="submit">ĐĂNG NHẬP</button>
                            </div>
                            <span class="account-desc">
                                  Quên mật khẩu?
                                 <NavLink to="/resetPassword" class="footer-link">&nbsp;Làm mới</NavLink>
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

export default Login;