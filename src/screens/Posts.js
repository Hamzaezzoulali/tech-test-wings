import axios from 'axios'
import React, { useEffect, useState } from 'react'

import BeatLoader from "react-spinners/BeatLoader";
import { ToastContainer,toast } from 'react-toastify';

import Card from '../components/Cards/Card'
import Container from '../constants/Container'
import Header from '../layouts/Header'
import '../styles/postsStyles.css'



export default function Posts() {
    const [Data,setData] = useState([])
    const [isLoading,setIsloading] = useState(false)
    const [isError,setisError] = useState(false)

    
    const loadData = async ()  =>{
        setIsloading(true)
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) =>{
                console.log(response.data)
                setData(response.data)
                setIsloading(false)
            })
            .catch((error) =>{
                setIsloading(false)
                setisError(true)
            })
    }

    useEffect(() =>{loadData()},[])

  return (
    <>
      <Header/>
      <Container>
        <div className='titleDivStyle' >
            <h2 className='titleStyle'>Posts</h2>
        </div>
            {isLoading? 
            <BeatLoader color="#fe5454" />
            :
            <div className='cardsStyle'> 
                {Data.map(value =>(
                    <Card
                    key={value.id}
                    title={value.title}
                    content={value.body}
                    />
                ))}
            </div>
            }
            {isError&& 
                <h2 className='titleErrorStyle'>Error API !</h2> 
            }
      <ToastContainer />
      </Container>
    </>
  )
}

