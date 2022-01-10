import React from "react";
import CardEvent from "../components/Event/cardevent";
import HeaderEvent from "../components/Event/headerevent";
import { Container } from "react-bootstrap";

function EventPage(){
    return (
        <Container>
            <HeaderEvent/>
            <CardEvent/>  
        </Container>
    )
}

export default EventPage;