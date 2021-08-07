import React, { useReducer } from "react";
import CartContext from "./CartContext";
import InitialState from "./InitialState";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
        let updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        let existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        let existingCartItem = state.items[existingCartItemIndex];

        let updateItems;

        if(existingCartItem){
           let updateItem;

          //  console.log(existingCartItem)

           updateItem = {
             ...existingCartItem,
             amount: existingCartItem.amount + action.item.amount
           };

           updateItems = [...state.items];
           updateItems[existingCartItemIndex] = updateItem;

        }
        else{
          updateItems = state.items.concat(action.item);
        }
        

        return {
            items: updateItems,
            totalAmount: updateTotalAmount,
        };
    
    case "REMOVE":

      let existingFindCartItemIndex = state.items.findIndex(item => item.id === action.id);
      let existingFindCartItem = state.items[existingFindCartItemIndex];

      let updateTotalAmountForRemoval = state.totalAmount - existingFindCartItem.price;

      let updateItemsForRemoval;
      let updateItem;

      if(existingFindCartItem.amount === 1) {
        updateItemsForRemoval = state.items.filter(item => item.id !== action.id);
      }
      else {
        updateItem = {
          ...existingFindCartItem,
          amount: existingFindCartItem.amount - 1
        };

        updateItemsForRemoval = [...state.items];
        updateItemsForRemoval[existingFindCartItemIndex] = updateItem;
      }

      return {
        items: updateItemsForRemoval,
        totalAmount: updateTotalAmountForRemoval,
      };

    default:
      return state;
  }
};

const CartProvider = (props) => {

  const [cartState, cartDispatch] = useReducer(reducer, InitialState);

  const addedItem = (item) => {
      cartDispatch({type:'ADD', item: item});
  };

  const removedItem = (id) => {
      cartDispatch({type:'REMOVE', id: id });
  };

  const cartContext = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addedItem: addedItem,
      removedItem: removedItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
