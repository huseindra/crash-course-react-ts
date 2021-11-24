import styled from "styled-components";

export const ChartCard = styled.div
`
    padding: 1rem;
    border-radius: 12px;
    background-color: #ddd;
    text-align: center;
    display: flex;
    justify-content: space-around;
    height: 10rem;
`

export const ChartBarCard = styled.div
`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CharBarInner = styled.div
`
    height: 100%;
    width: 100%;
    border-radius: 12px;
    background-color: #fff;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export const ChartBarFill = styled.div 
`
    background: linear-gradient(180deg,#ff902a,#ff6400);
    width: 100%;
    transition: all 0.3s ease-out;
`

export const ChartBarLabel = styled.div
`
    font-weight: bold;
    font-size: 0.5rem;
    text-align: center;
`