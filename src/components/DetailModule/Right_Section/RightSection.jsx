import React from "react";
import "./style.css"
import Dropdown from "./Dropdown"
import { useParams } from "react-router-dom";

function RightSection() {
    const { id } = useParams();
    const data = [
        {
            title: "Video Modul",
            path: `/modul/${id}`,
        },
        {
            title: "Modul Tekstual",
            path: `/modul/${id}/teks`
        }
    ]

    return(
        <React.Fragment>
            {data.map((item, index) => {
                return <Dropdown item={item} key={index}/>;
            })}
        </React.Fragment>   
    )
}

export default RightSection;