import React, { useContext, useEffect, useState } from "react";
import Modal from "../UI/Modal/Modal";
import CartItem from "./CartItem";
import classes from "./CartPopup.module.css";
import CartContext from "../../store/CartContext";
import Checkout from "./Checkout";

const CartPopup = (props) => {
  const [existCheckoutForm, setExistCheckoutForm] = useState(false);
  const ctx = useContext(CartContext);

  const totalAmount = ctx.totalAmount.toFixed(2);
  const hasItem = ctx.items.length > 0;

  const addedItemHandler = (item) => {
    ctx.addedItem({ ...item, amount: 1 });
  };

  const removedItemHandler = (id) => {
    ctx.removedItem(id);
  };

  const handleOrderSubmit = () => {
    setExistCheckoutForm(true);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          addItem={addedItemHandler.bind(null, item)}
          removeItem={removedItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  const popupButtons = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.closeModal}>
        Close
      </button>

      {hasItem && (
        <button className={classes.button} onClick={handleOrderSubmit}>
          Order
        </button>
      )}
    </div>
  );

  const checkoutButtons = <Checkout onCancel={props.closeModal} />;

  return (
    <Modal onClose={props.closeModal}>
      {cartItems}

      <div className={classes.total}>
        <span>Total Amount: </span>
        <span>${totalAmount}</span>
      </div>

      {existCheckoutForm && hasItem ? (
        checkoutButtons
      ) : 
      existCheckoutForm && !hasItem && (
        <div className={classes.actions}>
            <button className={classes["button--alt"]} onClick={props.closeModal}>
                Close
            </button>
        </div>
      )}

      {!existCheckoutForm && popupButtons}
    </Modal>
  );
};

export default CartPopup;
