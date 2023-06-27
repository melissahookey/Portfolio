import { Container, Row, Col } from "react-bootstrap";
import "../Contact/Contact.css";
export const Contact = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="mx-xs-1" id="allContact">
            <p class="ContactP">You can reach me at melissah315@gmail.com</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
