import styled from "styled-components"
import { BRANCO } from "../../constants/colors.js"

export const StyledToday = styled.div`
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
