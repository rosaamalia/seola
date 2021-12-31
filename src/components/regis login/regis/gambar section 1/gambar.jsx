import React from "react";
import {Row, Col} from "react-bootstrap"
import Happy from "./images/Happy"
import Hello from "./images/Hello"



function Gambar() {
    return(
    <React.Fragment>
        <Row>
            <Col md={6}>
                <Happy/>
            </Col>
            <Col md={6}>
                <Hello/>
            </Col>
        </Row>
    </React.Fragment>
        
    )
    
}

export default Gambar;