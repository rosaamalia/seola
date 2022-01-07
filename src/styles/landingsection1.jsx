import styled from 'styled-components';

export const HeadingRise = styled.div`
   font-size: 40px;
   color: black;
   /* font-family: sans-serif; */
   font-weight: bold;
  
`
export const Desc = styled.div`
    font-size: 20px;
    color: black;
    /* font-family: sans-serif; */
    font-weight: normal;
    margin-top: 10px
`

export const Best = styled.div`
    font-size: 20px;
    color: black;
    /* font-style: sans-serif; */
    font-weight: bold;
`
export const DescBest = styled.div`
    font-size: 17px;
    color: black;
    /* font-style: serif; */
    font-weight: normal;
`
export const Rating = styled.div`
   cursor: pointer;
`
export const ButtonGet = styled.button`
    margin-top: 10px;
    cursor: pointer;
    background-color : #FB653F;
    color: white;
    padding : 7px 20px;
    border: none;
    border-radius: 10px;
    font-size: 15px;
    font-weight: bold;
    text-decoration: none;
    &:hover{
        background-color: #345CBB;
        color: white;
    }

`
export const ButtonLearn = styled.button`
    cursor: pointer;
    background-color : white;
    color: black;
    padding : 7px 20px;
    margin-left: 20px;
    border: #FB653F solid 1px;
    border-radius: 10px;
    font-size: 15px;
    font-weight: bold;
    &:hover{
        background-color: #345CBB;
        color: white;
        border: none;
    }

`
