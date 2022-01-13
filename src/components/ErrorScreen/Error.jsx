import React from "react";
import "./style.css";
import Error404 from "../../images/error2.svg";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";

const Error = () => {
  return (
    <Container fluid="lg">
      <Row className="rows">
        <Col className="cols">
          <img
            src={Error404}
            alt="Error"
            className="error"
            style={{ width: "100%", height: "100%" }}
          ></img>
        </Col>
        <Col>
          <div className="desc">
            <h1>Whoops! Lost in Space</h1>
            <p>The page you're looking for isn't found :(</p>
            <p>We suggest you to back Home</p>
          </div>
          <Nav.Link className="nav-link" href="/">
            <Button>HOME</Button>
          </Nav.Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Error;
