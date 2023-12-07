import Carousel from 'react-bootstrap/Carousel';
import E from "./img/food 1.jpg"
import F from "./img/food 2.jpg"
import G from "./img/food 3.jpg"
// import Navthre from './Navthre';
import { Container ,Row, Col} from 'react-bootstrap';
// import { useState } from 'react';

 function UncontrolledExample() {
//     const[m]=useState([1,2,3,4,5,6])
  return ( 
    <Container fluid  >
    <Row className='justify-content-center align-items-center'>
    <Col lg={11} >
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={E}
      alt="First slide"
      height={600}
      
    />
    <Carousel.Caption>
      <h1>Mr.BEAN </h1>
      <h2>Nulla vitae elit libero, a pharetra augue mollis interdum.</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={G}
      alt="Second slide"
      height={600}
    />

    <Carousel.Caption>
      <h1>Mr.BEAN</h1>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={F}
      alt="Third slide"
      height={600}
    />

    <Carousel.Caption>
      <h1 >Mr.BEAN</h1>
      <h2>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h2>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

 {/* <Container >
    <Row xs={12} md={12} xxl={4}>
    {
      m.map((item)=>{
        return(
          <Col> <Navthre /> 
          </Col>
          )
          
      })
    }
    </Row>
    </Container> */}
    </Col>

    </Row>
</Container>
  );
}

export default UncontrolledExample;