import React from 'react'
import a from './img/last.jpg'
import { Container ,Row,Col } from 'react-bootstrap'
import o from './img/icon1.jpg'
import ic from './img/icon2.jpg'
import ico from './img/icon3.jpg'
import n from './img/icon4.jpg'
import nn from './img/icon5.jpg'
const Laseone = () => {
  return (
    <Container fluid>

    <Row>
      <Col sx={4} className='mt-2'>        
    <img src={a} alt="" id="ha" width={150} />
      </Col>

        <Col sx={4}>
        
    <img src={o} alt="" id="ha" width={150} />
      </Col>
        <Col sx={4}>
        
    <img src={ic} alt="" id="ha" width={150}/>
      </Col>
        <Col sx={4}>
        
    <img src={ico} alt="" id="ha" width={150} />
      </Col>
        <Col sx={4}>
        
    <img src={nn} alt="" id="ha" width={150} />
      </Col>

    <Col sx={4}>
        
    <img src={n} alt=""  id="ha" width={100} />
      </Col>
      
      

    </Row>
      
    
    </Container>
  )
}

export default Laseone

