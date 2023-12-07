import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavScrollExample() {
  return (
    <Navbar expand="lg" >
      <Container fluid className='a'>
        <Navbar.Brand href="#" id="a">Get the app</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-3 my-lg-0"
            style={{ maxHeight: '120px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" id="a">Investor Relations</Nav.Link>
            <Nav.Link href="#action2" id="a">Add restaurant</Nav.Link>
           
            <Nav.Link href="#" id="a"> 
              Login 
            </Nav.Link>
             <Nav.Link href="#"  id="a">
              Sign up
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search "
              className="me-3 p-2"
              aria-label="Search"
              id="na"
            />
            <Button id="v" > Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;