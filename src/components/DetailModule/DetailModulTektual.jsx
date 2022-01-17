import React, { useContext, useState } from "react";
import "./Embed_Video/styles.css"
import "./stylemodul.css"
import Textual from "./Tekstual/Textual";
import RightSection from "./Right_Section/RightSection";
import { Row,Col } from "react-bootstrap";
import { ButtonDetailTugas, ButtonBack, ButtonNext } from "./Button";
import { Link, useParams, Redirect, useHistory } from 'react-router-dom';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { DetailModulContext } from "../../context/DetailModulContext";
import api from '../../services/api';
import { toast } from "react-toastify";

function DetailModulVideo() {
  const { modul } = useContext(DetailModulContext);
  const { id } = useParams();
  const [semuaModul, setSemuaModul] = useState(modul);
  const history = useHistory();

  function progresSelesai() {
    const data = {
      status_progres: 'SELESAI'
    }

    api.put(`/progres/status/${id}`, data)
    .then((res) => {
      console.log('Modul selesai', res.data)
    })
    .catch((err) => {
      console.log(err.response?.data?.message || err)
    })

    history.push(`/modul`)
  }

  return (
    <React.Fragment>
      <Row className="d-flex mx-0 min-vh-100">
      {semuaModul.map((modul) => (
          <>
          {modul.modul._id===id 
            ?
            <>
            <Col lg={8} className="sectionleft">
              <p className="nama-modul">{modul.modul.nama_modul}</p>
              <Textual isi={modul.modul.isi_modul}></Textual>
              <Link to={`/modul/${id}`}>
                <ButtonBack><BsArrowLeft style={{fontSize: "1.5em"}}/> SEBELUMNYA</ButtonBack>
              </Link>
              {modul.modul.tugas!=undefined
                ?
                <Link to={`/modul/${id}/tugas`}>
                  <ButtonNext onClick={() => progresSelesai()}>TUGAS <BsArrowRight style={{color: "white", fontSize:"1.5em"}}/></ButtonNext>
                </Link>
                :
                <Link>
                  <ButtonNext onClick={() => progresSelesai()}>SELESAI <BsArrowRight style={{color: "white", fontSize:"1.5em"}}/></ButtonNext>
                </Link>
              }
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
                <Link to={`/modul/${id}/tugas`}>
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