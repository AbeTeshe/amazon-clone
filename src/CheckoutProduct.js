import React from 'react'
import "./checkoutProduct.css";
import {Grade } from "@mui/icons-material";
import { useStateValue } from './StateProvider';

const CheckoutProduct = ({id, image, title, price, rating}) => {
    const [state, dispatch] = useStateValue();
    console.log(state);
    
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image} alt="" />
        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checkooutProduct__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct__rating'>
                {Array(rating)
                .fill()
                .map((_, i) => (
                    <Grade style={{color: '#f0c14b'}}/>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct