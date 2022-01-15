import React, { useContext, useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, ProgressBar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./style.css";
import { toast } from 'react-toastify';

import mentor from "../../images/mentor.svg";

import AuthContext from "../../context/AuthContext";
import { DetailModulContext } from "../../context/DetailModulContext";
import api from '../../services/api';

const ModulScreen = () => {
  const { loggedIn } = useContext(AuthContext);
  const { modul, setModul }= useContext(DetailModulContext);

  const [kelas, setKelas] = useState('');

  useEffect(() => {
      api.get(`/kelas/${loggedIn.data.bidang_seni_id}`)
      .then((res) => {
          setKelas(res.data)
          console.log(kelas)
      })
      .catch((err) => {
          toast.error(err)
      })
  }, [])

  useEffect(() => {
    api.get('/modul/progres')
    .then((res) => {
        setModul(res.data);
    })
    .catch((err) => {
        console.log(err)
        toast.error(err)
    })
  }, [])

  return (
    <Container className="background-page" fluid>
      <Row className="row-screen" style={{ backgroundImage: `url(${kelas.foto_background})` }}>
        <Container>
          <Container>
          <Col lg={8}>
            {/* <div classname="ms"> */}
            <div className="ms-wrapper">
              <h1 className="ms-wrapper-title">{kelas.nama_kelas}</h1>
              <p className="ms-wrapper-text">{kelas.deskripsi}</p>
              <div className="ms-profile">
                <img
                  src={kelas.foto_mentor}
                  className="ms-image"
                  alt="avatar"
                  // style={{ width: "100%", height: "50px" }}
                ></img>
                <Col className="d-flex flex-column ms-3">
                  <span className="ms-profile-title">MENTOR</span>
                  <span className="ms-profile-name">{kelas.nama_mentor}</span>
                </Col>
              </div>
            </div>
            {/* </div> */}
          </Col>
          </Container>
        </Container>
      </Row>

        <Container>
          <Container>
            <Row className="flex-column flex-lg-row">
                  <Col xl={7} className="col-12 align-self-start mt-5">
                    <h3 className="mb-3">Daftar Modul</h3>

                    {modul.map((modul, index) => (
                      <Card key={index} className="mb-5 p-0 d-flex justify-content-center align-items-between flex-row" style={{ width: '100%', height: 'auto' }}>
                          <Row style={{ width: '100%', height: 'auto' }}>
                              <Col md={4} className="d-flex p-0 m-0">
                                  <img className="img-kelas rounded-md-start vw-100" src={modul.modul.foto_modul} />
                              </Col>
                              <Col md={8} className="d-flex flex-column justify-content-center p-3 gap-3" style={{ textAlign: 'left' }}>
                                  <h5 className="m-0 p-0">{modul.modul.nama_modul}</h5>

                                  <ProgressBar now={modul.progres} label={modul.progres+"%"}></ProgressBar>
                                  {index==0 || modul.status_progres=="MULAI" || modul.status_progres=="PROGRES" || modul.status_progres=="SELESAI"
                                    ?
                                    <div className="button-selengkapnya">
                                        <Link to={`/modul/${modul.modul._id}`} className="link-selengkapnya">LANJUTKAN</Link>
                                    </div>
                                    :
                                    <div className="button-selengkapnya" style={{ background: "#CCCCCC", width: '70%' }}>
                                        <span className="link-selengkapnya">BELUM DAPAT DIAKSES</span>
                                    </div>
                                  }
                              </Col>
                          </Row>
                      </Card>
                    ))}

                  </Col>

                  <Col xl={5} className="mt-3 mt-lg-5 d-xl-block">
                    <Card className="mb-5 py-4 d-flex justify-content-center align-items-between flex-column" style={{ width: '100%', height: 'auto' }}>
                        <Col>
                        <h3 className='mb-4' style={{ textAlign: 'center' }}>Tugas yang akan datang</h3>

                        {modul.map((modul, index) => (
                          <>
                          {modul.status_progres=='PROGRES' && modul.tugas_selesai==0 || modul.status_progres=='SELESAI' && modul.tugas_selesai==0 || modul.status_progres=='MULAI' && modul.tugas_selesai==0
                            ?
                            <Col key={index} className="mx-0 py-3 px-5" style={{ background: '#345CBB1A' }}>
                                <h5>Tugas Modul {modul.modul.urutan_modul}</h5>
                                <p>{modul.modul.nama_modul}</p>
                                <div className="button-selengkapnya">
                                    <Link to={`/modul/tugas/${modul.modul._id}`} className="link-selengkapnya px-1">DETAIL TUGAS</Link>
                                </div>
                            </Col>
                            :
                            null
                          }
                          </>
                        ))}
                        </Col>
                    </Card>
                  </Col>
            </Row>
          </Container>
        </Container>
    </Container>
  );
};

export default ModulScreen;
