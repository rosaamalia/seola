import React, { useContext, useState, useEffect } from "react";
import "./Embed_Video/styles.css"
import "./stylemodul.css"
import {YoutubeEmbed} from "./Embed_Video/YoutubeVideoEmbed";
import RightSection from "./Right_Section/RightSection";
import { Row,Col } from "react-bootstrap";
import { ButtonNext, ButtonBack, ButtonDetailTugas } from "./Button";
import { Link, useParams } from 'react-router-dom';
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { DetailModulContext } from "../../context/DetailModulContext";
import api from '../../services/api';

function DetailModulVideo() {
  const { modul } = useContext(DetailModulContext);
  const { id } = useParams();
  const [semuaModul, setSemuaModul] = useState(modul);

  function progres() {
    const data = {
      status_progres: 'PROGRES'
    }

    api.put(`/progres/status/${id}`, data)
    .then((res) => {
      console.log('Modul progres', res.data)
    })
    .catch((err) => {
      console.log(err.response?.data?.message || err)
    })
  }

  return (
    <React.Fragment>
      <Row className="d-flex">
        {semuaModul.map((modul) => (
          <>
          {modul.modul._id===id 
            ?
            <>
            <Col md={8} className="sectionleft">
              <p className="nama-modul">Video - {modul.modul.nama_modul}</p>
              <YoutubeEmbed embedId={modul.modul.link_video} />
              <Link to={`/modul`}>
                <ButtonBack><BsArrowLeft style={{fontSize: "1.5em"}}/> KEMBALI</ButtonBack>
              </Link>
              <Link to={`/modul/teks/${id}`}>
                <ButtonNext onClick={() => progres()}>SELANJUTNYA <BsArrowRight style={{color: "white", fontSize:"1.5em"}}/></ButtonNext>
              </Link>
            </Col>

            <Col md={4} style={{marginTop:55}} className="sectionright">
              <h4 style={{marginLeft:69,marginTop: 50, marginBottom: 30, fontWeight: "bold"}}>Daftar isi</h4>
              <hr style={{ width: '100%', backgroundColor: 'gray', margin: '1% 2%'}}></hr>
              <RightSection />
              <br/>
              <br/>
              {
                modul.modul.tugas!=undefined
                ?
                <>
                <p style={{
                  fontSize: 12,
                  textAlign: "center"
                }}>Uji pemahaman dan eksplorasi lebih jauh dengan tugas</p>
                <Link to={`/modul/tugas/${id}`}>
                  <ButtonDetailTugas>
                    Detail Tugas
                  </ButtonDetailTugas>
                </Link>
                </>
                :
                null
              }
            </Col>
            </>
            :
              <></>
          }
          </>
        ))}

      </Row>
      
    </React.Fragment>
  );
}

export default DetailModulVideo;