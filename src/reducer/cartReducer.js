const CartReducer=(state,action)=>{
    if(action.type==="AddToCartItems"){
      let { id, color, amount, product } = action.payload;

let updateItem=state.cart.find((curElem)=>curElem.id===id+color)
if(updateItem){
let updateAmount=state.cart.map((curElem)=>{
    if(curElem.id===id+color){      
    let newAmount=curElem.amount+amount;
    if(newAmount>=curElem.max){
        newAmount=product.max
    }
      return{
            ...curElem,
            amount:newAmount
        }}
        else{
            return curElem
        }
    });
    return{
        ...state.cart,
        cart:updateAmount
    }
}

else{

    let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
  
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
}

    if(action.type === "REMOVE_ITEM") {
       let updateCart = state.cart.filter(
        (curElem) => curElem.id !== action.payload
        );
        
        return{
            ...state,
            cart:updateCart
        };}

if(action.type==="Decrease_ITEM"){
    let updateValue=state.cart.map((curElem)=>{
        if(curElem.id===action.payload){
          let  newItemAmount=curElem.amount-1;
          if(newItemAmount<=1){
            newItemAmount=1
          }

          return{
            ...curElem,
            amount:newItemAmount
          }
        }
        else{
            return curElem
        }
    });

    return {
        ...state,
        cart:updateValue
    }
}

if(action.type==="Increase_ITEM"){
    let updatePlusValue=state.cart.map((curElem)=>{
        if(curElem.id===action.payload){
          let  newPlusAmount=curElem.amount+1;
          if(newPlusAmount>=curElem.max){
            newPlusAmount=curElem.max
          }

          return{
            ...curElem,
            amount:newPlusAmount
          }
        }
        else{
            return curElem
        }
    });

    return {
        ...state,
        cart:updatePlusValue
    }
}

if(action.type==="Update_total_item"){
    let newCartItem=state.cart.reduce((initialValue,curElem)=>{
        let {amount}=curElem;
        initialValue+=amount;
        return initialValue
    },0)
return{
    ...state,
    total_item:newCartItem
}}

if(action.type==="Update_total_Amount"){
    let updateAmount=state.cart.reduce((initialValue,curElem)=>{
         let {amount,price}=curElem;
         initialValue=initialValue+(amount*price)
         return initialValue
    },0)
    return {
        ...state,
        total_Amount:updateAmount
    }
}

    if(action.type==="RemoveCartItems"){
        return{
            ...state,
            cart:[]
        }
    }
        
        return state
        };

export default CartReducer;