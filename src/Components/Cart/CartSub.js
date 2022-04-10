import React from 'react';
import './cart.css'

const CartSub = (props) => {
    const {cart} =props
    console.log(cart)
    let total=0;
    let shipping=0;
    let quantity = 0;
    for(const product of cart){       
        quantity = quantity + product.quantity
        total=total + product.price * product.quantity
        shipping=shipping + product.shipping 
    }
    const tax =total*10/100;
    const grandPrice=total + shipping + tax
    return (
        <div className='main-cart'>
            <h4>Order Summry</h4>
            <h5>Select items: {quantity}</h5>
            <h5>Totap Price  : $ {total}</h5>
            <h5>Totap shipping: $ {shipping}</h5>
            <h5>Tax: $ {tax}</h5>
            <h4>Grand Total Price ${grandPrice}</h4>
            <h3>{props.children}</h3>
        </div>
    );
};

export default CartSub;