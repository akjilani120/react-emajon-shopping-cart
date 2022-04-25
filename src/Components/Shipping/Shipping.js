import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipping = () => {
    const [name, setName] =useState("")
    const [email, setEmail] =useState("")
    const [address, setAddress] =useState("")
    const [phone, setPhone] =useState("")
    const [user] =useAuthState(auth)
    const handleName =(event) =>{
        setName(event.target.value)
    }
    
    const handleAddress =(event) =>{
        setAddress(event.target.value)
    }
    const hanleSForm =(event) =>{
        event.preventDefault()
    }
    const handlePhone =(event) =>{
        setPhone(event.target.value)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Your Shipping Info</h2>
                <form onSubmit={hanleSForm}>
                <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleName} type="text" name="name" id="" required />
                    </div>    
                                
                    <div className="input-group">
                        <label htmlFor="address">Email</label>
                        <input value={user?.email} type="email" name="address" id="" required  />                        
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddress} type="text" name="password-confirm" id=""  required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhone} type="text" name="password-confirm" id=""  required />
                    </div>
                    <input className='submit' type="submit" value="Add Shipping" />
                    
                </form>
                
            </div>
           
        </div>
    );
};

export default Shipping;