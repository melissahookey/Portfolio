import { Container, Row, Col, Card, Button } from "react-bootstrap";
export const Projects = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            {/* add project links to imgs */}
            {/* projects to add - weather app, fitter, and something else */}
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
