import React from 'react'
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

const Subtotal = () => {
    const [{basket}] = useStateValue();
    const navigate = useNavigate();

  return (
    <div className='subtotal'>
        <CurrencyFormat 
           renderText={(value) => (
               <>
                 <p>
                     Subtotal ({basket.length} items):
                     <strong>{value}</strong>
                 </p>
                 <small className='subtotal__gift'>
                     <input type="checkbox"/> This Order contains a gift
                 </small>
               </>
           )}
           decimalScale={2}
           value={getBasketTotal(basket)}
           displayType={"text"}
           thousandSeparator={true}
           prefix={"$"}
           />
           <button onClick={e => navigate("/payment")}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal