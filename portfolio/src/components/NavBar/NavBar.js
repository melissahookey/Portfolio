import { Navbar, Container, Nav } from "react-bootstrap";
import { Envelope, Linkedin } from "react-bootstrap-icons";
import Pdf from "../../documents/Resume.pdf";

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Melissa Hookey</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href={Pdf} target="_blank">
            Resume
          </Nav.Link>
          <Nav.Link href="#email">
            <Envelope></Envelope>
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/melissahookey/">
            <Linkedin></Linkedin>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
