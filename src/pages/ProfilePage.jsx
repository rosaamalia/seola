import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import ProfileCard from "../components/ProfileComponents/ProfileCard";
import PortofolioList from "../components/ProfileComponents/PortofolioList";
import ProgresKelas from "../components/ProfileComponents/ProgresKelas";

function ProfilePage(){
    return (
        <Container fluid className="background-page min-vh-100 px-5 d-flex justify-content-center align-items-center">
            <Col lg={4} className="d-flex justify-content-start my-5">
                <ProfileCard></ProfileCard>
            </Col>
            <Col lg={7} className="my-5">
                <PortofolioList></PortofolioList>
                <ProgresKelas></ProgresKelas>
            </Col>
        </Container>
    )
}

export default ProfilePage;