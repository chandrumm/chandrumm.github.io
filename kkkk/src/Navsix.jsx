import Figure from 'react-bootstrap/Figure';
import ii from './img/IMG_20231123_083651.jpg'
import { Container ,Row,Col } from 'react-bootstrap';
import ik from './img/IMG_20231123_083610.jpg'
import ig from './img/navfith 2.jpg'
import ih from './img/IMG_20231123_090230.jpg'
function FigureExample() {
  return (
    <Container>   
    <h1>
        Collections
    </h1>
    <h4> Eplore curated list of top restaurants,cafes, pubs and bar in chennai,based on trends</h4>
    <br />
    <Row>
    <Col md={4} sm={6} lg={3}>
     <Figure>
      <Figure.Image
        width={250}
       
        alt="171x180"
        src={ii}
        id ="ii"
      />
      <Figure.Caption>
        12 Newly opened restaurants

      </Figure.Caption>
    </Figure>
    </Col> 
    <Col md={4}  sm={6} lg={3}>
     <Figure>
      <Figure.Image
        width={250}
      
        alt="171x180"
        src={ik}
        id ="ii"
      />
      <Figure.Caption>
    16 Must-visit Legendary Places
      </Figure.Caption>
    </Figure>
    </Col>
    <Col md={4} sm={6} lg={3}>
     <Figure>
      <Figure.Image
        width={250}
        
        alt="171x180"
        src={ig}
        id ="ii"
      />
      <Figure.Caption>
     12 Picturesque Cafes
      </Figure.Caption>
    </Figure>
    </Col>
    <Col md={4} sm={6} lg={3}>
     <Figure>
      <Figure.Image
        width={250}
       
        alt="171x180"
        src={ih}
        id ="ii"
      />
      <Figure.Caption>
    7 Sea View Dining Places
      </Figure.Caption>
    </Figure>
    </Col>
    </Row>
    </Container>

  );
}

export default FigureExample;