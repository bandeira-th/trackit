import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Login from "./pages/LoginPage/Login";
import SignUp from "./pages/SignUpPage/SignUp";
import Today from "./pages/TodayPage/Today";

function App() {
  
  return (
    
      <AppContainer>
        <StyledApp>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login/>} />
              <Route path="/cadastro" element={<SignUp/>} />
              <Route path="/hoje" element={<Today />} />
            </Routes>
          </BrowserRouter>
        </StyledApp>
      </AppContainer>
    
    
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
`
const StyledApp = styled.div`
  width: 378px;
  height: 668px;
  background-color: #000;
  display: flex;
  
`

