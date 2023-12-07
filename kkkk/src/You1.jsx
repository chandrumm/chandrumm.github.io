import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'
import y from './img/alpha.jpg'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap'


const Your = () => {
  return (
    <div>
    <Link to='/' id="nas"> Home</Link>
       <Link to='/nav2' id="nas"><b>Orderings</b> </Link>
      <Link to='/your' id="nas"> <b>YOUR RESTATURNT </b></Link>
      <Link to='/delivery'id="nas"> <b>DELIVERY </b></Link>
  <br></br>
  <br></br>
       <h1 > ##YOUR RESTATURNT </h1>
       <br></br>
      <Container fluid>
      <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={y}
      alt="First slide"
      width={40}
      height={550}
    />
    <Carousel.Caption>
      <h1 id="ss">Unlock a new revenue stream </h1>
      <p id="ss">connect with more customer and grow your business on your terms . partner with us today </p>
     <Button> Sign up  </Button> <br /><br />
     <Button> Log in </Button>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
</Container>
    </div>
  )
}

export default Your
