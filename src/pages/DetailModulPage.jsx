import React from "react";
import { Container } from "react-bootstrap";
import DetailModul from "../components/DetailModule/DetailModul";

function DetailModulPage(){
    return (
        <React.Fragment>
            <Container fluid>
                <DetailModul/>
            </Container>
        </React.Fragment>
    )
}

export default DetailModulPage;