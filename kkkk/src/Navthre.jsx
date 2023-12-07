import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import a from "./img/Untitled.jpg"
import b from "./img/Screenshot (268).png"
import c from "./img/Screenshot (270).png"
import { Container ,Row,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function BasicExample() {
 
 
  return (
    <Container className='bac'>
    <Row xs={12} md={12} xxl={4} >
<Col>
     <Card style={{ width: '18rem' }}  className='m-2'>
      <Card.Img variant="top" src={a} />
      <Card.Body>
        <h3> Order online</h3>
        <Card.Text>
         <h5> Stay home and order to your doorstep</h5>
        </Card.Text>
      <Button>ORDER</Button> 

      </Card.Body>

    </Card>
     </Col>
     <Col>

     <Card style={{ width: '18rem' }}  className='m-2'>
      <Card.Img variant="top" src={b} />
      <Card.Body>
        <h3>Dining </h3>
        <h5>
         View the city's favourit dining venues
        </h5>
        <Button >ORDER</Button>
      </Card.Body>
    </Card>
    </Col>
         <Col>

     <Card style={{ width: '18rem' }}  className='m-2'>
      <Card.Img variant="top" src={a} />
      <Card.Body>
        <h3>Nightlife & Clubs</h3>
        <h5>
          Explore the city's top nightlife outlets
        </h5>
        <Button > ORDER</Button>
      </Card.Body>
    </Card>
    </Col>
         <Col>

     <Card style={{ width: '18rem' }}  className='m-2'>
      <Card.Img variant="top" src={c} />
      <Card.Body>
        <h3>Party Night</h3>
        <h5>
        Enjoy your party with friendss...
          
        </h5>
        <Button >ORDER</Button>
      </Card.Body>
    </Card>
    </Col>

  </Row>
</Container>
    
    
  );
}

export default BasicExample;