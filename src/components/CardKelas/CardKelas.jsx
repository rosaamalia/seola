import React from "react";
import './style.css';
import { Row, Col, Card } from "react-bootstrap";
import { FaItunesNote, FaPaintBrush, FaPalette, FaAtom } from "react-icons/fa";
import image from "../../images/image.png";

function CardKelas(){
    return(
        <React.Fragment>
            <Row style={{ width: '100%'}} className="row-kelas" >
                <Col className="d-flex flex-wrap justify-content-lg-start justify-content-md-center col-lg-7 col-md-12 gap-4">
                    <div className="card-container">
                        <div className="ikon" style={{ color: '#345CBB' }}>
                            <FaItunesNote></FaItunesNote>
                        </div>
                        <Card className="card-kelas" style={{ backgroundColor: '#345CBB'}} >
                            <Card.Body>
                                <h5 className="card-title-musik">Musik</h5>
                                <p className="card-text-musik">Suasana ruang batin seseorang dapat dipengaruhi, baik itu suasana bahagia atau sedih, bergantung pada pendengar itu sendiri.</p>
                            </Card.Body>
                        </Card>
                    </div>


                    <div className="card-container">
                        <div className="ikon" style={{ color: '#345CBB' }}>
                            <FaPalette style={{color: '#F76761'}}></FaPalette>
                        </div>
                        <Card className="card-kelas" style={{ backgroundColor: '#F76761'}} >
                            <Card.Body>
                                <h5 className="card-title-lukis">Lukis</h5>
                                <p className="card-text-lukis">Bagian dari seni rupa yang dibuat berdasarkan ekspresi jiwa manusia, dinikmati melalui alat indra penglihatan dan peraba.</p>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="card-container">
                        <div className="ikon" style={{ color: '#345CBB' }}>
                            <FaAtom style={{color: '#F9BD67'}}></FaAtom>
                        </div>
                        <Card className="card-kelas" style={{ backgroundColor: '#F9BD67'}} >
                            <Card.Body>
                                <h5 className="card-title-tari">Tari</h5>
                                <p className="card-text-tari">Gerak tubuh yang ritmis sebagai ungkapan ekspresi jiwa pencipta gerak sehingga menghasilkan unsur keindahan dan makna yang dalam.</p>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="card-container">
                        <div className="ikon" style={{ color: '#345CBB' }}>
                            <FaPaintBrush style={{color: '#94435C'}}></FaPaintBrush>
                        </div>
                        <Card className="card-kelas" style={{ backgroundColor: '#94435C'}} >
                            <Card.Body>
                                <h5 className="card-title-sastra">Sastra</h5>
                                <p className="card-text-sastra">Segmentasi sastra lebih mengacu sesuai definisinya sebagai tulisan wara.</p>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>

                <Col className="d-flex flex-column col-lg-4 col-md-12">
                    <div>
                        <h1>Skills</h1>
                        <h1>and Passions</h1>
                        <p>Anyone can be ✨<span style={{ fontWeight: '700' }}>Anything</span>✨</p>
                    </div>
                    <img src={image} className="img" style={{ width: '100%', borderRadius: '3%'}}></img>
                </Col>
            </Row>
        </React.Fragment>
    )
}


export default CardKelas;