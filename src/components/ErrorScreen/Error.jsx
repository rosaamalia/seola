import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";
import Error404 from "../../images/error2.svg";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";

const Error = () => {
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center align-items-center">
        <Col className="col-6">
          <img
            src={Error404}
            alt="Error"
            className="error"
            style={{ width: "80%" }}
          ></img>
        </Col>
        <Col className="col-6">
          <div className="desc">
            <h1>Whoops! Lost in Space</h1>
            <p>The page you're looking for isn't found :(</p>
            <p>We suggest you to back Home</p>
          </div>
          <Link className="nav-link p-0" to="/">
            <Button>HOME</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Error;
