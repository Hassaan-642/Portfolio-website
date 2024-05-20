import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const NavBar = () => (
  <Navbar
    expand="lg"
    variant="dark"
    style={{
      backgroundColor: "#0a3d62", 
      borderBottom: "2px solid #2980b9",
    }}
  >
    <Container>
      <Navbar.Brand
        as={Link}
        to="/"
        style={{
          color: "#fff",
          fontSize: "24px",
          fontWeight: "bold",
        }}
      >
        Portfolio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ border: "none" }}>
        <FaBars style={{ color: "#fff" }} />
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link
            as={Link}
            to="/"
            style={{
              color: "#fff",
              fontSize: "18px",
              textDecoration: "none",
              marginLeft: "15px",
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/skills"
            style={{
              color: "#fff",
              fontSize: "18px",
              textDecoration: "none",
              marginLeft: "15px",
            }}
          >
            Skills
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/projects"
            style={{
              color: "#fff",
              fontSize: "18px",
              textDecoration: "none",
              marginLeft: "15px",
            }}
          >
            Projects
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/contact"
            style={{
              color: "#fff",
              fontSize: "18px",
              textDecoration: "none",
              marginLeft: "15px",
            }}
          >
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavBar;
