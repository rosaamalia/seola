import React from "react";
import Error from "../components/ErrorScreen/Error";
import { Container } from "react-bootstrap";

const ErrorPage = () => {
  return (
    <Container className="background-page my-5">
      <Error></Error>
    </Container>
  );
};

export default ErrorPage;
