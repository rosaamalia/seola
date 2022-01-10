import React from "react";
import CardEvent from "../components/Event/cardevent";
import HeaderEvent from "../components/Event/headerevent";

function EventPage(){
    return (
        <React.Fragment>
            <HeaderEvent/>
            <CardEvent/>
        </React.Fragment>
    )
}

export default EventPage;