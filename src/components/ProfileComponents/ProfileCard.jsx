import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { Card, Row, Col } from 'react-bootstrap';
import { Tooltip } from 'react-tippy';

import { BiEdit } from 'react-icons/bi';
import { IoRibbon, IoStar } from 'react-icons/io5';
import { HiUser } from 'react-icons/hi';
import { AiFillHome, AiFillInstagram, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';
import { FaBirthdayCake, FaSchool } from 'react-icons/fa';

import AuthContext from '../../context/AuthContext';

function ProfileCard() {
    const { loggedIn } = useContext(AuthContext);
    console.log(loggedIn)

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
                    <img className="photo-profile" src={loggedIn.data.foto_profil}></img>
                </div>
                <Card className="box-profile">
                    <Col>
                        <h3>{loggedIn.data.nama_depan + " " + loggedIn.data.nama_belakang}</h3>
                        <p>{loggedIn.data.email}</p>
                        <Row className="justify-content-center gap-2">
                            <div className="bidang-seni col-auto gap-1">
                                <IoRibbon></IoRibbon>
                                <span>{loggedIn.data.bidang_seni}</span>
                            </div>
                            <div className="oranye-bg col-auto gap-1">
                                <IoStar style={{ color: '#F76761' }}></IoStar>
                                <span>0 Point</span>
                            </div>
                            <div className="oranye-bg col-auto gap-1">
                                <span>Ranking: -</span>
                            </div>
                        </Row>
                    </Col>
                    <hr style={{ width: '100%', backgroundColor: 'gray', margin: '10% 0' }}></hr>
                    <Col>
                        <h4>About Me</h4>
                        {
                            loggedIn.data.jenis_kelamin!=undefined ?
                            <Row className="gap-3">
                                <div style={{ textAlign: 'left' }}>
                                    <HiUser className="mb-1 me-2"></HiUser>
                                    <span style={{ fontWeight: '500' }}>Jenis Kelamin: </span><span>{loggedIn.data.jenis_kelamin}</span>
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <AiFillHome className="mb-1 me-2"></AiFillHome>
                                    <span style={{ fontWeight: '500' }}>Alamat: </span><span>{loggedIn.data.alamat}</span>
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <FaBirthdayCake className="mb-1 me-2"></FaBirthdayCake>
                                    <span style={{ fontWeight: '500' }}>Tanggal Lahir: </span><span>{loggedIn.data.tanggal_lahir}</span>
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <FaSchool className="mb-1 me-2"></FaSchool>
                                    <span style={{ fontWeight: '500' }}>Sekolah: </span><span>{loggedIn.data.sekolah}</span>
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <AiFillInstagram className="mb-1 me-2"></AiFillInstagram>
                                    <span style={{ fontWeight: '500' }}>Instagram: </span><span>{loggedIn.data.instagram}</span>
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <AiFillFacebook className="mb-1 me-2"></AiFillFacebook>
                                    <span style={{ fontWeight: '500' }}>Facebook: </span><span>{loggedIn.data.facebook}</span>
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <AiFillLinkedin className="mb-1 me-2"></AiFillLinkedin>
                                    <span style={{ fontWeight: '500' }}>Linkedin: </span><span>{loggedIn.data.linkedin}</span>
                                </div>
                            </Row>
                            :
                            <div className="profile-button">
                                <Link to="/editprofile" className="profile-link">LENGKAPI PROFIL KAMU</Link>
                            </div>
                        }
                    </Col>
                </Card>
            </div>
        </React.Fragment>
    );
}

export default ProfileCard;