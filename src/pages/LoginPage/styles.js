import styled from "styled-components"
import { ACCENTBLUE, BRANCO } from "../../constants/colors.js"

export const StyledLogin = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${ BRANCO };
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
        width: 180px;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 30px;
    margin-top: 35px;
    color: ${ACCENTBLUE};
    input{
        height: 45px;
        border-radius: 3px;
        border: 1px solid lightgrey;
    }
    label{
        display: flex;
        flex-direction: column;
    }
` 
