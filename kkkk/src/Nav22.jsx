import React from 'react'
import { Button, Container ,Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import fri from './img/Awy4hBMasterchef-Sanjeev-Kapoor.jpg'
import sec from './img/TKheToChef-Harpal-Singh-Sokhi.jpg'
import thr from './img/yUac4SChef-Amrita-Raichand.jpg'


const Nav22 = () => {
  return (
    <Container>
     <Row>
      <Col className='m-2'>
         <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={fri} />
  <Card.Body>
    <Card.Title>Sanjeev</Card.Title>
    <Card.Text>
      Sanjeev Kapoor is known as the ‘Best Chef of India’. This award is given him by the Government of India.
    </Card.Text>
    <Button variant="primary" id="nn">About</Button>
  </Card.Body>
</Card>
      </Col>
          <Col className='m-2'>
         <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={sec} />
  <Card.Body>
    <Card.Title>Vikas Khanna</Card.Title>
    <Card.Text>
     Khanna has worked with lot of best food experts around the globe, including Gordon Ramsey, and Bobby Flay.
    </Card.Text>
    <Button variant="primary" id="nn">About</Button>
  </Card.Body>
</Card>
      </Col>
          <Col className='m-2'>
         <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={thr} />
  <Card.Body>
    <Card.Title>Madhur Jaffrey</Card.Title>
    <Card.Text>
      S the prestigious American fiddler Sanford Allen, and has three grown-up little girls by her first spouse
    </Card.Text>
    <Button variant="primary" id="nn">About</Button>
  </Card.Body>
</Card>
      </Col>
     </Row>
    </Container>
  )
}

export default Nav22
