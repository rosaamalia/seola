import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import Penilaian from '../components/PenilaianComponents/Penilaian';

function PenilaianPage(){
    return (
        <Container fluid className="background-page min-vh-100 px-5 d-flex justify-content-center align-items-start">
            <Penilaian></Penilaian>
        </Container>
    )
}

export default PenilaianPage;