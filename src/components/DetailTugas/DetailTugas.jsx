import React from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import './style.css'
import RightSection from '../DetailModule/Right_Section/RightSection'
import styled from 'styled-components'
import { ButtonDetailTugas, ButtonUpload, ButtonBack, ButtonNext } from "../DetailModule/Button";
import { VscCircleFilled } from 'react-icons/vsc' 
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { Link, useParams } from 'react-router-dom'
import FileUpload from './FileUpload'


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
    const { id } = useParams();

    return (
        <>
        <Row className="d-flex">
            <Col md={8} style={{marginTop:100}}>
                <Row>
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
                    <Desc><VscCircleFilled/> File yang di unggah tidak lebih dari 2 MB</Desc>
                    <br/>
                    <Tagline>Terus berimajinasi dan berkarya</Tagline>
                    <FileUpload/>
                </Row>

                <Row className="mt-5">
                    <Col>
                        <Link to={`/modul/teks/${id}`} >
                            <ButtonBack><BsArrowLeft/> SEBELUMNYA</ButtonBack>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/modul">
                            <ButtonNext>SELESAI <BsArrowRight style={{color: "white", fontSize:"1.5em"}}/></ButtonNext>
                        </Link>
                    </Col>
                </Row>
            </Col>
            <Col md={4} style={{marginTop:55}} className="sectionright">
                <h4 style={{marginLeft:69,marginTop: 50, marginBottom: 30, fontWeight: "bold"}}>Daftar isi</h4>
                <hr style={{ width: '100%', backgroundColor: 'gray', margin: '1% 2%'}}></hr>
                <RightSection />
                <br/>
                <p style={{
                    fontSize: 12,
                    textAlign: "center"
                }}>Uji pemahaman dan eksplorasi lebih jauh dengan tugas</p>
                <br/>
                <Link to={`/modul/tugas/${id}`}>
                    <ButtonDetailTugas>
                    Detail Tugas
                    </ButtonDetailTugas>
                </Link>
            </Col>
        </Row>
        </>
    )
}
