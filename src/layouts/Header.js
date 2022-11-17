import React, { useContext, useState } from 'react'

import { useNavigate } from 'react-router-dom';

import Container from './../constants/Container';
import '../styles/headerStyle.css'
import Auth from '../contexts/Auth';
import { logout } from '../api/AuthApi';



export default function Header() {
  const navigate = useNavigate()
  const {isAuth,setIsAuth} = useContext(Auth)

  const hendleLogout = () =>{
    logout()
    setIsAuth(false)
    navigate('/Login')
    
  }

  return (
        <div className='headerContain'>
            <div>
               <h2 className='headerMenulogotxt'>Logo</h2>
            </div>
            <div className='headerMenu' >
              <span  
                onClick={() =>{
                  navigate('/')
                }} 
                className='headerMenuitem' 
              >
                  Home
              </span>

              {isAuth && 
               <span  
                onClick={() =>{
                  navigate('/posts')
                }} 
                className='headerMenuitem'  >
                  Posts
               </span>
              }
              {isAuth  ? 
                  <span  
                    onClick={hendleLogout} 
                    className='headerMenuitemRound' >
                      Logout
                  </span>
              : 
                  <span  
                    onClick={() =>{
                      navigate('/Login')
                    }} 
                    className='headerMenuitemRound' >
                      Login
                  </span>
              }
            </div>
            
        </div>

  )
}
