import React, { useState,useContext } from 'react'
import "./login.scss"
import { LoginCall } from '../../context/authContext/apiCalls';
import { AuthContext } from '../../context/authContext/AuthContext';
import {Link} from "react-router-dom"

export default function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const {dispatch} = useContext(AuthContext);
    const handleLogin =(e) =>{
        e.preventDefault();
        LoginCall({email,password}, dispatch);
    }

  return (
    <div className='login'>
        <div className="top">
            <div className="wrapper">
                <div className="logo">
                    ScreenRush
                </div>
            </div>
        </div>
            
        <div className="container">
            <form action="">
                <h1>Sign In</h1>
                <input type="email" placeholder='Email Address' onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                <button className="loginButton" onClick={handleLogin}>Sign In</button>
                <span className='newToNetflix'>
                    New To Netflix ? 
                    <Link to={"/register"}>
                        <button className="signupButton">
                            Sign Up 
                        </button>
                    </Link>
                    
                </span>
                <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veniam enim tempore harum consequuntur hic accusamus pariatur facilis, rem sequi!
                </small>
            </form>
        </div>
    </div>
  )
}
