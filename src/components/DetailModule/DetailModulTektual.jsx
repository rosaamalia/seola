import React from "react";
import "./Embed_Video/styles.css"
import "./stylemodul.css"
import Textual from "./Tekstual/Textual";
import RightSection from "./Right_Section/RightSection";
import { Row,Col } from "react-bootstrap";
import { ButtonNext, ButtonDetailTugas } from "./Button";

function DetailModulVideo() {
  return (
    <React.Fragment>
      <Row>
        <Col lg={9} md={9} className="sectionleft">
          <p className="title">Modul 2 Paradigma Pendidikan Kontekstual</p>
          <Textual></Textual>
          <ButtonNext>Selanjutnya</ButtonNext>
        </Col>
        <Col lg={3} md={3} style={{marginTop:55}} className="sectionright">
          <h4 style={{marginLeft:69,marginTop: 50, marginBottom: 30, fontWeight: "bold"}}>Daftar isi</h4>
          <hr style={{ width: '100%', backgroundColor: 'gray', margin: '1% 2%'}}></hr>
          <RightSection />
          <br/>
          <p style={{
            fontSize: 12,
            textAlign: "center"
          }}>Uji pemahaman dan eksplorasi lebih jauh dengan tugas</p>
          <br/>
          <ButtonDetailTugas>Detail Tugas</ButtonDetailTugas>
        </Col>
      </Row>
      
    </React.Fragment>
  );
}

export default DetailModulVideo;