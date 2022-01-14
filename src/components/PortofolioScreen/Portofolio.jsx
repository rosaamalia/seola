import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import ModalImage from 'react-modal-image';
import girl from "../../images/ppgirl.png";

const Portofolio = () => {
  const portofolio = [
    {
      source: 'https://i.pinimg.com/564x/95/4d/97/954d97097205bcc1bb872889819928eb.jpg',
      alt: 'gambar1'
    },
    {
      source: 'https://i.pinimg.com/564x/f6/ec/70/f6ec709315ec9e89f5bafe2f48014d19.jpg',
      alt: 'gambar2'
    },
    {
      source: 'https://i.pinimg.com/736x/ad/1a/90/ad1a903cc5f4d5c48a408f7a1c7fb3c8.jpg',
      alt: 'gambar3'
    },
    {
      source: 'https://i.pinimg.com/564x/76/b2/87/76b28769c2e6d0998dc5b42f1763cf22.jpg',
      alt: 'gambar4'
    },
    {
      source: 'https://i.pinimg.com/564x/fe/3a/06/fe3a06b79196415404d0b8fb69685aec.jpg',
      alt: 'gambar5'
    },
    {
      source: 'https://i.pinimg.com/564x/a1/8a/b2/a18ab2895a0fbd1aa2fd4e739f377855.jpg',
      alt: 'gambar6'
    },
    {
      source: 'https://i.pinimg.com/564x/1c/27/1c/1c271c2570a3378ef926fa650ebedf7b.jpg',
      alt: 'gambar7'
    },
    {
      source: 'https://i.pinimg.com/564x/fe/90/5a/fe905aba0e215e7c0ae75c8c44b09cf5.jpg',
      alt: 'gambar8'
    }
  ]

  return (
    <React.Fragment>
      <Container>
        <h1 className="mt-5 text-center">My Portofolio</h1>
        <Row className="my-5 d-flex justify-content-start flex-wrap" style={{ width: "100%" }}>
          {portofolio.map(({source, alt}) => (
            <Col className="col-lg-3">
              <ModalImage small={source} medium={source} large={source} className="porto my-2"/>
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Portofolio;
