import { Container, Row, Col } from "react-bootstrap";
import "../Fitter/Fitter.css";
export const Fitter = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div className="mx-xs-1" id="caseStudy">
            {/* move repo link here */}
            <p id="intro">
              Fitter is a clone of Twitter designed for people who are fitness
              enthusiasts and want to connect with like-minded people. The
              requirements for this project entailed using; React, GraphQL,
              MongoDB and a third party API. My team and I had one week to build
              and deploy Fitter.
            </p>
            {/* ADD: wireframe, user flow and images */}
            <p id="solution">
              I was lead of front end technologies for this application. We
              wanted a clean and simple UI that would be easy for users to
              navigate. I decided to use the Chakra UI library to execute our
              desired aesthetic. I really enjoyed establishing a theme and
              executing it across all pages and components.
            </p>
            <p id="reflect">
              One of our biggest challenges was our tight timeline. We decided
              to narrow down our project's scope to ensure that Fitter was fully
              functional and beautiful. Collaborating with my team was a
              highlight of this project, we all were very passionate about
              producing the best application possible.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Fitter;
