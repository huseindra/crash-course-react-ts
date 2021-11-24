import {createGlobalStyle} from "styled-components"
import styled from "styled-components";

 export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    #root{
        margin:0 auto;
    }
`

export const Card = styled.div`
    &{
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        padding: 1rem;
        margin: 1rem 0;
        border-radius: 12px;
        background-color: #fff;
    }
      
`


export const Container = styled.div `
    display:grid;
    margin: 0 30%;
    @media(max-width:768px){
        margin: 0 10%;
     }
`

export const DateItem = styled.div `
    display:flex;
    flex-direction:column;
    align-items: flex-start;
    flex: 1;
    font-size:8px;
`
export const TitleItem = styled.h2 `
    color: #000;
    font-size: 1rem;
    align-items: flex-start;
    flex: 1;
    margin: 0px;
`

export const PriceItem = styled.div `

    font-size: 1rem;
    color: white;
    border: 1px solid white;
    margin-left:20px;
    padding: 0.5rem;
    border-radius: 12px;
    background: linear-gradient(
180deg,#ff9738,#ff8743);
    border: none;
    font-weight: 700;
`

export const Button = styled.button `
    background: rgb(255, 100, 0);
    border:none;
    color:#fff;
    padding:10px;
    margin:5px;
    width:300px;
    cursor:pointer;
    border-radius:5px;
`
export const AddButton = styled.button `
    background: rgb(255, 100, 0);
    border:none;
    color:#fff;
    padding:10px;
    margin:5px;
    width:100%;
    cursor:pointer;
    border-radius:5px;
`

export const ButtonSecondary = styled.button `
    background: #fff;
    color: #000;    
    border:none;
    padding:10px;
    margin:5px;
    width:250px;
    cursor:pointer;
    border-radius:5px;
`

export const ButtonThird = styled.button `
    background: #ddd;
    color: #000;    
    border:none;
    padding:5px;
    cursor:pointer;
    border-radius:5px;
`

export const Input = styled.input `
    padding:10px;
    display:block;
    border-radius:5px;
    border:none;
`
export const InputCard = styled.div `
    display:grid;
    background:linear-gradient(180deg,#f3f0ee,#ddd);
    border-radius:10px;
`

export const Label = styled.label `
    display: block;
    margin: 0px 0px 10px;
    font-size: 14px;
    font-weight: 700;
`

export const NoDataFound = styled.h4 `
    text-align: center;
    margin: 10rem 0rem;
    display:block;
`