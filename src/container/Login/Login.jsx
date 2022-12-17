import React, { useState } from "react";
import "./login.css";
import AM from '../../Assets/AM black.svg'
import {signInWithEmailAndPassword} from 'firebase/auth'
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router-dom";


function Login() {
    const [email,setEmail] = useState("")
    const [password, setPassword]= useState("")
    const navigate = useNavigate()
    const login = async () => {
        try {
          const user = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );

          localStorage.setItem('token', user.user.accessToken)
          if(login){
            navigate('/main')
          }
        } catch (error) {
          console.log(error.message);
        }
      };

  return (
    <div className="assets__login">
      <div className="assets__login-content">
        <img src={AM} alt='AM'/>
        <label>
          <p>Email</p>
          <input type="text" placeholder="Your email here" onChange={(e)=>setEmail(e.target.value)}/>
        </label>
        <label>
          <p>Password</p>
          <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
        </label>
        <button onClick={login}> Login </button>
      </div>
    </div>
  );
}

export default Login;
