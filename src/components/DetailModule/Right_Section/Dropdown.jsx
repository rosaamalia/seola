import React, {useState} from 'react';
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

const DropdownLink = styled(Link)`
    background: #414757;
    height: 68px;
    padding-left : 3rem;
    display: flex,
    align-items: center;
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;

`

const Dropdown = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);
    return (
        <>
        <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
            <div>
                <SidebarLabel>{item.title}</SidebarLabel>
            </div>
            <div>
                {item.subNav && subnav 
                    ? item.iconOpened 
                    : item.subNav
                    ? item.iconClosed 
                    : null}
            </div>
        </SidebarLink>
        <hr style={{ width: '100%', backgroundColor: 'gray', margin: 1}}></hr>
        {subnav && item.subNav.map((item, index) => {
            return(
                <DropdownLink to={item.subNav.path} key={index}>
                    <SidebarLabel>{item.subNav.title}</SidebarLabel>
                </DropdownLink>
            )
        })}
        </>
    )
}

export default Dropdown;