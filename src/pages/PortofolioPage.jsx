import React from "react";
import { Container } from "react-bootstrap";

import Portofolio from "../components/PortofolioScreen/Portofolio";

const PortofolioPage = () => {
  return (
    <React.Fragment>
      <Container
        className="background-page min-vh-100 d-flex align-items-center flex-column px-0"
        fluid
      >
        <Portofolio></Portofolio>
      </Container>
    </React.Fragment>
  );
};

export default PortofolioPage;
