import React, { useContext } from 'react'
import { Outlet, Navigate, Route } from 'react-router-dom'
import Auth from '../contexts/Auth'

const ProtectedPostsRoute =() =>{
    const {isAuth} = useContext(Auth)
        return isAuth ? (
                <Navigate to={"/"}/>
        ) : (
                <Outlet/>
            )
    }

export default ProtectedPostsRoute