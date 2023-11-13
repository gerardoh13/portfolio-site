import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      variant="dark"
      className="border-bottom"
    >
      <Nav.Link to="/" eventKey={6} as={Link} className="navbar-brand ms-2">
        <i className="bi bi-code-slash"></i> Gerardo HUERTA
      </Nav.Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto" activeKey="/">
          <Nav.Link to="/skills" eventKey={1} as={NavLink}>
            <i className="bi bi-file-earmark-text-fill mx-2"></i>
            Skills
          </Nav.Link>
          <Nav.Link to="/projects" eventKey={2} as={NavLink}>
            <i className="bi bi-file-earmark-text-fill mx-2"></i>
            Projects
          </Nav.Link>
          <Nav.Link to="/experiences" eventKey={3} as={NavLink}>
            <i className="bi bi-file-earmark-text-fill mx-2"></i>
            Experiences
          </Nav.Link>
          <Nav.Link to="/resume" eventKey={4} as={NavLink}>
            <i className="bi bi-file-earmark-text-fill mx-2"></i>
            Resume
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link to="/" eventKey={6} as={NavLink} className="me-4">
            <i className="bi bi-moon-fill mx-2"></i>
            Theme
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Navigation;
