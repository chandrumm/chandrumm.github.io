import { Col, Container,Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function ButtonDarkExample() {
  return (
    <Container >
    <Row  >

   
    <h1 className='mt-5'> Explore options near me</h1>


    <Col lg={6} id="kk">
    <br></br>
      <Dropdown  className='mt-4 m-5'>
        <Dropdown.Toggle id="nn">
          Popular cuisines near....
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#" id="c">
        Bakery food near me-Beverages food near me=Biryani food near me-Burger<br></br>
       food near me=Chettinad food near me=Chinese food near me-Desserts food<br></br>
         near me-Ice Cream food near me-Juices food near me.
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" id="c" >
          Pizza food near me-Sandwich=food near me-Tea food near me <br></br>
          food near me-Seafood food near me-Shake food near me-Sichuan food near <br></br>
          me-South Indian food near me-Street food near me-Tea food near me</Dropdown.Item>
    
        </Dropdown.Menu>
      </Dropdown>
      </Col> 
      <Col lg={6}  id="kk">


       <Dropdown  className='mt-3 m-5'>
        <Dropdown.Toggle id="nn">
          Popular restaurant near  ....... 
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#" id="c">
        Bakery food near me-Beverages food near me=Biryani food near me-Burger<br></br>
       food near me=Chettinad food near me=Chinese food near me-Desserts food<br></br>
         near me-Ice Cream food near me-Juices food near me.
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" id="c" >
          Pizza food near me-Sandwich=food near me-Tea food near me <br></br>
          food near me-Seafood food near me-Shake food near me-Sichuan food near <br></br>
          me-South Indian food near me-Street food near me-Tea food near me</Dropdown.Item>
    
        </Dropdown.Menu>
        
      </Dropdown>
      </Col>
      <Col lg={6} id="kk" >
       <Dropdown  className='mt-3 m-5'>
        <Dropdown.Toggle id="nn">
          Top Restarant Chains ....... 
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#" id="c">
        Bakery food near me-Beverages food near me=Biryani food near me-Burger<br></br>
       food near me=Chettinad food near me=Chinese food near me-Desserts food<br></br>
         near me-Ice Cream food near me-Juices food near me.
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" id="c" >
          Pizza food near me-Sandwich=food near me-Tea food near me <br></br>
          food near me-Seafood food near me-Shake food near me-Sichuan food near <br></br>
          me-South Indian food near me-Street food near me-Tea food near me</Dropdown.Item>
    
        </Dropdown.Menu>
        
      </Dropdown>
      </Col>
      <Col lg={6}  id="kk">
       <Dropdown  className='mt-3 m-5'>
        <Dropdown.Toggle id="nn">
           Cities We Deliver TO ....... 
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#" id="c">
        Bakery food near me-Beverages food near me=Biryani food near me-Burger<br></br>
       food near me=Chettinad food near me=Chinese food near me-Desserts food<br></br>
         near me-Ice Cream food near me-Juices food near me.
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" id="c" >
          Pizza food near me-Sandwich=food near me-Tea food near me <br></br>
          food near me-Seafood food near me-Shake food near me-Sichuan food near <br></br>
          me-South Indian food near me-Street food near me-Tea food near me</Dropdown.Item>
    
        </Dropdown.Menu>
        
      </Dropdown>
      </Col>
      <Col lg={6} id="kk">

       <Dropdown  className='mt-3 m-5'>
        <Dropdown.Toggle id="nn">
          new Restarant near me  ....... 
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#" id="c">
        Bakery food near me-Beverages food near me=Biryani food near me-Burger<br></br>
       food near me=Chettinad food near me=Chinese food near me-Desserts food<br></br>
         near me-Ice Cream food near me-Juices food near me.
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2" id="c" >
          Pizza food near me-Sandwich=food near me-Tea food near me <br></br>
          food near me-Seafood food near me-Shake food near me-Sichuan food near <br></br>
          me-South Indian food near me-Street food near me-Tea food near me</Dropdown.Item>
    
        </Dropdown.Menu>
        
      </Dropdown>
       </Col>
      </Row>
     
    </Container>
  );
}

export default ButtonDarkExample;

