import { StyledLogin, Form } from "./styles";
import MainLogo from "../../assets/images/logo-track-principal.svg"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


export default function Login() {
    const[user, setUser] = useState()
    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", user)
        .then((res) => navigate("/hoje"))
        .catch((err) => {console.log(err.message)})
    }

    function handleChange(e){
        const {name, value} = e.target 
        setUser({...user,[name]: value})
        console.log(user)
    }
    return(
        <StyledLogin>
            <img src={MainLogo} alt=""/>
            <Form onSubmit={handleSubmit} >
                <input id="name" type="email" name="email" onChange={handleChange}/>
                <input id="name" type="password" name="password" onChange={handleChange}/>
                <input type="submit" value="Submit" />
            </Form>
            <Link to="/cadastro">
                Não tem uma conta? Cadastre-se!
            </Link>
            
        </StyledLogin>
    )
}

