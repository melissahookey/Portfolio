import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../Projects/Projects.css";
import FillerImg from "../Images/filler.jpg";

export const Projects = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            {/* add project links to imgs */}
            {/* projects to add - weather app, fitter, and something else */}
            <Card.Img variant="top" src={FillerImg} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button class="btn rounded" href="#">
                Read More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={FillerImg} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button class="btn rounded" href="#">
                Read More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={FillerImg} />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button class="btn rounded" href="#">
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
