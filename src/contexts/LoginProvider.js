import React, { useContext, useEffect, useState } from 'react';

import { URL_API } from '../constants/api';
import api from "../callapi/index";
const LoginContext = React.createContext();

export function useLogin() {
    return useContext(LoginContext)
}

export function LoginProvider({ children }) {
    const [isLogin, setIsLogin] = useState(false);
    useEffect(()=>{
        
        const fetchData = async()=>{
            let res = await api.get("/api/getUser");
            if(res.status === 200){
                console.log(res.data)
                console.log("vao");
                setIsLogin(true);
                localStorage.setItem("MaKH", res.data.MaKH);
                localStorage.setItem("MaTK", res.data.MaTK);
            }
        }
        fetchData();
    },[isLogin])
    return (
        <LoginContext.Provider value={[isLogin, setIsLogin]}>
            {children}
        </LoginContext.Provider>
    )
}