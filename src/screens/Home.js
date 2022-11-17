import React, { Component } from 'react'

import Container from '../constants/Container'
import Header from '../layouts/Header'
import '../styles/homeStyle.css'



export default class Home extends Component {
  
  render() {
    return (
      <>
      <Header />
      <Container>
        <h2 className='titleStyle'>Home</h2>
      </Container>
      </>
    )
  }
}
