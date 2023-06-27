import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../Projects/Projects.css";
import fitterImg from "../../images/fitter.png";
import triviaImg from "../../images/trivia.png";
import weatherImg from "../../images/weather.png";

export const Projects = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={4}>
          <Card>
            <Card.Img variant="top" src={fitterImg} href="#" target="_blank" />
            <Card.Body>
              <Card.Text>Fitter</Card.Text>
              <Button
                class="btn rounded"
                href="https://github.com/yummy314159265/Fitter"
                target="_blank"
              >
                Read More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card>
            <Card.Img variant="top" src={triviaImg} href="#" target="_blank" />
            <Card.Body>
              <Card.Text>Endless Trivia</Card.Text>
              <Button
                class="btn rounded"
                href="https://github.com/AJLosey/trivia-database"
                target="_blank"
              >
                Read More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card>
            <Card.Img variant="top" src={weatherImg} href="#" target="_blank" />
            <Card.Body>
              <Card.Text>Weather Dashboard</Card.Text>
              <Button
                class="btn rounded"
                href="https://github.com/melissahookey/06-HW-Weather-Dashboard"
                target="_blank"
              >
                Read More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
