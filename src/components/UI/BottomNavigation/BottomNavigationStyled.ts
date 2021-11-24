import styled from "styled-components";

export const Navigation = styled.nav `
    background: rgb(255, 100, 0);
    border:none;
    color:#fff;
    height:40px;
    position: -webkit-sticky;
	position: sticky;
	bottom: 0;

`
export const NavigationUl = styled.ul `
    margin:auto;
    list-style:none;
    display:flex
    `
export const NavigationLi = styled.li`
padding: 1vw 2.5vw;
    font-weight: 700;
`

export const NavigationText = styled.a `
    color:#fff;
    text-decoration:none;
`