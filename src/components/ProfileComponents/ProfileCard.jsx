import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { Card, Row, Col } from 'react-bootstrap';
import { Tooltip } from 'react-tippy';

import { BiEdit } from 'react-icons/bi';
import { IoRibbon, IoStar } from 'react-icons/io5';
import { HiUser } from 'react-icons/hi';
import { AiFillHome, AiFillInstagram, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { FaBirthdayCake, FaSchool } from 'react-icons/fa';

function ProfileCard() {
    return ( 
        <React.Fragment>
            <div className="container-profile">
                <div className="container-photo">
                    <Tooltip className="tippy" disabled={false} interactive={false} position={'right'} trigger={'mouseenter'} html={(
                        <div className="tippy-edit">
                            Edit Profile
                        </div>
                    )}>
                        <Link to="/editprofile" className="edit-button">
                            <BiEdit></BiEdit>
                        </Link>
                    </Tooltip>
                    <img className="photo-profile" src="https://i.pinimg.com/564x/61/2a/76/612a7697020dd20eab0fcdd22e23a1e9.jpg"></img>
                </div>
                <Card className="box-profile">
                    <Col>
                        <h3>Bucky Montana Esmeralda</h3>
                        <p>buckymontas@mail.com</p>
                        <Row className="justify-content-center gap-2">
                            <div className="bidang-seni col-5 gap-1">
                                <IoRibbon></IoRibbon>
                                <span>Seni Lukis</span>
                            </div>
                            <div className="oranye-bg col-5 gap-1">
                                <IoStar style={{ color: '#F76761' }}></IoStar>
                                <span>0 Point</span>
                            </div>
                            <div className="oranye-bg col-5 gap-1">
                                <span>Ranking: -</span>
                            </div>
                        </Row>
                    </Col>
                    <hr style={{ width: '100%', backgroundColor: 'gray', margin: '10% 0' }}></hr>
                    <Col>
                        <h4>About Me</h4>
                        <Row className="gap-3">
                            <div style={{ textAlign: 'left' }}>
                                <HiUser className="mb-1 me-2"></HiUser>
                                <span style={{ fontWeight: '500' }}>Jenis Kelamin: </span><span>Laki - laki</span>
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <AiFillHome className="mb-1 me-2"></AiFillHome>
                                <span style={{ fontWeight: '500' }}>Alamat: </span><span>Jl. Taman Bukit Duri No.2, RT.2/RW.12, Bukit Duri, Kec. Tebet, Kota Jakarta Selatan</span>
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <FaBirthdayCake className="mb-1 me-2"></FaBirthdayCake>
                                <span style={{ fontWeight: '500' }}>Tanggal Lahir: </span><span>5 Januari 2005</span>
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <FaSchool className="mb-1 me-2"></FaSchool>
                                <span style={{ fontWeight: '500' }}>Sekolah: </span><span>SMA N 8 Jakarta</span>
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <AiFillInstagram className="mb-1 me-2"></AiFillInstagram>
                                <span style={{ fontWeight: '500' }}>Instagram: </span><span>@buckymons</span>
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <AiFillFacebook className="mb-1 me-2"></AiFillFacebook>
                                <span style={{ fontWeight: '500' }}>Facebook: </span><span>Bucky Montana E</span>
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <AiFillLinkedin className="mb-1 me-2"></AiFillLinkedin>
                                <span style={{ fontWeight: '500' }}>Linkedin: </span><span>/in/buckymons</span>
                            </div>
    
                        </Row>
                    </Col>
                </Card>
            </div>
        </React.Fragment>
    );
}

export default ProfileCard;