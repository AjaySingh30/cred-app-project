import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./reducer/cartReducer";

const createCartContext=createContext();

const jyoti=()=>{
    let ajayT=localStorage.getItem("cartItemLocal");
    if(ajayT){
      return JSON.parse(ajayT)
    }
}

const initialState= {
    cart: jyoti(),
    total_Amount:"",
    total_item:"",
    shipping_fee:5000,
}


const CartItemContext=({children})=>{
 const [state,dispatch]= useReducer(reducer,initialState);

const addItem=(color,id,amount,product)=>{
   dispatch({type:"AddToCartItems",payload:{id,color,amount,product}})
}

 const removeItem = (id) => {
    dispatch({type:"REMOVE_ITEM", payload: id});
 };

 const removeAll=()=>{
    dispatch({type:"RemoveCartItems"});
 }

 const setDecrease = (id) => {
   dispatch({type:"Decrease_ITEM", payload: id});
};

const setIncrease = (id) => {
   dispatch({type:"Increase_ITEM", payload: id});
};



 useEffect(()=>{
   dispatch({type:"Update_total_item"});
   dispatch({type:"Update_total_Amount"});
   localStorage.setItem("cartItemLocal",JSON.stringify(state.cart))
 },[state.cart])

  

return (
<createCartContext.Provider value={{...state,addItem,removeItem, removeAll, setDecrease, setIncrease}}>
        {children}
</createCartContext.Provider>
)
}

const CartContext=()=>{
    return useContext(createCartContext);
}


export {CartItemContext, CartContext};