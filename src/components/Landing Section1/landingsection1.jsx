import React from "react";
import "./style.css";
import { Container, Row ,Col, Button } from "react-bootstrap";
import Section1 from "./gambar/section1"
import { BsFillAwardFill, BsFillBookFill } from "react-icons/bs";
import { HeadingRise, Desc, Best, DescBest, ButtonGet, ButtonLearn } from "../../styles/landingsection1";


const styleIcon = { color: "#F9BD67", fit: "cover", fontSize: '2rem'}
const iconBackground = { backgroundColor: '#F9BD6733', border: '1px solid #F9BD67', borderRadius: '0.5rem'}

function LandingSection1(){
    return (
        <Container className= "mx-lg-auto mx-md-auto mx-sm-auto d-block mt-3 mb-3">
            <Row>
                <Col md={7} style={{marginTop:100, marginBottom:100}} >
                    <Row className = "mb-3">
                    <HeadingRise>
                        <div>Rise Your<br/>Imagination</div>
                    </HeadingRise>
                    <Desc>
                        <div>Everyday brings with it a fresh set of learning posibilities.</div>
                    </Desc>
                    </Row>
                
                    <ButtonGet >Get Started</ButtonGet>
                    <ButtonLearn>Learn More</ButtonLearn>
                   
                    {/* <div className="col-auto icons">
                                    <BsFillAwardFill/>
                                    <h6 className="mt-3">
                                        100% Secure <br />
                                    <span className="text-gray-500 font-weight-light">
                                            Payment online
                                    </span>
                                    </h6>
                                </div> */}
                    <Row className = "mt-5">
                        <Col lg={1} md={1} sm={1} xs={2} className="d-flex justify-content-center align-items-center" style={iconBackground}>
                            <BsFillBookFill style={styleIcon}/>
                        </Col>
                        <Col lg={11} md={11} sm={11} xs={10}>
                        <Best>
                            <div>
                            Metode yang terarah
                            </div>
                        </Best>
                        <DescBest>
                            <div>
                            Dengan tahapan eskursi, materi, kreasi dan diskusi
                            </div>
                        </DescBest>
                        </Col>

                    </Row>
                    <Row className = "mt-3">
                    <Col lg={1} md={1} sm={1} xs={2} className="d-flex justify-content-center align-items-center" style={iconBackground}>
                        <BsFillAwardFill style={styleIcon}/>
                    </Col>
                    <Col lg={11} md={11} sm={11} xs={10}>
                    <Best>
                        <div>
                        Mentor Professional
                        </div>
                    </Best>
                        <DescBest>
                            <div>
                            Mentor merupakan professional di bidangnya masing-masing
                            </div>
                        </DescBest>
                    </Col>

                    </Row>
                </Col>
                <Col md={5} style={{marginTop:60, marginBottom:100}} className="art">
                   <Section1/>
                </Col>
            </Row>
        </Container>
    )

}

export default LandingSection1;
