import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './../screens/Home';
import Login from './../screens/Login';
import Posts from './../screens/Posts';
import { asAuth } from '../api/AuthApi';
import Auth from '../contexts/Auth';
import ProtectedPostsRoute from './ProtectedPostsRoute'
import ProtectedLoginRoute from './ProtectedLoginRoute'




export default function AppNavigation() {
    const [isAuth,setIsAuth] = useState(asAuth())
    return(
        <Auth.Provider value={{isAuth,setIsAuth}}>
            <Routes>
                    <Route index path="/" element={<Home />} />
                     <Route path="/Login" element={<ProtectedLoginRoute />} > 
                        <Route  path="/Login" element={<Login />} />
                    </Route>
                    <Route path="/posts" element={<ProtectedPostsRoute />} >
                        <Route path="/posts" element={<Posts />} />    
                    </Route>
                    <Route path="*" element={<Home />} />
            </Routes>
        </Auth.Provider>
        
      )
}
