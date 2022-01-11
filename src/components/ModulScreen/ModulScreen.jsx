import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./style.css";
import kuas from "../../images/kuas.svg";
import bocah from "../../images/bocah.svg";
import mentor from "../../images/mentor.svg";
import { GiTwoShadows, GiAbdominalArmor, GiPaintBrush } from "react-icons/gi";

const ModulScreen = () => {
  return (
    <Container className="background-page" fluid>
      <Row className="row-screen">
        <Col className="columns0" lg={8}>
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
                classname="msimage"
                alt="avatar"
                // style={{ width: "100%", height: "50px" }}
              ></img>
              <h2 className="ms-profile-title">Mentor</h2>
              <h3 className="ms-profile-name">Tom Holland Sucipto</h3>
            </div>
          </div>
          {/* </div> */}
        </Col>

        <Col className="columns0" lg={4}>
          <div>
            <img
              src={kuas}
              className="msimage1"
              alt="gambarkuas"
              // style={{ height: "100%" }}
            ></img>
            <img
              src={bocah}
              className="msimage2"
              alt="gambaranak"
              // style={{ width: "100%" }}
            ></img>
          </div>
        </Col>
      </Row>

      <Row className="rows">
        <Col className="columns1" lg={6}>
          <h5 className="i-title">Daftar Modul</h5>
          <div className="i-bor">
            <GiTwoShadows className="i-bor-img"></GiTwoShadows>
            <div className="wrapper">
              <div className="i-text">
                <h5>Modul I Mengenal Body Painting</h5>
              </div>
              <div className="i-load">
                <p>
                  ini proses <span>50%</span>
                </p>
              </div>
              <div className="i-btn">
                <Button>LANJUTKAN</Button>
              </div>
            </div>
          </div>

          <div className="i-bor">
            <GiAbdominalArmor className="i-bor-img"></GiAbdominalArmor>
            <div className="wrapper">
              <div className="i-text">
                <h5>Modul II Keragaman Body Painting</h5>
              </div>
              <div className="i-load">
                <p>
                  ini proses <span>0%</span>
                </p>
              </div>
              <div className="i-btn">
                <Button style={{ backgroundColor: "#CCCCCC" }}>
                  BELUM BISA DIAKSES
                </Button>
              </div>
            </div>
          </div>

          <div className="i-bor">
            <GiPaintBrush className="i-bor-img"></GiPaintBrush>
            <div className="wrapper">
              <div className="i-text">
                <h5>Modul III Practice Your Skill</h5>
              </div>
              <div className="i-load">
                <p>
                  ini proses <span>0%</span>
                </p>
              </div>
              <div className="i-btn">
                <Button style={{ backgroundColor: "#CCCCCC" }}>
                  BELUM BISA DIAKSES
                </Button>
              </div>
            </div>
          </div>
        </Col>
        <Col className="columns2" lg={6}>
          <h5 className="p-title">Tugas yang Akan Datang</h5>
          <div className="p-bor">
            <h5>Tugas I: Perkenalan Body Painting</h5>
            <p>Modul I Mengenai Body Painting</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ModulScreen;
