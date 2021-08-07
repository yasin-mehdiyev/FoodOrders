import React, { useRef } from "react";
import useInputs from "../../customhook/useInputs";
import classes from "./Checkout.module.css";

const Checkout = (props) => {

  const { enteredVal, inputRef } = useInputs((value) => value.trim().length === 0);

//   let nameInputRef = useRef();
//   let streetInputRef = useRef();
//   let postalInputRef = useRef();
//   let cityInputRef = useRef();

  const checkoutFormHandler = (ev) => {
    ev.preventDefault();
    // let enteredName = nameInputRef.current.value;
    // let enteredStreet = streetInputRef.current.value;
    // let enteredPostal = postalInputRef.current.value;
    // let enteredCity = cityInputRef.current.value;
    
    alert(enteredVal);

    // alert(`Checkout Form Handler Datas: ${enteredName} - ${enteredStreet} -  ${enteredPostal} - ${enteredCity}`);

    // nameInputRef.current.value = '';
    // streetInputRef.current.value = '';
    // postalInputRef.current.value = '';
    // cityInputRef.current.value = '';

  };

  return (
    <form className={classes.form} onSubmit={checkoutFormHandler}>

      <h2 className={classes.checkoutTitle}>Checkout Form</h2>

      <div className={classes.textFields}>
        <div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name: </label>
            <input type="text" id="name" ref={inputRef} />
          </div>

          <div className={classes.control}>
            <label htmlFor="street">Street: </label>
            <input type="text" id="street" />
          </div>

          <div className={classes.control}>
            <label htmlFor="postal">Postal Code: </label>
            <input type="text" id="postal" />
          </div>

          <div className={classes.control}>
            <label htmlFor="city">City: </label>
            <input type="text" id="city" />
          </div>
        </div>
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
