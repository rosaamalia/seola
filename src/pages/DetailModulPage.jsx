import React from "react";
import { Container } from "react-bootstrap";
import DetailModulVideo from "../components/DetailModule/DetailModul";

function DetailModulPage(){
    return (
        <React.Fragment>
            <Container fluid>
                <DetailModulVideo/>
            </Container>
        </React.Fragment>
    )
}

export default DetailModulPage;