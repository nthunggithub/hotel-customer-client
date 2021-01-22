import React, {useState} from 'react';
// import Header from "../Path/Header";
// import Footer from "../Path/Footer";
import { NavLink } from 'react-router-dom';
import BG from "../Icon/banner/b03.jpg";
import {useHistory} from "react-router-dom"
import api from "../callapi/index";
function Register () {
    let history = useHistory();
    const [user, setUser] = useState({
        username: "",
        email: "",
        password: "",
        confirmPass: ""
      });
      const [notify, setNotify] = useState('')
      const handleChange = (name) => e => {
        let userInfo = {...user, [name]: e.target.value}
        setUser(userInfo);
        setNotify("");
      };
    const handleSubmitRegister = async (e) => {
        e.preventDefault();
        if (user.confirmPass !== user.password)
            setNotify("Password & ConfirmPass is not match");
        else{
            console.log("vao")
            let data = await api.post("/api/auth/signup", { name: user.username, email: user.email, password: user.password, confirmPass: user.confirmPass});
            if (data.status === 200){
                setNotify(data.data.message);
            }
        }
    }
    if (notify === "Successfully")
        history.push("/login")
return (
    <>
    {/* <Header /> */}
    <section class="section-account parallax bg-11" style={{backgroundImage: `url(${BG})`}}>
            <div class="awe-overlay"></div>
            <div class="container">
                <div class="login-register">
                    <div class="text text-center">
                        <h2>ĐĂNG KÝ TÀI KHOẢN</h2>
                        <p>Vui lòng nhập thông tin tài khoản</p>
                        <h4>{notify}</h4>
                        <form action="#" class="account_form" onSubmit={handleSubmitRegister}>
                            <div class="field-form">
                                <input type="text" name="username" class="field-text" placeholder="Username" onChange={handleChange("username")} required/>
                            </div>
                            <div class="field-form">
                                <input type="email" name="email" class="field-text" placeholder="Email" onChange={handleChange("email")} required/>
                            </div>
                            <div class="field-form">
                                <input type="password" name="password" class="field-text" placeholder="Password" onChange={handleChange("password")} required />
                            </div>
                            <div class="field-form">
                                <input type="password" name="confirmPass" class="field-text" placeholder="ConfirmPassword" onChange={handleChange("confirmPass")}  required/>
                            </div>
                            <div class="field-form field-submit">
                                <button class="awe-btn awe-btn-13" type="submit">ĐĂNG KÝ</button>
                            </div>
                            <span class="account-desc">
                                  Đã có tài khoản?
                                 <NavLink to="/login" class="footer-link"> &nbsp;Đăng nhập</NavLink>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <br/><br/><br/>
        {/* <Footer /> */}

    </>
)
}

export default Register;