import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'
import CustomLink from './../CustomLink/CustomLink'
const Header = () => {
    return (
        <nav className='header-nav'>
           <img src={logo} alt="" />
           <ul className="nav-list">
            <li><CustomLink to='/' >Shop</CustomLink>  </li>   
            <li><CustomLink to='/about' >About</CustomLink>  </li>
            <li> <CustomLink to='/order' >Order</CustomLink></li>
            <li><CustomLink to='/inventory' >Inventory</CustomLink>  </li>     
            <li><CustomLink to='/login'>Login Now</CustomLink></li>
             
            </ul>
        </nav>
    );
};

export default Header;