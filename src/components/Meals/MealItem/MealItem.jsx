import React, { useContext } from "react";
import MealItemForm from "../MealItemForm/MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/CartContext";

const MealItem = (props) => {
  const price = props.price.toFixed(2);

  const ctx = useContext(CartContext);

  const addedItemHandler = (amount) => {
    ctx.addedItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  }

  return (
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.desc}</div>
          <div className={classes.price}>{price}</div>
        </div>

        <MealItemForm id={props.id} addedItemHandler={addedItemHandler} />
      </li>
  );
};

export default MealItem;
