import React from 'react'
import { Container ,Row, Col } from 'react-bootstrap'
import Figure from 'react-bootstrap/Figure'
import a from './img/CustomersOrder-_1_.png'
import ag from './img/YouPrepare.jpg'
import ags from './img/DeliveryPeopleArrive.jpg'

const You2 = () => {
  return (
    <Container>
        <br></br>
       <h2> Why Mr.Bean Eats ?</h2>
        <br></br>
        <Row>
            <Col lg={4}>
                <h3>
                    Deliver your way
                </h3>
                <br></br>
                <h6>
                    Our offerings are flexible so you can customize them to your needs.
                     Get started with your delivery people or connect with delivery people through the Uber platform.
                </h6>
            </Col>
            <Col lg={4}> 
            <h3>Boost your visibility</h3>
             <br></br>
            <h6>Stand out with in-app marketing to reach even more customers and increase sales. </h6></Col>
            <Col lg={4}>
                <h3>Connect with customers </h3>
                 <br></br>
                <h6> Turn customers into regulars with actionable data insights, respond to reviews or offer a loyalty program.</h6>

            </Col>
        </Row>
        <Container>
 <br></br>
            <h2> How MR.BEAN Eats works for restaurant partners</h2>
            <Row>
                <Col md={4}>
                <Figure>
  <Figure.Image
    width={300}
    height={300}
    alt="171x180"
    src={a}
  />
  <Figure.Caption>
    <h4> Customer order</h4>
    <small> A customer finds your restaurant and places an order through the mr bean app</small>
  </Figure.Caption>
</Figure>
            
                </Col>
                 <Col md={4}>
                <Figure>
  <Figure.Image
    width={300}
    height={300}
    alt="171x180"
    src={ag}
  />
  <Figure.Caption>
    <h4> Customer order</h4>
    <small> A customer finds your restaurant and places an  order through the mr bean app</small>
  </Figure.Caption>
</Figure>
            
                </Col>
                 <Col md={4}>
                <Figure>
  <Figure.Image
    width={300}
    height={300}
    alt="171x180"
    src={ags}
  />
  <Figure.Caption>
    <h4> Customer order</h4>
    <small> A customer finds your restaurant and places an  order through the mr bean app</small>
  </Figure.Caption>
</Figure>
            
                </Col>
            </Row>
        </Container>

      
       
    </Container>
  )
}

export default You2
