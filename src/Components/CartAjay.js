import React from 'react';
import { CartContext } from '../CartContext';
import CartAmountToggle from '../CartAmountToggle';

const CartAjay = ({id, amount}) => {
 
const { setDecrease, setIncrease} = CartContext();
console.log("Ajay_data_updating");
  return (
    <>
     <CartAmountToggle
        amount={amount}
        setDecrease={()=>setDecrease(id)}
        setIncrease={()=>setIncrease(id)}
      />
    </>
  )
}

export default CartAjay