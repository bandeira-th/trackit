import styled from "styled-components"
import { ACCENTBLUE, BKGDGREY, BRANCO, DARKBLUE} from "../../constants/colors.js"
import BTNIMAGE from "../../assets/images/Rectangle 9.svg"

export const StyledHabits = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${ BKGDGREY };
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 180px;
    }
`
export const AddHabitsBar = styled.div`
    margin-top: 70px;
    width: 100%;
    height: 77px;
    background-color: ${ BKGDGREY };
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 18px;
    h2{
        color: ${ DARKBLUE };
        font-size: 22px;
    }
    button{
        width: 44px;
        height: 35px;
        background-color: ${ ACCENTBLUE };
        color: ${ BRANCO};
        border: none;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        p{
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 36px;
        }
    }
`