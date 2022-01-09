import React from "react";
import { Container } from "react-bootstrap";

import Penilaian from '../components/PenilaianComponents/Penilaian';

function PenilaianPage(){
    return (
        <Container fluid className="background-page min-vh-100 d-flex justify-content-center align-items-start">
            <Penilaian></Penilaian>
        </Container>
    )
}

export default PenilaianPage;