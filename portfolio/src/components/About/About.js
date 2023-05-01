import { Container, Row, Col } from "react-bootstrap";
import "../About/About.css";
export const About = () => {
  return (
    <Container fluid>
      <Row>
        <Col>
          <div id="allAbout">
            {/* add img next to first p? */}
            <p class="aboutP">
              My name is Melissa Hookey and I am a fullstack web developer who
              specializes in front end development. I'm an Austin, Texas
              transplant from San Francisco, California. I obtained my Bachelors
              of Fine Arts from Washington State University and a MERN Fullstack
              Certificate form the University of Texas.
            </p>
            <p class="aboutP">
              I am currently a teaching assistant for the University of Texas
              and have the privilege of teaching upocoming web developers! I
              love being creative, continously expanding my knowledge, and
              collaborating with others. In my free time I enjoy crocheting,
              exploring new resturants and spending time with friends and
              family.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
