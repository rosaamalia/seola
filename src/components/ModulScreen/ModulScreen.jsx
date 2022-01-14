import React from "react";
import { Container, Row, Col, Button, Card, ProgressBar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./style.css";
import kuas from "../../images/kuas.svg";
import bocah from "../../images/bocah.svg";
import mentor from "../../images/mentor.svg";
import modul1 from '../../images/modul/modul-1.jpg';

const ModulScreen = () => {
  const modul = [
    {
      nama: 'Modul 1: Pandangan Filosofis Ki Hajar Dewantara dan Driyarkara tentang Pendidikan',
      progres: 50,
      gambar: 'images/modul/modul-1.jpg',
      status_progres: 'PROGRES'
    },
    {
      nama: 'Modul 2: Paradigma Pendidikan Kontekstual',
      progres: 0,
      gambar: 'images/modul/modul-1.jpg',
      status_progres: 'BELUM'
    },
    {
      nama: 'Modul 3: Transformasi Peran Guru',
      progres: 0,
      gambar: 'images/modul/modul-1.jpg',
      status_progres: 'BELUM'
    }
  ]

  return (
    <Container className="background-page" fluid>
      <Row className="row-screen">
        <Container>
          <Container>
          <Col lg={8}>
            {/* <div classname="ms"> */}
            <div className="ms-wrapper">
              <h1 className="ms-wrapper-title">Body Painting</h1>
              <p className="ms-wrapper-text">
                Lukisan tubuh adalah sebuah bentuk seni rupa tubuh dimana karya
                seni dilukis langsung pada kulit manusia. Tak seperti tato dan
                bentuk seni rupa tubuh lainnya, lukisan tubuh bersifat temporer,
                bertahan selama beberapa jam atau terkadang beberapa pekan.
              </p>
              <div className="ms-profile">
                <img
                  src={mentor}
                  className="ms-image"
                  alt="avatar"
                  // style={{ width: "100%", height: "50px" }}
                ></img>
                <Col className="d-flex flex-column ms-3">
                  <span className="ms-profile-title">MENTOR</span>
                  <span className="ms-profile-name">Tom Holland</span>
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

                    {modul.map((modul) => (
                      <Card className="mb-5 p-0 d-flex justify-content-center align-items-between flex-row" style={{ width: '100%', height: 'auto' }}>
                          <Row style={{ width: '100%', height: 'auto' }}>
                              <Col md={4} className="d-flex p-0 m-0">
                                  <img className="img-kelas rounded-md-start vw-100" src={modul.gambar} />
                              </Col>
                              <Col md={8} className="d-flex flex-column justify-content-center p-3 gap-3" style={{ textAlign: 'left' }}>
                                  <h5 className="m-0 p-0">{modul.nama}</h5>

                                  <ProgressBar now={modul.progres} label={modul.progres+"%"}></ProgressBar>
                                  {modul.status_progres=="PROGRES" || modul.status_progres=="SELESAI"
                                    ?
                                    <div className="button-selengkapnya">
                                        <Link to="/detailmodul" className="link-selengkapnya">LANJUTKAN</Link>
                                    </div>
                                    :
                                    <div className="button-selengkapnya" style={{ background: "#CCCCCC" }}>
                                        <Link className="link-selengkapnya">BELUM DAPAT DIAKSES</Link>
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

                        <Col className="mx-0 py-3 px-5" style={{ background: '#345CBB1A' }}>
                            <h5>Tugas 1: Mengenal Body Painting</h5>
                            <p>Modul 1: Mengenal Body Painting</p>
                            <div className="button-selengkapnya">
                                <Link to="/modul" className="link-selengkapnya px-1">DETAIL TUGAS</Link>
                            </div>
                        </Col>
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
