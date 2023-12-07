import React from 'react'
import { Container,Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import deli from './img/DianaYin.webp'
import dal from './img/WelcomeToUberEats.webp'
import Accordion from 'react-bootstrap/Accordion';

const You3 = () => {
  return (
     <div>
    <Container id="blac">
    <br />
    <Row className='justify-content-center align-items-center m-3'>
        <Col md={6}>
            <h4>
"MR. BEAN Eats extends our <br></br> brand awareness to <br></br>neighborhoods that  <br></br>
wouldn't normally be exposed to us."</h4>
    <li> Diana Yin</li>
    <h5>Owner, Poppy + Rose, Los Angeles </h5>
        </Col>
     
         <Col md={6}>
            
      <Image src={deli} rounded  id='lu'/>
    </Col>
    </Row>
  
      
    </Container>

   


        <Container>
      <Row className='justify-content-center align-items-center m-3' >
        <Col lg={5}>
        <br></br>
    <Image src={dal} rounded  id='lu'/>
        </Col>
        <br></br>
        <Col lg={4}> 
           <br></br><h2> Get started in jest 3 steps</h2>
        <ol>
          <li> l us about your restaurant.</li>
          <li>Upload your menu.          </li>
          <li>Access Restaurant Dashboard and go live!</li>
        </ol>
</Col>
      </Row>

    </Container>
    <br></br>
      <br></br>
        <br></br>
      
      <Container>
        <h1>Questions? We have got answers</h1>
        <br></br>
         <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>How long does it take to become a partner?</Accordion.Header>
        <Accordion.Body>
     Depending on how many locations you have, it’s possible to become an Mr.bean Eats restaurant partner and start accepting orders in just a few days! You can begin the process by signing up here. We’re excited to hear from you.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How does pricing work?</Accordion.Header>
        <Accordion.Body>
         Mr.bean Eats pricing has two parts. A one-time activation fee sets restaurants up with a welcome kit, tablet, restaurant software, and professional photo shoot. A service fee is calculated as a percentage of each restaurant order made through Mr.bean Eats. Want more details? Email restaurants@mrbean.com and we’ll get back to you.
         
        </Accordion.Body>
      </Accordion.Item>
       <Accordion.Item eventKey="2">
        <Accordion.Header>Who handles each delivery?</Accordion.Header>
        <Accordion.Body>
         The Mr.bean platform can connect you with independent drivers, bike and scooter riders, and walkers who deliver to your customers. Because of the network of delivery people using the Mr.bean platform, restaurants don’t have to keep their own delivery staff. But if you do have your own staff, we’re flexible—you can use them too. Reach out to restaurants@.commrbean or directly to your Mr.bean Eats contact to see if this option is now available in your city.
         
        </Accordion.Body>
      </Accordion.Item>
       <Accordion.Item eventKey="3">
        <Accordion.Header>What is the delivery radius?</Accordion.Header>
        <Accordion.Body>
         This varies from city to city. We can assess delivery coverage and your location to help define the right area for your restaurant.
        </Accordion.Body>
      </Accordion.Item>
       <Accordion.Item eventKey="4">
        <Accordion.Header>What kinds of Mr.bean Eats tools do restaurant partners receive?</Accordion.Header>
        <Accordion.Body>
        A tablet with Uber Eats Orders helps restaurant partners keep track of new orders, and manage deliveries daily. Uber Eats Manager software gives deeper access to menus, payment information, sales data, and customer insights. We’ve got a tech team making sure both tools are up to speed and running smoothly every day.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </Container>

    </div>
  )
}

export default You3
