import styled from "styled-components";

export const Navigation = styled.nav `
    background: rgb(255, 100, 0);
    border:none;
    color:#fff;
    height:50px;
    position: -webkit-sticky;
	position: fixed;
    
	bottom: 0;

`
export const NavigationUl = styled.ul `
    margin:auto;
    list-style:none;
    display:flex;
    padding:0px;
    `
export const NavigationLi = styled.li`
padding: 1vw 2.5vw;
    font-weight: 700;
`

export const NavigationText = styled.a `
    color:#fff;
    text-decoration:none;
`