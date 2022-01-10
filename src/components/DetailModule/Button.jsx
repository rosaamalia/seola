import styled from "styled-components";

export const ButtonNext = styled.button`
    background: #FD643C;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 0.50em 4em;
    margin-bottom: 50px;
    position: relative;
    float: right;
    margin-right: 28px;
    cursor: pointer;

    &:hover{
        background-color: #242A55;
    }
    @media (max-width: 770px) {
        margin-right: 0;
    }

`;

export const ButtonDetailTugas = styled.button`
    background-color: #242A55;
    border: none;
    border-radius: 5px;
    color: white;
    padding: 1em 3em;
    margin-bottom: 50px;
    float: left;
    position: relative;
    left: 30%;
    cursor: pointer;

    &:hover{
        background-color:#FD643C; 
    }
    @media (max-width: 770px) {
        left: 37%;
    }
`;