import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Linkedin, Github } from "react-bootstrap-icons";
import Pdf from "../../documents/Resume.pdf";
import "../NavBar/NavBar.css";

export const NavBar = () => {
  return (
    // bg="dark" variant="dark"
    <Navbar Id="navbar">
      <Container>
        <Navbar.Brand>Melissa Hookey</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href={Pdf} target="_blank">
            Resume
          </Nav.Link>
          <Nav.Link href="https://github.com/melissahookey" target="_blank">
            <Github></Github>
          </Nav.Link>
          <Nav.Link
            href="https://www.linkedin.com/in/melissahookey/"
            target="_blank"
          >
            <Linkedin></Linkedin>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
