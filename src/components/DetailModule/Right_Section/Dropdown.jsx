import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const SidebarLink = styled(Link)`
    display: flex;
    color: black;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height 60px;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;


    &:hover{
        color: blue;
        cursor: pointer;
    }
`;


const SidebarLabel = styled.span`
    margin-left: 50px;
`;


const Dropdown = ({ item }) => {
    return (
        <>
        <SidebarLink to={item.path}>
            <div>
                <SidebarLabel>{item.title}</SidebarLabel>
            </div>
        </SidebarLink>
        <hr style={{ width: '100%', backgroundColor: 'gray', margin: 1}}></hr>
        </>
    )
}

export default Dropdown;