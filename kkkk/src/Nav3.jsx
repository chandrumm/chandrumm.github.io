import React from 'react'
import Card from 'react-bootstrap/Card' 
import Button from 'react-bootstrap/Button';
import l3 from './img/last3.jpg'
import { Container,Row, Col } from 'react-bootstrap';
import sa from './img/safety imga.webp'
import Nav21 from './Nav21';
import one from './img/one.jpg'
import two  from './img/two.jpg'
import three  from './img/three.jpg'
import fo from './img/four.jpg'
import fi from './img/five.jpg'
import six from './img/six.jpg'
import se from './img/seven.jpg'
import eig from './img/eigt.jpg'
import nin from './img/nine.jpg'
import ten from './img/ten.jpg'
import el from './img/elen.jpg'



const Nav3 = () => {
  return (
    <Container >
    <Row  >
        <Col id="mar">
        <Card style={{ width: '18rem' }} className='m-2'>
  <Card.Img variant="top" src={l3} id="s"/>
  <Card.Body>
   <Card.Title>Muffins  <small> <button id ="mas" > 4.5 <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> </button> </small> </Card.Title> 

    <Card.Text>
     Waffle, Desserts.... 
    </Card.Text>
    <Button id="nn" > BUY NOW</Button>
  </Card.Body>
</Card>

        </Col>
         
     <Col id="mar">
        <Card style={{ width: '18rem' }} className='m-2'>
  <Card.Img variant="top" src={one} id="s"/>
  <Card.Body>
   <Card.Title>Hot Breads  <small> <button id ="mas" > 4.0 <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> </button> </small> </Card.Title> 

    <Card.Text>
      Badery, Desserts
    </Card.Text>
    <Button id="nn" > BUY NOW</Button>
  </Card.Body>
</Card>

        </Col>
              <Col id="mar">
        <Card style={{ width: '18rem' }} className='m-2'>
  <Card.Img variant="top" src={two} id="s"/>
  <Card.Body>
   <Card.Title>Junior Kuppanna  <small> <button id ="mas" > 3.9 <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> </button> </small> </Card.Title> 

    <Card.Text>
   South Indian chicken..
    </Card.Text>
    <Button id="nn" > BUY NOW</Button>
  </Card.Body>
    <small> <img src={sa} alt=""  width={70} /> <small> Must ensure your food is safe</small> </small>
</Card>

        </Col>
              <Col id="mar">
        <Card style={{ width: '18rem' }} className='m-2'>
  <Card.Img variant="top" src={three} id="s"/>
  <Card.Body>
   <Card.Title>Subway   <small> <button id ="mas" > 4.2 <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> </button> </small> </Card.Title> 

    <Card.Text>
      Heathy food,Sandwich
    </Card.Text>
    <Button id="nn" > BUY NOW</Button>
  </Card.Body>
</Card>

        </Col>
              <Col id="mar">
        <Card style={{ width: '18rem' }} className='m-2'>
  <Card.Img variant="top" src={fo} id="s"/>
  <Card.Body>
   <Card.Title>Manjal  <small> <button id ="mas" > 4.1 <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> </button> </small> </Card.Title> 

    <Card.Text>
      Street food south india
    </Card.Text>
    <Button id="nn" > BUY NOW</Button>
  </Card.Body>
</Card>
   
        </Col>
              <Col id="mar">
        <Card style={{ width: '18rem' }} className='m-2'>
  <Card.Img variant="top" src={fi} id="s"/>
  <Card.Body>
   <Card.Title>Vadai  <small> <button id ="mas" > 3.8 <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> </button> </small> </Card.Title> 

    <Card.Text>
     Heathy and good for health
    </Card.Text>
    <Button id="nn" > BUY NOW</Button>
  </Card.Body>  <small> <img src={sa} alt=""  width={70} /> <small> Must ensure your food is safe</small> </small>
</Card>

        </Col>
              <Col id="mar">
        <Card style={{ width: '18rem' }} className='m-2'>
  <Card.Img variant="top" src={six} id="s"/>
  <Card.Body>
   <Card.Title>Idly  <small> <button id ="mas" > 4.6<svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> </button> </small> </Card.Title> 
       
    <Card.Text>
      Tamil nadu spl with Sambar.
    </Card.Text>
    <Button id="nn" > BUY NOW</Button>
  </Card.Body>  <small> <img src={sa} alt=""  width={70} /> <small> Our partner follows WHO protocol</small> </small>
</Card>

        </Col>
              <Col id="mar">
        <Card style={{ width: '18rem' }} className='m-2'>
  <Card.Img variant="top" src={se} id="s"/>
  <Card.Body>
   <Card.Title>A2D  <small> <button id ="mas" > 4.5 <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> </button> </small> </Card.Title> 

    <Card.Text>
      Adyar Ananda Bhavan
    </Card.Text>
    <Button id="nn" > BUY NOW</Button>
  </Card.Body>
</Card>
</Col>
    </Row>
     
       <Nav21 /> 
       
       <Row>
       <Col id="mar">
        <Card style={{ width: '18rem' }} className='m-2'>
  <Card.Img variant="top" src={eig} id="s"/>
  <Card.Body>
   <Card.Title>Brick oven  <small> <button id ="mas" > 4.7 <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> </button> </small> </Card.Title> 

    <Card.Text>
    chinese dish..
    </Card.Text>
    <Button id="nn" > BUY NOW</Button>
  </Card.Body>
</Card>
</Col><Col id="mar">
        <Card style={{ width: '18rem' }} className='m-2'>
  <Card.Img variant="top" src={nin} id="s"/>
  <Card.Body>
   <Card.Title>Maha Ganapathy   <small> <button id ="mas" > 4.1 <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> </button> </small> </Card.Title> 

    <Card.Text>
   North Indain spl..
    </Card.Text>
    <Button id="nn" > BUY NOW</Button>
  </Card.Body>
</Card>
</Col><Col id="mar">
        <Card style={{ width: '18rem' }} className='m-2'>
  <Card.Img variant="top" src={ten} id="s"/>
  <Card.Body>
   <Card.Title>Chai waale <small> <button id ="mas" > 3.9 <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> </button> </small> </Card.Title> 

    <Card.Text>
      Tee, Beverages,fastfood
    </Card.Text>
    <Button id="nn" > BUY NOW</Button>
  </Card.Body>
</Card>
</Col><Col id="mar">
        <Card style={{ width: '18rem' }} className='m-2'>
  <Card.Img variant="top" src={el} id="s"/>
  <Card.Body>
   <Card.Title>Kfc  <small> <button id ="mas" > 4 <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> </button> </small> </Card.Title> 

    <Card.Text>
     Fast food ,Burger,briyani
    </Card.Text>
    <Button id="nn" > BUY NOW</Button>
  </Card.Body>
</Card>
</Col>

       </Row>
    </Container>
  )
}

export default Nav3
