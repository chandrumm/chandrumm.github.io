import { Container ,Row, Col} from 'react-bootstrap';
import Figure from 'react-bootstrap/Figure';
import i from './img/Unt.jpg'

function FigureExample() {
  return (
    <Container fluid id="nnm">
    <Row className='justify-content-center align-items-center'>
    <Col sm={3}>
    <Figure  id="in">
      <Figure.Image
        width={250}
        height={500}
        alt="171x180"
        src={i}
        id="i"
      />
    </Figure>
    </Col>
    <Col sm={5}>
    
    <div>
    <h1> Get MS.BEAN app</h1>
    <p> We will send you a link .open it on your phone to download the app</p>
       <input type="radio" id=" name" name="name"/>
       <label htmlFor="" id="name"> <h4>Email</h4></label>
       <input type="radio" id="name" name="name"/>
       <label htmlFor="" id='name'> <h4> Phone</h4></label>
       <div>
       <input type="text" placeholder='ENTER VALUE'  id="name"/>
       <button id="nm" >  Share App Link </button>
            </div>
            <p> Dowload app from</p>
    </div>
    </Col>
    </Row>
    </Container>
  )

}

export default FigureExample;