import { Container, Row, Col, Card, Button } from "react-bootstrap";
export const About = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          {/* add img next to first p? */}
          <p>
            My name is Melissa Hookey and I am a fullstack web developer who
            specializes in front end development. I'm an ATX transplant from
            California.
          </p>
          <p>
            I love being creative and continously expanding my knowledge. In my
            free time I enjoy crocheting, exploring new resturants and spending
            time with friends and family.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
