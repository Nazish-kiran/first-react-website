import React from "react";
import "../App.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/oodi.png";
 import fLogo from "../assets/F.png"
function Mynavbar() {
  return (
    <Navbar expand="lg" className="">
      <Container>
        <Navbar.Brand href="#home" className="d-flex align-items-center gap-1">
          <div className="green p-1 rounded-1">
            <img src={fLogo} alt="" className="" />
          </div>
          <img src={logo} alt="" className="w-100 h-100"  />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
          <Nav className="me-auto gap-4">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Offers</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className="nav__left">
          <div className="nav__bag">

          </div>
          <div className="nav__search"></div>
          <button className="btn contact-btn rounded-pill">Contact</button>
        </div>
      </Container>
    </Navbar>
  );
}

export default Mynavbar;
