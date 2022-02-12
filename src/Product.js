import React from 'react';
import { Grade } from '@mui/icons-material';
import "./product.css";
import { useStateValue } from './StateProvider';

const Product = ({id, title, image, price, rating}) => {
    const[{basket}, dispatch] = useStateValue();
    console.log(basket);
    
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    }

    return <div className='product'>
      <div className='product__info'>
          <p>{title}</p>
          <p className="product__price">
              <small>$</small>
              <string>{price}</string>
          </p>
          <div className='product__rating'>
             {Array(rating).fill().map((_, i) => (
                  <Grade className="rating"/>
             ))}
          </div>
      </div>
      <img src={image} alt="img" />
      <button onClick={addToBasket}>Add to Basket</button>
  </div>;
};

export default Product;
