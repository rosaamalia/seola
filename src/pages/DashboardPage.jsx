import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";

import Kelas from '../components/DashboardComponents/Kelas';
import PreviewProfil from '../components/DashboardComponents/PreviewProfil';
import Leaderboard from '../components/DashboardComponents/Leaderboard';

function DashboardPage(){
    return (
        <Container fluid className="background-page min-vh-100 px-5 d-flex justify-content-center align-items-start">
            <Col lg={7} className="align-self-start mt-5">
                <Kelas></Kelas>
            </Col>
            <Col lg={4} className="mt-5">
                <PreviewProfil></PreviewProfil>
                <Leaderboard></Leaderboard>
            </Col>
        </Container>
    )
}

export default DashboardPage;