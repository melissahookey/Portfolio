import { Container, Row, Col } from "react-bootstrap";
import "../Trivia/Trivia.css";
export const Trivia = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="mx-xs-1" id="caseStudy">
            {/* move repo link here */}
            <p id="intro"></p>
            {/* ADD: wireframe, user flow and images */}
            <p id="solution"></p>
            <p id="reflect"></p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Trivia;
