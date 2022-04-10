import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ReviewCart.css'

const ReviewCart = (props) => {
    const{handleAddData, product} =props
    const{name, img,  price, shipping,quantity}=product
    return (
       <div>
            <div className='review-items'>
            <div>
                 <img width={100} src={img} alt="" />
            </div>
           <div>
           <p title='Product-name'>{name.length > 20 ? name.slice(0, 20): name}</p>
           <p>Shipping:  {shipping}</p>
           <p>Price:  {price}</p>
           <p>Quantity: {quantity}</p>
           </div>
           <div>
            <h5 onClick={ () => handleAddData(product)} className='delete-head'> <span className='delete-btn'><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></span> </h5>
           </div>
           
             
        </div>
       </div>
    );
};

export default ReviewCart;