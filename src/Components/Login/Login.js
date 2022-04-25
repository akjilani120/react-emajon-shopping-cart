 import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from './logo.png'
import './Login.css'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Login = () => {
    const [email, setEmail]= useState('')
    const [password, setPassword]= useState('')
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const navigate =useNavigate()
    const location=useLocation()
    const from =location?.state?.from?.pathname || "/"
    const handleEmailBluer = (event) =>{
        setEmail(event.target.value)
    }
    if(user){
        navigate(from, {replace:true})
    }
    const handlePasswordBluer = (event) =>{
        setPassword(event.target.value)
    }
    const handleSubmit =(event)=>{
        event.preventDefault()
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
           
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBluer} type="email" name="email" id=""  required />
                    </div>
                    <div className="input-group">
                        <label  htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBluer} type="password" name="password" id="" required />
                        <p style={{color:"red"}}>{error && error.message.slice(22, 36)}</p>
                    </div>
                    <input className='submit' type="submit" value="Login" />
                    <p>{loading && <p>Loading.......</p>}</p>
                    <p >New to Amazon? <Link className='signOutLink' to="/signUp">Create new account</Link></p>
                </form>
                <dir className="googleLogIn">
                    <img className='googlelogo' src={img} alt="" /> <span>Google Log In</span>
                </dir>
            </div>
           
        </div>
    );
};

export default Login;