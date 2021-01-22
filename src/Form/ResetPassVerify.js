import React, { useEffect, useState } from 'react';
// import Header from "../Path/Header";
// import Footer from "../Path/Footer";
import { NavLink } from 'react-router-dom';
import BG from "../Icon/banner/b03.jpg";
import api from "../callapi/index";
import {useHistory} from 'react-router-dom'
function ResetPassVerify({match}) {
    const [notify, setNotify] = useState('');

    const history = useHistory();
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                let res = await api.get("/auth/forgotpasswordverify/" + match.params.id);
                setNotify(res.data.message)
                history.push("/login");
            } catch (error) {
                setNotify(error.response.data.message)
                history.push("/");
            }
        }
        fetchData();
    },[])
    return (
        <>
            <h1>{notify}</h1>
        </>
    )
}

export default ResetPassVerify;