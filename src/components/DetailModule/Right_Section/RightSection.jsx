import React from "react";
import "./style.css"
import Dropdown from "./Dropdown"
import { DropdownData } from './DropdownData';

function RightSection() {
    return(
        <React.Fragment>
            {DropdownData.map((item, index) => {
                return <Dropdown item={item} key={index}/>;
            })}
        </React.Fragment>   
    )
}

export default RightSection;