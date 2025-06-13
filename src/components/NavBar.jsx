import CartWidget from "./CartWidget";
import CategorySelect from "./CategorySelect";
import logo from "../assets/logo-danyi.png";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function NavBar(){
  return(
    <Navbar expand="lg" className="bg-light-beige px-6 py-3">
      <Container className="flex justify-between items-center">
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo de Danyi" className="h-20" />
        </Navbar.Brand>
        <Nav className="me-auto d-flex align-items-center">
          <CategorySelect />
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  );
};