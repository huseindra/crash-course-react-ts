import styled from "styled-components";

export const SkeletonItem = styled.div `
    display: flex;
    align-items: center;
    margin: 15px 0;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    position: relative;
`

export const SkeletonInfo = styled.div 
`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;

`

export const SkeletonDate = styled.div `
    &{
        width: 50%;
        height: 8px;
        background: #f2f2f2;
        position: relative;
        overflow: hidden;
    }
    &:before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 30px;
        height: 100%;
        background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
        animation: loading 2s infinite linear;
    }
`

export const SkeletonTitle = styled.div `
    &{
    width: 80%;
    height: 10px;
    background: #f2f2f2;
    position: relative;
    overflow: hidden;
    margin:10px 0px;
    }
    &:before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
        animation: loading 2s infinite linear;
    }
`
export const SkeletonAmount = styled.div `
    &{
    width: 20%;
    height: 8px;
    background: #f2f2f2;
    position: relative;
    overflow: hidden;
    }
    &:before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
        animation: loading 2s infinite linear;
    }
`