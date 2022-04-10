import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css'
import img from './logo.png'
import auth from '../../firebase.init'
const SignUp = () => {
    const [email, setEmail] =useState("")
    const [password, setPassword] =useState("")
    const [confirmPassword, SetConfirmPassword] =useState("")
    const [error, setError] =useState("")
    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth)
    const navigate=useNavigate()
  
    const handleEmail =(event) =>{
        setEmail(event.target.value)
    }
    const handlePassword =(event) =>{
        setPassword(event.target.value)
    }
    const handleConfirmPassword =(event) =>{
        SetConfirmPassword(event.target.value)
    }
    if(user){
        navigate("/home")
    }
    const hanleSForm =(event) =>{
        event.preventDefault()
        const passwordCheck =/(?=.*[0-9])(?=.*[!@#$%^&*])/
        if(!passwordCheck.test(password)){
            setError("Please give special Chareter")
            return;
        }
        if(password !== confirmPassword){
            setError("Your password is not maching")
            return
        }
        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>SignUP</h2>
                <form onSubmit={hanleSForm}>
                <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name="email" id="" required />
                    </div>   
                    <p style={{color:"red"}}>{error}</p>                
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassword} type="password" name="password" id="" required  />                        
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPassword} type="password" name="password-confirm" id=""  required />
                    </div>
                    <input className='submit' type="submit" value="Sign In" />
                    <p >Already have an account? <Link className='signOutLink' to="/login">Login </Link></p>
                </form>
                <dir className="googleLogIn">
                    <img className='googlelogo' src={img} alt="" /> <span>Google Log In</span>
                </dir>
            </div>
           
        </div>
    );
};

export default SignUp;