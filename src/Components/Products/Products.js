import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import CartSub from '../Cart/CartSub';
import CustomFunc from '../CustomOrder/CustomFunc';
import Product from '../Product/Product';
import './Products.css'
const Products = () => {
    const [items, setItems] = useState([])
    const [cart , setCart] =useState([])
   const [pageCount, setPageCount]=useState(0)
   const [page, setPage] =useState(0)
   const [size, setSize] =useState(10)  

   useEffect( () => {
       fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
       .then(res => res.json())
       .then(data => setItems(data))
   }, [page, size])
    useEffect (() =>{
        const addedProduct =getStoredCart()
        const saveChat=[]
        for( const id in addedProduct){
          const addedItems=items.find(item => item._id === id)
        if(addedItems){
           const quantity =addedProduct[id]
           addedItems.quantity=quantity
          saveChat.push(addedItems)
        }
        setCart(saveChat)
        }
    } , [items])
    useEffect( () =>{
        fetch("http://localhost:5000/pageCount")
        .then(res =>res.json())
        .then(data => {
            const count =data.count;
            const pages = Math.ceil(count/10);
            setPageCount(pages)
        })
    }, [])
    const handleAddCart = (selectProduct) =>{    
        let newCart =[]
        const exits = cart.find(product => product._id===selectProduct._id)
        if(!exits){
            selectProduct.quantity=1;
            newCart = [...cart, selectProduct]
        }else{
            const rest = cart.filter(product => product._id !== selectProduct._id)
           exits.quantity=exits.quantity + 1
           newCart = [...rest , exits]
        }
       
       setCart(newCart)
      addToDb(selectProduct._id)
       
    }
    return (
        <div className='products'>
            
           <div className="products-container">
             
              {
                  items.map(item => <Product product={item} key={item._id} handleAddCart={handleAddCart} ></Product>)
              }
               <div className='page-count'>
               {
                   [...Array(pageCount).keys()].map(number => <button onClick={() => setPage(number)} className={page ===number ? "select" : ""}>{number}</button>)
               }
               {size}
               <select onChange={e => setSize( e.target.value)}>
                   <option value="5">5</option>
                   <option value="10" selected>10</option>
                   <option value="15">15</option>
                   <option value="20">20</option>
               </select>
           </div>
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