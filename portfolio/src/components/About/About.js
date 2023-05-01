import { Container, Row, Col } from "react-bootstrap";
export const About = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          {/* add img next to first p? */}
          <p>
            My name is Melissa Hookey and I am a fullstack web developer who
            specializes in front end development. I'm an Austin, Texas
            transplant from San Francisco, California. I obtained my Bachelors
            of Fine Arts from Washington State University and a MERN Fullstack
            Certificate form the University of Texas.
          </p>
          <p>
            I am currently a teaching assistant for the University of Texas and
            have the privilege of teaching upocoming web developers! I love
            being creative, continously expanding my knowledge, and
            collaborating with others. In my free time I enjoy crocheting,
            exploring new resturants and spending time with friends and family.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
