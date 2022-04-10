import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import CartSub from '../Cart/CartSub';
import CustomFunc from '../CustomOrder/CustomFunc';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    const [items, setItems] = CustomFunc()
    const [cart , setCart] =useState([])
   
    useEffect (() =>{
        const addedProduct =getStoredCart()
        const saveChat=[]
        for( const id in addedProduct){
          const addedItems=items.find(item => item.id === id)
        if(addedItems){
           const quantity =addedProduct[id]
           addedItems.quantity=quantity
          saveChat.push(addedItems)
        }
        setCart(saveChat)
        }
    } , [items])
    const handleAddCart = (selectProduct) =>{    
        let newCart =[]
        const exits = cart.find(product => product.id===selectProduct.id)
        if(!exits){
            selectProduct.quantity=1;
            newCart = [...cart, selectProduct]
        }else{
            const rest = cart.filter(product => product.id !== selectProduct.id)
           exits.quantity=exits.quantity + 1
           newCart = [...rest , exits]
        }
       
       setCart(newCart)
      addToDb(selectProduct.id)
       
    }
    return (
        <div className='products'>
            
           <div className="products-container">
             
              {
                  items.map(item => <Product product={item} key={item.id} handleAddCart={handleAddCart} ></Product>)
              }
           </div>
           <div className="product-summery">
               <CartSub cart={cart}><Link to='/order'>
                <button>Order check list</button>
                </Link></CartSub>
               
           </div>
        </div>
    );
};

export default Products;