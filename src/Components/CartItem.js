import React from "react";
import InCurr from "../supportive/InCurr";
import { FaTrash } from "react-icons/fa";
import CartAmountToggle from "../CartAmountToggle";
import { CartContext } from "../CartContext";


const CartItem = ({id, amount, color, price, name, image}) => {
  
  const { removeItem, setDecrease, setIncrease} = CartContext();
  console.log("Cart_Item_Calling");

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
          <div className="color-div">
            <p>color:</p>
            <div
              className="color-style"
              style={{ backgroundColor: color, color: color }}
            ></div>
          </div>
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
          <InCurr price={price} />
        </p>
      </div>
      {/* add to cart  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={()=>setDecrease(id)}
        setIncrease={()=>setIncrease(id)}
      />

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          <InCurr price={price * amount} />
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
