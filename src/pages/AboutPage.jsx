import React from "react";
import { Container } from "react-bootstrap";
import About from "../components/AboutComponent/About";

function AboutPage(){
    return (
        <React.Fragment>
            <Container className="background-page min-vh-100 d-flex align-items-center flex-column px-0" fluid>
                <About></About>
            </Container>
        </React.Fragment>
    )
}

export default AboutPage;