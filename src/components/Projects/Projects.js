import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../Projects/Projects.css";
import fitterImg from "../../images/fitter.png";
import gameImg from "../../images/game.png";
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
                href="https://github.com/melissahookey/Fitter"
                target="_blank"
              >
                Github
              </Button>
              <Button
                class="btn rounded"
                href="https://fitter.onrender.com"
                target="_blank"
              >
                Deployment
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={4}>
          <Card>
            <Card.Img variant="top" src={gameImg} href="#" target="_blank" />
            <Card.Body>
              <Card.Text>SpaceCrash</Card.Text>
              <Button
                class="btn rounded"
                href="https://github.com/melissahookey/SpaceCrash"
                target="_blank"
              >
                Github
              </Button>
              <Button
                class="btn rounded"
                href="https://melissahookey.itch.io/spacecrash"
                target="_blank"
              >
                itch.io
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
                Github
              </Button>
              <Button
                class="btn rounded"
                href="https://melissahookey.github.io/06-HW-Weather-Dashboard/"
                target="_blank"
              >
                Deployment
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
