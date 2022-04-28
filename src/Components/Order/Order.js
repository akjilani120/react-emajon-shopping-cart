import React from 'react';
import { Link } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import CartSub from '../Cart/CartSub';
import CustomFunc from '../CustomOrder/CustomFunc';
import ReviewCart from '../ReviewCart/ReviewCart';
import UseCart from '../UseCart/UseCart';

const Order = () => {
    const [items, setItems]= CustomFunc()
    const [cart, setCart] = UseCart(items)
    const handleAddData =(product) =>{
        const rest = cart.filter( pd => pd._id !== product._id)
        setCart(rest)
        removeFromDb(product._id)
    }
    return (
        <div className='products'>
            <div className='review-container' >
            {
                cart.map(product => <ReviewCart product={product} key={product._id} handleAddData={handleAddData}></ReviewCart>  )
            }
            </div>
            <div className='product-summery'>
                <CartSub cart={cart} > <Link to='/shipping'>
                <button>Order check out</button>
                </Link> </CartSub>
            </div>
        </div>
    );
};

export default Order;