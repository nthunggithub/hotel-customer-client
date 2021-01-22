import React from "react";
import "./App.css";
import Home from "./Home/Home";
import RoomDetail from "../src/RoomDetail/RoomDetail";
import Login from "../src/Form/Login";
import Register from "../src/Form/Register";
import ChangePass from "../src/Form/ChangePass";
import ResetPass from "../src/Form/ResetPass";
import ViewUserInfo from "../src/InfoUser/ViewInfoUser";
import UpdateUserInfo from "../src/InfoUser/EditInfoUser";
import RoomList from "../src/Room/Rooms";
import About from "../src/InfoUser/InfoWeb";
import Bill from "../src/Bill/billList";
import ResetPassVerify from "../src/Form/ResetPassVerify"
const routes=[
    {
        path: process.env.PUBLIC_URL+'/',
        exact: true,
        main: (history) => <Home history={history}/>
    },
    {
        path: process.env.PUBLIC_URL+'/roomDetail/:id',
        exact: true,
        main: ({match}) => <RoomDetail match={match}/>
    },
    {
        path: process.env.PUBLIC_URL+'/login',
        exact: true,
        main: (history) => <Login history={history}/>
    },
    {
        path: process.env.PUBLIC_URL+'/register',
        exact: true,
        main: (history) => <Register history={history}/>
    },
    {
      path: process.env.PUBLIC_URL+'/resetPassword',
      exact: true,
      main: (history) => <ResetPass history={history}/>
    },
    {
      path: process.env.PUBLIC_URL+'/resetPassword/:id',
      exact: true,
      main: ({match}) => <ResetPassVerify match={match}/>
    },
    {
      path: process.env.PUBLIC_URL+'/changePassword',
      exact: true,
      main: (history) => <ChangePass history={history}/>
    },
    {
      path: process.env.PUBLIC_URL+'/viewInfo',
      exact: true,
      main: (history) => <ViewUserInfo history={history}/>
    },
    {
      path: process.env.PUBLIC_URL+'/updateInfo',
      exact: true,
      main: (history) => <UpdateUserInfo history={history}/>
    },
    {
      path: process.env.PUBLIC_URL+'/roomList',
      exact: true,
      main: (history) => <RoomList history={history}/>
    },
    {
      path: process.env.PUBLIC_URL+'/about',
      exact: true,
      main: (history) => <About history={history}/>
    },
    {
      path: process.env.PUBLIC_URL+'/bills',
      exact: true,
      main: (history) => <Bill history={history}/>
    },
]
export default routes;
