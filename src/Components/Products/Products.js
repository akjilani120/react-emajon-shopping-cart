import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    const [items, setItems] = useState([])
    const [cart , setCart] =useState([])
    useEffect( () =>{
        fetch("products.json")
        .then(res  => res.json())
        .then(data => setItems(data))
    }, [])
    const handleAddCart = (product) =>{       
       const newCart = [...cart, product]
       setCart(newCart)
       
    }
    return (
        <div className='products'>
            
           <div className="products-container">
             
              {
                  items.map(item => <Product product={item} key={item.id} handleAddCart={handleAddCart} ></Product>)
              }
           </div>
           <div className="product-summery">
               <h4>Product Summry</h4>
               <h5>Select items: {cart.length}</h5>
           </div>
        </div>
    );
};

export default Products;