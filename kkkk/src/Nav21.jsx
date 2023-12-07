import React from 'react'
import Image from 'react-bootstrap/Image';
import al from './img/Almond-Crusted-Chicken.jpg'
import { Container,Row, Col } from 'react-bootstrap';
import ed from './img/edited3.jpg'

const Nav21 = () => {
  return (
    <Container fluid>
   
  
    <Container >
     <h1 id="cen"> Our <span id="n">special </span>dishes </h1>
       <br></br>
    <Row className='justify-content-center align-items-center m-3'  >
    
        <Col md={5}  >
    <b><h1>01------------</h1></b>    
     <h3> Almond crusted chicken </h3>
     <h6> Include this delightful protein filled starter in your dinner menu
      and win the hearts of your loved ones. The crushed almond 
     coating makes it crispier.</h6>
      
        </Col>
        <Col md={5}><Image src={al} fluid width={350}  className='mb-3'/></Col>
        <Col md={5}><Image src={ed} fluid width={350} /></Col>
        <Col>
         <b><h1>01------------</h1></b> 
          <h3> Chicken and Apple Sandwich</h3>
     <h6> The softness of chicken mince and crunch of apple and celery mingle well in these delicious sandwiches</h6>
        </Col>

    </Row>
    </Container>


    </Container>
  )
}

export default Nav21
