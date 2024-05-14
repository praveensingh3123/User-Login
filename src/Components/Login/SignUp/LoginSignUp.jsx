import React, { useState } from 'react'
import './LoginSignUp.css'
import emailIcon from '../../Assets/email.png';
import passwordIcon from '../../Assets/password.png';
import personIcon from '../../Assets/person.png';

const LoginSignUp = () => {
  
    const [action, setAction] = useState("Sign Up");
    return (
    <div className="container">
        <div className="header">
             <div className="text"> {action}</div>
             <div className="underline"> </div>
        </div>
        <div className="inputs">
            {action === "Login" ?<div></div>: <div className="input">
                <img src={personIcon} alt=""/>
                <input type="text" placeholder='Name'/>
            </div>}
            
            <div className="input">
                <img src={emailIcon} alt=""/>
                <input type="email" placeholder='Email Id'/>
            </div>  
            <div className="input">
                <img src={passwordIcon} alt=""/>
                <input type="password" placeholder='Password'/>
            </div>   

        </div>
        {action === "Sign Up" ? <div></div>:  <div className="forgot-password">Forgot Password ? <span> Clich Here!</span></div>}
        <div className="submit-container">
            <div className={action === "Login"? "submit gray": "submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
            <div className={action === "Sign Up"? "submit gray": "submit"} onClick={() => {setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default LoginSignUp
