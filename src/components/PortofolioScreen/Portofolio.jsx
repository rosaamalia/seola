import React, { useState, useEffect } from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import ModalImage from 'react-modal-image';
import api from '../../services/api';
import { toast } from "react-toastify";

const Portofolio = () => {
  const [portofolio, setPortofolio] = useState([])

  useEffect(() => {
    api.get('/tugas/portofolio')
    .then((res) => {
      setPortofolio(res.data)
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
      toast.error(err.response?.data?.message || err)
    })
  }, [])

  return (
    <React.Fragment>
      <Container>
        <h1 className="mt-5 text-center">My Portofolio</h1>
        <Row className="my-5 d-flex justify-content-start flex-wrap" style={{ width: "100%" }}>
          {portofolio.map(({file_tugas}) => (
            <Col className="col-lg-3">
              <ModalImage small={file_tugas} medium={file_tugas} large={file_tugas} className="porto my-2"/>
            </Col>
          ))}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Portofolio;
