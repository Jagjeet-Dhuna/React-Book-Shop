import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './navbar.css'

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-primary">
      <Container fluid>
        <Navbar.Brand href="#" className='h1'>JA Book Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action2">Login</Nav.Link>
            <Nav.Link href="#action2">Register</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <InputGroup>
              <InputGroup.Text className='custom-search-icon'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </InputGroup.Text>
              <Form.Control
                type="input"
                placeholder="Search"
                aria-label="Search"
                className='flatinput'
              />
            </InputGroup>
          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
