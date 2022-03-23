import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <nav className='header-nav'>
           <img src={logo} alt="" />
           <div className="nav-list">
               <a href="/shop">Shop</a>
               <a href="/order">Orders</a>
               <a href="/order review"> Inventory</a>
               <a href="/manage inventory">About</a>              
            </div>
        </nav>
    );
};

export default Header;