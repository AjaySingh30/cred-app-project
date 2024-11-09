import React from 'react';
import styled from "styled-components";
import {CartContext} from './CartContext';
import CartItem from './Components/CartItem';
import { NavLink } from 'react-router-dom';
import InCurr from './supportive/InCurr';

function Cart() {
  const {cart,removeAll, total_Amount, shipping_fee}=CartContext();
  return (
    <Wrapper>
    <div className="container">
      <div className="cart-heading grid grid-five-column">
      <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
          <p>Remove</p>
        </div>
        <hr />
       <div className='cart-item'>
        {cart.map((curElem)=>{
          return <CartItem key={curElem.id} {...curElem}/>
        })}
       </div>
       <hr />
       <div className="button-container">
       <NavLink  to="/products">
       <button className='button1'>Continue Shopping</button>
       </NavLink>
       <button className='button1' onClick={()=>removeAll()}>
        Clear All
       </button>
       </div>
        {/* order total_amount */}
        <div className="order-total--amount">
          <div className="order-total--subdata">
       <div>
        <p>item value:</p>
        <p><InCurr price={total_Amount} /></p>
       </div>
       <div>
        <p>Shipping value:</p>
        <p><InCurr price={shipping_fee} /></p>
       </div>
       <hr/>
       <div>
        <p>Total value:</p>
        <p>{total_Amount+shipping_fee}</p>
       </div>
       </div>
       </div>
      </div>
</Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }

 /* Using margins */
 .button-container {
            display: flex;}
 .button-container button {
            margin-right: 100rem; /* Adjust as needed */}

  .button1 {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    background-color: #04AA6D; /* Green */
  border: none;
  color: white;
  padding: 2px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
    
    
    }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;

export default Cart