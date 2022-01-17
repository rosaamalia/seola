import React, { useState, useEffect } from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";
import ModalImage from 'react-modal-image';
import api from '../../services/api';
import error from '../../services/error';
import loader from '../../images/loader.gif';
import { toast } from "react-toastify";

const Portofolio = () => {
  const [portofolio, setPortofolio] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/tugas/portofolio')
    .then((res) => {
      setPortofolio(res.data)
      console.log(res.data)
      setLoading(false)
    })
    .catch((err) => {
      error.handleError(err.response.status)
      console.log(err)
      toast.error(err.response.data.message)
    })
  }, [])

  return (
    <React.Fragment>
      {
        loading
        ?
        <Container className="min-vh-100 d-flex justify-content-center align-items-center flex-column">
            <img src={loader} alt="loader"style={{  width: '5rem' }}></img>
            <p className="p-0 m-0">Tunggu sebentar, sedang mengambil data</p>
        </Container>
        :

        <Container>
          <h1 className="mt-5 text-center">My Portofolio</h1>
          <Row className="my-5 d-flex justify-content-start flex-wrap" style={{ width: "100%" }}>
            {portofolio.map(({file_tugas}) => (
              <>
              {
                file_tugas!==undefined
                ?
                <Col className="col-lg-3">
                  <ModalImage small={file_tugas} medium={file_tugas} large={file_tugas} className="porto my-2"/>
                </Col>
                :
                <p>Tidak ada protofolio</p>
              }
              </>
            ))}
          </Row>
        </Container>
      }
    </React.Fragment>
  );
};

export default Portofolio;
