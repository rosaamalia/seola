import React from "react";
import { Container } from "react-bootstrap";

function HeaderEvent() {
    return (
        <Container style={{ 
            backgroundColor : "#F9BD67",
            color : "black",
            fontSize : "24px",
            paddingTop : "8px",
            paddingBottom : "8px",
            paddingLeft : "35px",
            textAlign : "left",
            marginTop: 100, 
            marginBottom: 50,
            borderRadius : 8
        }}>
            Event Seni
        </Container>
    )
}

export default HeaderEvent;