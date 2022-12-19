import { StyledSignUp, Form  } from "./styles"
import MainLogo from "../../assets/images/logo-track-principal.svg"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../../constants/urls"
import { useContext, useState } from "react"




export default function SignUp() {
    const [user, setUser] = useState()
    const navigate = useNavigate()

    
      function handleSubmit(e){
        e.preventDefault()
        axios.post(`${BASE_URL}auth/sign-up`, user)
        .then(res => navigate("/"))
        .catch(err => console.log(err.data))
      } 


       function handleChange(event){
        setUser({ ...user, [event.target.name]: event.target.value })
        console.log('user', user)
    }
    
    
    return(
    <StyledSignUp>
        <img src={MainLogo} alt=""/>
        <Form onSubmit={handleSubmit}>
            <input id="email" type="email" name="email" onChange={handleChange} required/>
            <input id="name" type="text" name="name" onChange={handleChange} required/>
            <input id="image" type="url" name="image" onChange={handleChange} required/>
            <input id="pass" type="password" name="password" onChange={handleChange} required/>
            <input type="submit" value="Submit" />
        </Form>
        <Link to="/">
           <p>Já tem uma conta? Faça login!</p> 
        </Link>
            
        
    </StyledSignUp>
    )
}