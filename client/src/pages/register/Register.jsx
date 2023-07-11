import React, { useState,useRef } from 'react'
import "./register.scss"

export default function Register() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleStart = ()=>{
        setEmail(emailRef.current.value);
    }

    const handleFinish = () =>{
        setPassword(passwordRef.current.value)
    }
  return (
    <div className='register'>
        <div className="top">
            <div className="wrapper">
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="" 
            className="logo" />
            <button className="loginButton">Sign In</button>
        </div>
            </div>
            
        <div className="container">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis eos iste et eveniet ratione delectus animi minima neque ducimus cum.
            </p>
            {!email ? (
            <div className="input">
                <input type="email" placeholder='Email Address' ref={emailRef}/>
                <button className="registerButton" onClick={handleStart}>Get Started</button>
            </div>
            ) : (
            <form className="input">
                <input type="password" placeholder='Password' ref={passwordRef}/>
                <button className="registerButton" onClick={handleFinish}>Start</button>
            </form>
            )}
            
        </div>
    </div>
  )
}
