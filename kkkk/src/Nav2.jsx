import React from 'react'
import Laseone from './Laseone';

import { Container } from 'react-bootstrap';
import Nav3 from './Nav3';

import { Link } from 'react-router-dom';
import Nav22 from './Nav22';

const Nav2 = () => {
  return (
    <div>
    <Link to='/' id="nas"> Home</Link>
      <Link to='/nav2' id="nas"> <b>Orderings</b> </Link>
      <Link to='/your' id="nas"><b> YOUR RESTATURNT</b></Link>
       <Link to='/delivery'id="nas"> <b>DELIVERY </b></Link>
   <br></br><br></br>
    <Container fluid  > <h1> ORDER ONLINE </h1> </Container>
   <br></br>
      <Container><h4>** TOP BRANDS FOR YOU **</h4> </Container>
      <Laseone />
         <br></br>
         <Container> <h3>Order food online in Pondy Bazaar, T Nagar, Chennai</h3></Container>
      
         <br></br>
     <Nav3 />    <br></br>
     
  <Nav22 />
   <Link to='/' id="nas"> move    backforwad</Link>
         <Link to='/your' id="nas"><b> YOUR RESTATURNT DELIVERED </b></Link>
          <Link to='/delivery'id="nas"> <b>DELIVERY </b></Link>
   <br></br>
   <br></br>
    </div>
  )
}

export default Nav2
