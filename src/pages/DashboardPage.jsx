import React from "react";
import { Container, Col } from "react-bootstrap";

import Kelas from '../components/DashboardComponents/Kelas';
import PreviewProfil from '../components/DashboardComponents/PreviewProfil';
import Leaderboard from '../components/DashboardComponents/Leaderboard';

function DashboardPage(){
    return (
        <Container>
        <Container fluid className="background-page min-vh-100 gap-xl-5 d-flex justify-content-center align-items-start">
            <Col xl={7} className="col-12 align-self-start mt-5">
                <Kelas></Kelas>
            </Col>
            <Col xl={4} className="mt-5 d-none d-xl-block">
                <PreviewProfil></PreviewProfil>
                <Leaderboard></Leaderboard>
            </Col>
        </Container>
        </Container>
    )
}

export default DashboardPage;