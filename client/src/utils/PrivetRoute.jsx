import React from 'react'
import { useSelector } from 'react-redux'
import { isCheckAuth } from '../redux/slice/authSlice';
import {Navigate, Outlet} from 'react-router-dom'

const PrivetRoute = () => {
    const isAuth = useSelector(isCheckAuth);
    return (
        isAuth ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivetRoute