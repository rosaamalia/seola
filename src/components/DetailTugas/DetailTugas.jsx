import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import './style.css'
import RightSection from '../DetailModule/Right_Section/RightSection'
import styled from 'styled-components'
import { ButtonDetailTugas,ButtonUpload, ButtonBack } from "../DetailModule/Button";
import { VscCircleFilled } from 'react-icons/vsc' 
import { MdUploadFile } from 'react-icons/md'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Title = styled.div`
    color: black;
    font-size: 18px;
    margin-left: 120px;
    font-weight: bold;
`;

const Desc = styled.div`
    color: black;
    font-size: 12px;
    margin-left: 120px;

`

const Tagline = styled.div`
    color: black;
    font-size: 13px;
    margin-left: 120px;

`

export const DetailTugas = () => {
    return (
        <>
        <Row>
            <Col lg={8} md={7} style={{marginTop:100}}>
                <Title>
                    Tugas: Modul 2 Paradigma Pendidikan Kontekstual
                </Title>
                <Card style={{ 
                    width: '18rem', 
                    fontSize: 12, 
                    marginLeft: 120, 
                    marginTop: 20, 
                    backgroundColor: "#FFF8EF",
                    border: "1px solid #F9BD67",
                    textAlign : "center"
                    }}>
                    <Card.Body>
                        <Card.Text>
                        Batas Waktu: 10 Agustus 2021 23:59 PM
                        </Card.Text>
                    </Card.Body>
                </Card>
                <p className='kriteria' style={{
                    marginLeft : 120,
                    marginTop : 20,
                    fontWeight: "bold" 
                }}>Kriteria</p>
                <Desc><VscCircleFilled/> Membuat karya dasar mengenai pendidikan</Desc>
                <Desc><VscCircleFilled/> Karya 100% orisinil karya sendiri</Desc>
                <br/>
                <Tagline>Terus berimajinasi dan berkarya</Tagline>
                <ButtonUpload>
                    <MdUploadFile style={{color:"white", fontSize:"1.5em"}}/> UNGGAH TUGASMU DI SINI
                </ButtonUpload>
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
                <Link to="/detailtugas">
                    <ButtonDetailTugas>
                    Detail Tugas
                    </ButtonDetailTugas>
                </Link>
            </Col>
        </Row>
        <Row>
            <Col lg={4}>
                <Link to="/detailmodul">
                    <ButtonBack><BsArrowLeft/> SEBELUMNYA</ButtonBack>
                </Link>
            </Col> 
        </Row>
        </>
    )
}
