import Header from "../../components/Header";
import { AddHabitsBar, StyledHabits } from "./styles";


export default function Habits() {
    return(
        <StyledHabits>
            <Header/>
            <AddHabitsBar>
                <h2>Meus hábitos</h2><button><p>+</p></button>
            </AddHabitsBar>

        </StyledHabits>
    )
}