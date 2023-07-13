import React, { useState } from 'react'
import "./register.scss"
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import {toast} from "react-toastify"

export default function Register() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [username,setUsername] = useState("");
    const navigate = useNavigate();

    console.log(email,username,password);
    const handleFinish = async (e) =>{
        e.preventDefault();
            try{
                const res = await axios.post("http://localhost:8800/api/auth/register", {email,password,username})
                
                if(res.data.error){
                    toast(res.data.error);
                }
    
                else{
                    navigate("/login")
                }
            }
            catch(err){
                console.log(err);
            }      
        
    }
  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
                <div className="logo">
                    ScreenRush
                </div>                                    
            
        </div>
            </div>
            
        <div className="container">
            <h1>"Unleash the world of entertainment at your fingertips</h1>
            
            <form>

                <input type="email" name="email" id="email" placeholder='Email Address' onChange={(e)=>setEmail(e.target.value)}/>
                <input type="username" placeholder='username' onChange={(e)=>setUsername(e.target.value)}/>
                <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                <button className="registerButton" onClick={handleFinish}>Start</button>
            </form>

            <div className='signindiv'>
                <span>
                    Already have an account ? 
                </span>
                <Link to={"/login"}>
                    <button className="signinButton">
                        Sign In
                    </button>
                </Link>  
            </div>
            
        </div>
    </div>
  )
}
