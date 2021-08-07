import React, { Fragment, useRef, useState } from "react";
import Input from "../../UI/Input/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {

  const ref = useRef();
  const [showErrorHandler, setshowErrorHandler] = useState(false);
  // const context = useContext(CartContext);

  const onSubmitHandler = (ev) => {
    ev.preventDefault();

    let enteredAmount = ref.current.value;
    let enteredAmountNumber = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
      setshowErrorHandler(true);
      return;
    }

    props.addedItemHandler(enteredAmountNumber);
    setshowErrorHandler(false);
    ref.current.value = 1;
    // console.log(context.items);

  } 

  return (
    <Fragment>
      <form className={classes.form} onSubmit={onSubmitHandler}>
        <Input
          label="Amount"
          ref={ref}
          input={{
            id: `amount_${props.id}`,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+Add</button>

        <br/>

        {showErrorHandler && <p style={{color:'red',fontSize: "14px"}}>Entered amount value must be 1 between 5 (1-5)</p>}
      </form>
    </Fragment>
  );
};

export default MealItemForm;
