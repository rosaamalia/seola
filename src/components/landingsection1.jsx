import React from "react";
import { Container, Row ,Col, Button } from "react-bootstrap";
import section1 from "../images/section1.png"
import { BsFillAwardFill, BsFillBookFill } from "react-icons/bs";
import { HeadingRise, Desc, Best, DescBest } from "../styles/landingsection1";


const styleIcon = { color: "#F9BD67", fit: "cover"}

function LandingSection1(){
    return (
        <Container className= "mx-lg-auto mx-md-auto mx-sm-auto d-block mt-3 mb-3">
            <Row>
                <Col style={{backgroundColor: "pink"}}>
                    <Row className = "mb-3">
                    <HeadingRise>
                        <div>Rise Your Imagination</div>
                    </HeadingRise>
                    <Desc>
                        <div>Everyday brings with it a fresh set of learning posibilities.</div>
                    </Desc>
                    </Row>
                
                    <Button variant="primary">Get Started</Button>
                    <Button variant="secondary" className="mx-3">Learn More</Button>
                   
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
                        <Col className = "col-lg-1" >
                            <BsFillBookFill style={styleIcon}/>
                        </Col>
                        <Col className = "col-lg-11">
                        <Best>
                            <div>
                            Metode yang terarah
                            </div>
                        </Best>
                        <DescBest>
                            <div>
                            Dengan tahapan eskursi,materi,kreasi dan diskusi
                            </div>
                        </DescBest>
                        </Col>

                    </Row>
                    <Row className = "mt-1">
                    <Col clasName = "col-lg-1">
                        <BsFillAwardFill style={styleIcon}/>
                    </Col>
                    <Col className = "col-lg-11">
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
                <Col style={{backgroundColor: "blue"}} >
                    <img src = {section1} alt="gambar section 1" width="425px" height="425px" className= "mx-lg-auto mx-md-auto mx-sm-auto d-block mt-2 mb-2"></img>
                </Col>
            </Row>
        </Container>
    )

}

export default LandingSection1;
