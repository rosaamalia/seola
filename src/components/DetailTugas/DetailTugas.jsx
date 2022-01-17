import React, { useState, useContext, useEffect } from 'react'
import { Col, Row, Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import './style.css'
import { ButtonDetailTugas, ButtonUpload, ButtonBack, ButtonNext } from "../DetailModule/Button";
import RightSection from '../DetailModule/Right_Section/RightSection'
import Tekstual from '../DetailModule/Tekstual/Textual'
import FileUpload from './FileUpload'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { IoStar } from 'react-icons/io5'
import { DetailModulContext } from '../../context/DetailModulContext'
import api from '../../services/api';
import error from '../../services/error';


const Tagline = styled.span`
    color: black;
    margin-left: 100px;

`
export const ButtonPenilaian = styled.button`
    background: #FD643C;
    border: none;
    font-size: 12px;
    border-radius: 5px;
    color: white;
    padding: 0.50rem 1rem;
    cursor: pointer;
    font-weight:bold;

    @media (max-width: 770px) {
        margin-right: 0;
    }

`;

export const DetailTugas = () => {
    const { modul, setModul }= useContext(DetailModulContext);
    const { id } = useParams();
    const [semuaModul, setSemuaModul] = useState(modul);

    useEffect(() => {
        api.get('/modul/progres')
        .then((res) => {
            setModul(res.data);
            setSemuaModul(res.data);
        })
        .catch((err) => {
            error.handleError(err.response.status)
            console.log(err)
            toast.error(err)
        })
    }, [])

    return (
        <>
        <Row className="d-flex">
            <Col md={8} className="sectionleft">
                {semuaModul.map((modul) => (
                    <>
                    {modul.modul._id==id
                    ?
                    <Row>
                        <p className="nama-modul">
                            Tugas - {modul.modul.nama_modul}
                        </p>
                        <p className='kriteria' style={{
                            marginLeft : 100,
                            marginTop : 20,
                            fontWeight: "bold" 
                        }}>Kriteria</p>
                        <div style={{ marginRight: 100 }}>
                        <Tekstual isi={modul.modul.tugas}></Tekstual>
                        </div>
                        <br/>
                        <Tagline>Terus berimajinasi dan berkarya</Tagline>

                        {modul.tugas_selesai
                        ?
                        <Card style={{ 
                            width: 'auto', 
                            marginLeft: 110, 
                            marginTop: 20, 
                            backgroundColor: "#FFF8EF",
                            border: "1px solid #F9BD67"
                            }}>
                            <Card.Body className="d-flex flex-row justify-content-center align-items-center gap-4">
                                <Card.Text className="m-0 p-0" style={{ fontWeight: 'bold' }}>
                                Tugas sudah dikumpul
                                </Card.Text>
                                <Link to={`/modul/${id}/tugas/nilai`}>
                                    <ButtonPenilaian><IoStar style={{color: "white", fontSize:"1.5em"}}/> LIHAT PENILAIAN</ButtonPenilaian>
                                </Link>
                            </Card.Body>
                        </Card>
                        :
                        <>
                        <FileUpload/>
                        <span className="text-muted my-3" style={{ marginLeft: 100 }}>File harus berekstensi .jpg, .jpeg, .png</span>
                        </>
                        }
                    </Row>
                    :
                    null
                    }
                    </>
                ))}

                <Row className="mt-4">
                    <Col>
                        <Link to={`/modul/${id}/teks`} >
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
                <Link to={`/modul/${id}/tugas`}>
                    <ButtonDetailTugas>
                    Detail Tugas
                    </ButtonDetailTugas>
                </Link>
            </Col>
        </Row>
        </>
    )
}
