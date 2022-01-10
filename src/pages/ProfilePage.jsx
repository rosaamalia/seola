import React from "react";
import { Container, Col } from "react-bootstrap";

import ProfileCard from "../components/ProfileComponents/ProfileCard";
import PortofolioList from "../components/ProfileComponents/PortofolioList";
import ProgresKelas from "../components/ProfileComponents/ProgresKelas";

function ProfilePage(){
    return (
        <Container className="d-flex background-page min-vh-100">
            <Container className="d-flex flex-column flex-md-row gap-md-5 justify-content-center align-items-start">
                <Col md={4} className="col-12 col-md-4 justify-content-start my-5">
                    <ProfileCard></ProfileCard>
                </Col>
                <Col md={8} className="col-12 my-md-5">
                    <PortofolioList></PortofolioList>
                    <ProgresKelas></ProgresKelas>
                </Col>
            </Container>
        </Container>
    )
}

export default ProfilePage;