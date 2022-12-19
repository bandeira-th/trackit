import styled from "styled-components";
import { BRANCO, DARKBLUE } from "../constants/colors";


export const StyledHeader = styled.div`
    width: 375px;
    height: 70px;
    position: fixed;
    top: 0;
    left: 50%;
    margin-left: -187.5px;
    background-color: ${ DARKBLUE };
    padding: 0px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img{
        width: 97px;
    }
    div{
        width: 51px;
        height: 51px;
        border-radius: 50%;
        background-color: ${ BRANCO };
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
        }
    }
`