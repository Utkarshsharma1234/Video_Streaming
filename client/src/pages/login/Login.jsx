import React, { useState,useRef } from 'react'
import "./login.scss"

export default function Login() {
    
  return (
    <div className='login'>
        <div className="top">
            <div className="wrapper">
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                alt="" 
                className="logo" />
            </div>
        </div>
            
        <div className="container">
            <form action="">
                <h1>Sign In</h1>
                <input type="email" placeholder='Email Address' name="" id="" />
                <input type="password" placeholder="Password" name="" id="" />
                <button className="loginButton">Sign In</button>
                <span>
                    New To Netflix ? <b>Sign Up Now.</b>
                </span>
                <small>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veniam enim tempore harum consequuntur hic accusamus pariatur facilis, rem sequi!
                </small>
            </form>
        </div>
    </div>
  )
}
