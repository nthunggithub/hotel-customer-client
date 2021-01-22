import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import api from "../callapi/index";
import { useLogin } from '../contexts/LoginProvider';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import Logo from "../Icon/hotel.png";
function Header() {
    let history = useHistory();
    const [user, setUser] = useState(null);
    const [isLogin, setIsLogin] = useLogin();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };
    // useEffect(() => {
    //     const fetchDate = async () => {
    //         try {
    //             const res = await api.get("/api/getUser");
    //             if(res.status === 200){
    //                 setUser(res.data)
    //             }
    //         } catch (error) {

    //         }
    //     }
    //     fetchDate();
    // },[isLogin])
    const onLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('MaKH');
        localStorage.removeItem('MaTK');
        setIsLogin(false);
        api.defaults.headers = '';
        history.push('/login');
    }
    return (
        <div id="header" class="header-v3">
            <div class="header_left float-left">
                <h2 style={{ color: "white" }}> ~N5-Booking~</h2>
            </div>
            <div class="header_right float-right">
                <span class="login-register" >
                    {!isLogin ?
                        <>
                            <NavLink to="/login" style={{ color: "white", margin: "10px" }}>Đăng nhập</NavLink>
                            <NavLink to="/register" style={{ color: "white", margin: "10px" }}>Đăng ký</NavLink>
                        </>
                        :
                        <>
                            <div style={{marginRight: "100px"}}>
                            <IconButton aria-label="account of current user"  aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu}  color="inherit" >
                                <AccountCircle style={{ height: "40px", width: "40px"}}/>
                            </IconButton>
                            <Menu id="menu-appbar" anchorEl={anchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right', }} keepMounted transformOrigin={{vertical: 'top', horizontal: 'right',  }} open={open} onClose={handleClose}>
                                <MenuItem onClick={handleClose}> <NavLink to="/viewInfo" style={{ margin: "10px" }}>Tài khoản</NavLink></MenuItem>
                                <MenuItem onClick={handleClose}> <NavLink to="/changePassword" style={{ margin: "10px" }}>Thay đổi mật khẩu</NavLink></MenuItem>
                                <MenuItem onClick={handleClose}> <NavLink to="/bills" style={{  margin: "10px" }}>Đơn đặt phòng</NavLink></MenuItem>
                                <MenuItem onClick={handleClose}> <div style={{ margin: "10px" }} onClick={onLogout}>Đăng xuất</div></MenuItem>
                            </Menu>
                            </div>
                        </>
                    }
                </span>
            </div>
            <div class="header_content" id="header_content" >
                <div >
                    <nav class="header_menu">
                        <ul class="menu">
                            <li class="current-menu-item"><NavLink to="/">Trang chủ</NavLink></li>
                            <li><NavLink to="/roomList">Phòng </NavLink></li>
                            <li><NavLink to="/about">Thông tin</NavLink></li>
                        </ul>
                    </nav>
                    <span class="menu-bars">
                        <span></span>
                    </span>
                </div>
            </div>
        </div>


    )
}

export default Header;