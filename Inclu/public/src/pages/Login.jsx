import React, { useState, useEffect} from "react";
import { Link, useNavigate, } from "react-router-dom";
import styled from "styled-components";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import logo from "../assets/logo.jpeg";
import { loginRoute } from "../utils/APIRoutes";

function Login() {
    const navigate = useNavigate();
    const toastOptions = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      };
    const [values, setValues] = useState({
        username: "",
        password: "", 
      }); 
      
      useEffect(() => {

        if(localStorage.getItem("chat")){
            navigate("/");
        }
      },[navigate]);

    const handleSubmit = async (event)=>{
        event.preventDefault();
        if (handleValidation()) {
            const { password, username,} = values;
            const {data} = await axios.post(loginRoute, {
                username,
                password,
            });
            if (data.status===false) {
                toast.error(data.msg, toastOptions);
            }
            if(data.status===true){
                localStorage.setItem('chat', JSON.stringify(data.user));
                navigate("/");
            }
            
        }; 
    };
    const handleValidation = () => {
        const { password,  username, } = values;
        if (password === "") {
          toast.error(
            "Email and password are required.",toastOptions);
          return false;
        } else if (username.length === "") {
          toast.error(
            "Email and password are required",toastOptions);
          return false;
        }
        return true;
      };
    const handleChange = (event) => {
        setValues({ ...values,[event.target.name]: event.target.value});
    }
  return (
    <>
    <FormerContainer>
        <form onSubmit={(event)=>handleSubmit(event)}>
            <div className="brand">
            <img src={logo} alt="logo"/>
                <h1>Inclukathon</h1>
            </div>
            <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={(e) => handleChange(e)}
                min='3'
                /> 
            <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={(e) => handleChange(e)}
                />
              <button type="submit">Login In</button>
              <span>
                Don't have an account ?<Link to="/register">Register</Link>
                 </span>      
        </form>
    </FormerContainer>
    <ToastContainer />
  </>
  )
}
const FormerContainer = styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: colum;
justify-content: center;
gap: 1rem;
align-items: centre;
background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 77%, rgba(252,176,69,1) 100%);
.brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: #00000076;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }

`;

export default Login;