import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Delivery from './Delivery';
const Odering = () => {
  return (
    <Container>
       <h1> A seamless ordering experience form start to finish </h1>
      <br />
      <Link to='/m'  id='link'><h3> order...</h3> </Link>
      <Link to='/pay' id='link'><h3>payment..</h3></Link>
      <Link to='/delivery' id='link'> <h3>delivery</h3></Link>
      <hr />
      <h1><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box2-heart" viewBox="0 0 16 16">
    <path d="M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982"/>
    <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5Zm0 1H7.5v3h-6zM8.5 4V1h3.75l2.25 3zM15 5v10H1V5z"/>
     </svg></h1>
     <h5> Mutiple carts</h5>
     <Container>
     <p className='justify-content-center align=-items-center'> Create or participate in mutiple orders at <br /> once and easily view all carts from the uber <br></br>Eats app or site from one place</p>
      </Container>
      
<Link to='/your' id="nas"> <b> YOUR RESTATURNT </b></Link>     <Link to='/' id="nas"> Home</Link>
<br /><br />
    </Container>
  )
}

export default Odering
