import React from "react";
import "./Embed_Video/styles.css"
import "./stylemodul.css"
import {YoutubeEmbed} from "./Embed_Video/YoutubeVideoEmbed";
import RightSection from "./Right_Section/RightSection";
import { Row,Col,Button } from "react-bootstrap";


export default function DetailModul() {
  return (
    <React.Fragment>
      <Row>
        <Col lg={8} md={8} className="sectionleft">
          <h4 className="title">Video: Modul 2 Paradigma Pendidikan Kontekstual</h4>
          <YoutubeEmbed embedId="RJYwVOXwn08" />
          <Button style={{
            backgroundColor: "#FD643C",
            border: "none",
            width:250,
            height: 40,
            marginLeft:620, 
            marginRight:210, 
            borderRadius : 5, 
            textAlign: "center",
            marginBottom: 50,
          }}
            >Selanjutnya</Button>
        </Col>
        <Col lg={4} md={4} style={{marginTop:55}} className="sectionright">
          <h4 style={{marginLeft:69,marginTop: 50, marginBottom: 30, fontWeight: "bold"}}>Daftar isi</h4>
          <hr style={{ width: '100%', backgroundColor: 'gray', margin: '1% 2%'}}></hr>
          <RightSection />
          <br/>
          <p style={{
            fontSize: 12,
            textAlign: "center"
          }}>Uji pemahaman dan eksplorasi lebih jauh dengan tugas</p>
          <br/>
          <Button style={{
            backgroundColor: "#242A55",
            border: "none",
            width:250,
            height: 50,
            marginLeft:100, 
            marginRight:210, 
            borderRadius : 5, 
            textAlign: "center",
            marginBottom: 50,
          }}
            >Detail Tugas</Button>
        </Col>
      </Row>
      
    </React.Fragment>
  );
}