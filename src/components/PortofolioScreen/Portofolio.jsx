import React from "react";
import "./style.css";
import { Row, Col } from "react-bootstrap";
import girl from "../../images/ppgirl.png";

const Portofolio = () => {
  return (
    <React.Fragment>
      <h1 className="pt-5 mt-5">My Portofolio</h1>
      <Row className="rows p-5 mt-5 d-none d-sm-flex" style={{ width: "100%" }}>
        <Col className="col-lg-3" style={{ display: "relative" }}>
          <img src={girl} alt="gambar1" className="porto"></img>
        </Col>
        <Col className="col-lg-3">
          <img src={girl} alt="gambar2" className="porto"></img>
        </Col>
        <Col className="col-lg-3">
          <img src={girl} alt="gambar3" className="porto"></img>
        </Col>
        <Col className="col-lg-3">
          <img src={girl} alt="gambar4" className="porto"></img>
        </Col>
      </Row>

      <Row className="p-5 mt-5 d-none d-sm-flex" style={{ width: "100%" }}>
        <Col className="col-lg-3" style={{ display: "relative" }}>
          <img src={girl} alt="gambar1" className="porto"></img>
        </Col>
        <Col className="col-lg-3">
          <img src={girl} alt="gambar2" className="porto"></img>
        </Col>
        <Col className="col-lg-3">
          <img src={girl} alt="gambar3" className="porto"></img>
        </Col>
        <Col className="col-lg-3">
          <img src={girl} alt="gambar4" className="porto"></img>
        </Col>
      </Row>

      <Row className="p-5 mt-5 d-none d-sm-flex" style={{ width: "100%" }}>
        <Col className="col-lg-3" style={{ display: "relative" }}>
          <img src={girl} alt="gambar1" className="porto"></img>
        </Col>
        <Col className="col-lg-3">
          <img src={girl} alt="gambar2" className="porto"></img>
        </Col>
        <Col className="col-lg-3">
          <img src={girl} alt="gambar3" className="porto"></img>
        </Col>
        <Col className="col-lg-3">
          <img src={girl} alt="gambar4" className="porto"></img>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Portofolio;
