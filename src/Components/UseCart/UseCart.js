import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../utilities/fakedb';

const UseCart = (product) => {
    const [cart, setCart]=useState([])
    useEffect( () =>{
        const addedProduct=getStoredCart()
        const saveData =[]
    for( const id in addedProduct){
        const addedItem=product.find( p=> p.id === id)
       if(addedItem){
        const quantity = addedProduct[id]
        addedItem.quantity = quantity;
       
        saveData.push(addedItem)
       }
       setCart(saveData)
    }
   
    }, [product])

   return[cart, setCart]
};

export default UseCart;