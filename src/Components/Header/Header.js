import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
import CustomLink from './../CustomLink/CustomLink'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] =useAuthState(auth)
    const handleSignOut =() =>{
        signOut(auth)
    }
    return (
        <nav className='header-nav'>
           <img src={logo} alt="" />
           <ul className="nav-list">
            <li><CustomLink to='/' >Shop</CustomLink>  </li>   
            <li><CustomLink to='/about' >About</CustomLink>  </li>
            <li> <CustomLink to='/order' >Order</CustomLink></li>
            <li><CustomLink to='/inventory' >Inventory</CustomLink>  </li>     
             {
                 user ?
                 <button className='signOut' onClick={handleSignOut}>SignOut</button> :
                 <li><CustomLink to='/login'>Login Now</CustomLink></li>
             }
             
            </ul>
        </nav>
    );
};

export default Header;