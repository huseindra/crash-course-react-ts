import styled from "styled-components";
import {Link} from 'react-router-dom';

export const Navigation = styled.nav `
    background: rgb(255, 100, 0);
    border:none;
    color:#fff;
    height:50px;
    position: -webkit-sticky;
	position: fixed;
    width:425px;
	bottom: 0;

`
export const NavigationUl = styled.ul `
    margin:auto;
    list-style:none;
    display:flex;
    padding:0px;
    `
export const NavigationLi = styled.li`
    padding: 18px 22px;
    font-weight: 700;
`

export const NavigationText = styled(Link) `
    color:#fff;
    text-decoration:none;
`