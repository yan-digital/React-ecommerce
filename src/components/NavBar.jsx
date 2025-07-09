import CartWidget from './CartWidget'
import CategorySelect from './CategorySelect'
import logo from '../assets/logo-danyi.png'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router'

export default function NavBar(){
  return(
    <Navbar expand="lg" className="bg-light-beige px-6 py-3">
      <Container className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo de Danyi" className="h-20" />
        </Navbar.Brand>
          <Nav className="me-3">
            <CategorySelect />
          </Nav>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav"/>

      <CartWidget />
      </Container>
    </Navbar>
  );
};