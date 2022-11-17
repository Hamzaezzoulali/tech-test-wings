import React, { useContext, useEffect, useState } from 'react'
import Header from './../layouts/Header';
import Container from './../constants/Container';
import { appendErrors, useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import '../styles/loginStyle.css'
import { login } from '../api/AuthApi';
import { Navigate, useNavigate, redirect } from 'react-router-dom';
import { asAuth } from '../api/AuthApi';
import { removeItem } from '../services/LocalStorage';
import Auth from '../contexts/Auth';
export default function Login({history}) {
    const { register,formState: { errors }, handleSubmit } = useForm();
    const {isAuth,setIsAuth} = useContext(Auth)
    const navigate = useNavigate()
    const [user,setUser] = useState({
        email:'',
        password:''
    })

    const handleChange = ({currentTarget}) => {
        const { name, value } = currentTarget;
        setUser({...user, [name]: value})
    }

    const onSubmit = () => {
        const resp = login(user)
        if(resp){
            setIsAuth(resp)
            navigate('/',{replace:true})
        } else {
            toast("email/mot de passe incorect",{theme: "colored",position: 'bottom-right'})
        }
    };

  
    return (
        <>
      <Header/>
      <Container>
        <div className='loginCard'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='divtitle'>
                    <h3 className='loginTitle' >Login</h3>
                </div>
                
                <div className='divEmail'>
                    <span className='logintitleinput'>email</span>
                    
                    <input 
                        {...register('email', {
                            required:true,
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Format email wrong',
                            },
                        })}
                        aria-invalid={errors.email ? "true" : "false"} 
                        className='loginInputStyle' 
                        type="text" 
                        name="email" 
                        placeholder='email@example.com' 
                        onChange={handleChange}
                    />
                    {errors.email?.type === 'required' && <span className='ErrorMsg'>Email required</span>}
                    {errors.email?.message  && ( <span className='ErrorMsg'>{errors?.email?.message} </span> )}
                </div>

                <div className='divPassword'>
                    <span  className='logintitleinput'>Password</span>
                    <input 
                        {...register("password", {
                            required:true,
                            minLength:6
                        })}
                        aria-invalid={errors.password ? "true" : "false"} 
                        className='loginInputStyle' 
                        type="password" 
                        name="password" 
                        placeholder='password'
                        onChange={handleChange}
                    />
                    {errors.password?.type === 'required' && <span className='ErrorMsg'>Password required</span>}
                    {errors.password?.type === 'minLength'  && ( <span className='ErrorMsg'>Min 6 characters</span> )}
                </div>

                <div className='divtitle'>
                    <input 
                        type="submit" 
                        className='loginButton'
                        value={"Login"}
                    />
                </div>
            </form>
        </div>
      <ToastContainer />
      </Container>
      </>
    )
}
