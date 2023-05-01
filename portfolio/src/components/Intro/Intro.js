import { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Typed from "typed.js";
import "../Intro/Intro.css";
export const Intro = () => {
  const el = useRef(null);
  // think of more to add to the array lol
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["web developer", "creative", "graphic desinger"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 150,
      backDelay: 150,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col>
          <p class="introP">
            {" "}
            Hello, I'm a <br /> <span ref={el}></span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};
