import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Delivery = () => {
  return (
    <Container>
    <h1> A seamless ordering experience form start to finish </h1>
      <br />
      <Link to='/m'  id='link'> <h3> order...</h3></Link>
      <Link to='/pay' id='link'><h3>payment..</h3></Link>
      <Link to='/delivery' id='link'> <h3>delivery</h3></Link>
      <hr />
      <h1><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16">
  <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5"/>
</svg></h1>
<h5> Premium support </h5>
<Container> 
<address>
    Get access to premium support agents 24/7 <br></br>
    either by phone or live chat. The us number <br>
    </br> is 808-253-9377.
</address>
</Container>
<Link to='/your' id="nas"> <b> YOUR RESTATURNT </b></Link>
    <Link to='/' id="nas"> Home</Link>
<br />
<br />
    </Container>
  )
}

export default Delivery
