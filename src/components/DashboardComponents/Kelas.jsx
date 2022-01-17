import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import image from '../../images/dashboard-1.png';
import { Container, Card, Row, Col, ProgressBar } from 'react-bootstrap';
import { IoRibbon } from 'react-icons/io5';

function Kelas({modul, kelas}) {
    return ( 
        <React.Fragment>
            <div className='banner'>
                <img className="img-dashboard" src={image}></img>
                <Card className="banner-card mb-5 justify-content-start align-items-start" style={{ width: '100%', height: 'auto' }}>
                    <Col>
                        <h4>Sudah belajar apa hari ini?</h4>
                        <span>Lihat progres belajarmu.</span>
                    </Col>
                </Card>
            </div>

            <Card className="mb-5 p-0 d-flex justify-content-center align-items-between flex-row" style={{ width: '100%', height: 'auto' }}>
                <Row style={{ width: '100%', height: 'auto' }}>
                    <Col md={4} className="d-flex p-0 m-0">
                        <img className="img-kelas rounded-md-start vw-100" src={kelas.foto_thumbnail} />
                    </Col>
                    <Col md={8} className="d-flex flex-column justify-content-center p-3 gap-3" style={{ textAlign: 'left' }}>
                        <span><IoRibbon/> Kelasku</span>
                        <h5 className="m-0 p-0">{kelas.nama_kelas}</h5>
                        <div className="button-selengkapnya">
                            <Link to="/modul" className="link-selengkapnya">SELENGKAPNYA</Link>
                        </div>
                    </Col>
                </Row>
            </Card>

            <h5 className="mb-3">Modul yang terakhir dilihat</h5>
            {modul.map((modul) => (
            <>
                {modul.status_progres==='MULAI' || modul.status_progres==='PROGRES'
                ?
                <Card className="mb-5 p-0 d-flex justify-content-center align-items-between flex-row" style={{ width: '100%', height: 'auto' }}>
                    <Row style={{ width: '100%', height: 'auto' }}>
                        <Col md={4} className="d-flex p-0 m-0">
                            <img className="img-kelas rounded-md-start vw-100" src={modul.modul.foto_modul} />
                        </Col>
                        <Col md={8} className="d-flex flex-column justify-content-center p-3 gap-3" style={{ textAlign: 'left' }}>
                            <h5 className="m-0 p-0">{modul.modul.nama_modul}</h5>
                            <ProgressBar now={modul.progres} label={modul.progres+'%'}></ProgressBar>
                            <div className="button-selengkapnya">
                                <Link to={`/modul/${modul.modul._id}`} className="link-selengkapnya">LANJUTKAN</Link>
                            </div>
                        </Col>
                    </Row>
                </Card>
                :
                null
                }
            </>
            ))}
            
            <h5 className="mb-3">Tugas yang akan datang</h5>
            {modul.map((modul) => (
                <>
                {modul.status_progres==='MULAI' && modul.tugas_selesai==0 || modul.status_progres==='PROGRES' && modul.tugas_selesai==0
                ?
                <Card className="mb-5 p-0 d-flex justify-content-center align-items-between flex-row" style={{ width: '100%', height: 'auto' }}>
                    <Row style={{ width: '100%', height: 'auto' }}>
                        <Col md={4} className="d-flex p-0 m-0">
                            <img className="img-kelas rounded-md-start vw-100" src={modul.modul.foto_modul} />
                        </Col>
                        <Col md={8} className="d-flex flex-column justify-content-center p-3 gap-3" style={{ textAlign: 'left' }}>
                            <h5 className="m-0 p-0">{"Tugas Modul " + modul.modul.urutan_modul}</h5>
                            <span>{modul.modul.nama_modul}</span>
                            <div className="button-selengkapnya">
                                <Link to={`/modul/${modul.modul._id}/tugas`} className="link-selengkapnya">KERJAKAN</Link>
                            </div>
                        </Col>
                    </Row>
                </Card>
                :
                null
                }
                </>
            ))}
                
        </React.Fragment>
    );
}

export default Kelas;