import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const {handleAddCart, product} =props
    const {name, img, price, ratingsCount, seller} = product
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="card">            
                <img src={img} alt="" />
                <p className='product-name'>{name}</p>               
                <p className='product-price'>Price $ {price}</p>
                <p> Rating: {ratingsCount} starts</p>
                <p >Seller: {seller}</p>
                <button className='card-btn' onClick={() =>handleAddCart(product)} >{ element} A to cart</button>              
            
        </div>
    );
};

export default Product;