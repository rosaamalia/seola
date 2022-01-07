import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { Card, Row, Col, ProgressBar } from 'react-bootstrap';
import { IoStar } from 'react-icons/io5';
import { FaCrown } from 'react-icons/fa';

function Leaderboard() {
    return ( 
        <React.Fragment>
            <Card className="mb-5 py-4 d-flex align-items-between flex-row" style={{ width: '90%', height: 'auto' }}>
                <Col>
                <h3 className='mb-4'>Leaderboard</h3>

                {/* Ranking 1 */}
                <Row className="mx-1 py-2 justify-content-center align-items-center" style={{ background: '#345CBB1A' }}>
                    <Col md={'auto'} className="p-0">
                        <span>#1</span>
                    </Col>
                    <Col md={'auto'} className="p-0">
                        <div className="leaderboard-profil-container">
                            <FaCrown className='leaderboard-crown'></FaCrown>
                            <img className="leaderboard-profil" src="https://i.pinimg.com/736x/c1/d4/16/c1d416b2adc43880d806dd902be3ca50.jpg"></img>
                        </div>
                    </Col>
                    <Col md={6} className="d-flex justify-content-start">
                        <span className="leaderboard-nama">Bae Joo-hyun</span>
                    </Col>
                    <Col md={3} className="p-0">
                        <div className="leaderboard-poin">
                            <IoStar></IoStar>
                            <span>100 Poin</span>
                        </div>
                    </Col>
                </Row>

                {/* Ranking 2 */}
                <Row className="mx-1 py-2 justify-content-center align-items-center" style={{ background: '#F9BD671A' }}>
                    <Col md={'auto'} className="p-0">
                        <span>#2</span>
                    </Col>
                    <Col md={'auto'} className="p-0">
                        <div className="leaderboard-profil-container">
                            <FaCrown className='leaderboard-crown'></FaCrown>
                            <img className="leaderboard-profil" src="https://i.pinimg.com/564x/9a/f2/db/9af2db0fa1611e5bc7c8bec7fbe7b9d0.jpg"></img>
                        </div>
                    </Col>
                    <Col md={6} className="d-flex justify-content-start">
                        <span className="leaderboard-nama">Kim Ji-woo</span>
                    </Col>
                    <Col md={3} className="p-0">
                        <div className="leaderboard-poin">
                            <IoStar></IoStar>
                            <span>100 Poin</span>
                        </div>
                    </Col>
                </Row>

                {/* Ranking 3 */}
                <Row className="mx-1 py-2 justify-content-center align-items-center" style={{ background: '#94435C1A' }}>
                    <Col md={'auto'} className="p-0">
                        <span>#3</span>
                    </Col>
                    <Col md={'auto'} className="p-0">
                        <div className="leaderboard-profil-container">
                            <FaCrown className='leaderboard-crown'></FaCrown>
                            <img className="leaderboard-profil" src="https://i.pinimg.com/564x/cb/b2/b2/cbb2b2def04c556ead500a5ead440806.jpg"></img>
                        </div>
                    </Col>
                    <Col md={6} className="d-flex justify-content-start">
                        <span className="leaderboard-nama">Chou Tzu-yu</span>
                    </Col>
                    <Col md={3} className="p-0">
                        <div className="leaderboard-poin">
                            <IoStar></IoStar>
                            <span>100 Poin</span>
                        </div>
                    </Col>
                </Row>

                <Row className="mx-1 py-2 justify-content-center align-items-center">
                    <Col md={'auto'} className="p-0">
                        <span>#4</span>
                    </Col>
                    <Col md={'auto'} className="p-0">
                        <div className="leaderboard-profil-container">
                            <img className="leaderboard-profil" src="https://i.pinimg.com/564x/fa/ec/25/faec253d49be18b0481aaee5031b5e4f.jpg"></img>
                        </div>
                    </Col>
                    <Col md={6} className="d-flex justify-content-start">
                        <span className="leaderboard-nama">Oh Seung-hee</span>
                    </Col>
                    <Col md={3} className="p-0">
                        <div className="leaderboard-poin">
                            <IoStar></IoStar>
                            <span>100 Poin</span>
                        </div>
                    </Col>
                </Row>

                <Row className="mx-1 py-2 justify-content-center align-items-center">
                    <Col md={'auto'} className="p-0">
                        <span>#5</span>
                    </Col>
                    <Col md={'auto'} className="p-0">
                        <div className="leaderboard-profil-container">
                            <img className="leaderboard-profil" src="https://i.pinimg.com/736x/32/96/89/329689f6d0f2cc0dfb594250e7174b5c.jpg"></img>
                        </div>
                    </Col>
                    <Col md={6} className="d-flex justify-content-start">
                        <span className="leaderboard-nama">Jang Ye-eun</span>
                    </Col>
                    <Col md={3} className="p-0">
                        <div className="leaderboard-poin">
                            <IoStar></IoStar>
                            <span>100 Poin</span>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Link className="link-abu" to="#">LIHAT LEBIH BANYAK</Link>
                </Row>
                </Col>
            </Card>
        </React.Fragment>
    );
}

export default Leaderboard;