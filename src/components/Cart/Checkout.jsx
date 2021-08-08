import React, { useContext } from "react";
import useInputs from "../../customhook/useInputs";
import classes from "./Checkout.module.css";
import CartContext from "../../store/CartContext";

const Checkout = (props) => {

  let bucket = useContext(CartContext);

  const { 
    enteredVal : enteredValName, 
    inputRef : inputRefName, 
    inputChangeHandler : inputChangeHandlerName, 
    reset : resetName, 
    inputBlurHandler : inputBlurHandlerName, 
    isEmptyInput : isEmptyInputName, 
    showError : showErrorName 
  } = useInputs((value) => value.trim().length === 0);

  const { 
    enteredVal : enteredValStreet, 
    inputRef : inputRefStreet, 
    inputChangeHandler : inputChangeHandlerStreet, 
    reset : resetStreet, 
    inputBlurHandler : inputBlurHandlerStreet, 
    isEmptyInput : isEmptyInputStreet, 
    showError : showErrorStreet,
  } = useInputs((value) => value.trim().length === 0);

  const { 
    enteredVal : enteredValCity, 
    inputRef : inputRefCity, 
    inputChangeHandler : inputChangeHandlerCity, 
    reset : resetCity, 
    inputBlurHandler : inputBlurHandlerCity, 
    isEmptyInput : isEmptyInputCity, 
    showError : showErrorCity,
  } = useInputs((value) => value.trim().length === 0);

  const { 
    enteredVal : enteredValPostal, 
    inputRef : inputRefPostal, 
    inputChangeHandler : inputChangeHandlerPostal, 
    reset : resetPostal, 
    inputBlurHandler : inputBlurHandlerPostal, 
    isEmptyInput : isEmptyInputPostal,
    showError : showErrorPostal,
  } = useInputs((value) => value.trim().length !== 4);

  const resetFunctions = () => {
    resetName();
    resetStreet();
    resetPostal();
    resetCity();
  };

  const sendPostRequest = async () => {
    await fetch('https://foodapp-a78d1-default-rtdb.firebaseio.com/orders.json',{
      method: 'POST',
      body: JSON.stringify({
        users: {
          name: enteredValName,
          street: enteredValStreet,
          postalCode: enteredValPostal,
          city: enteredValCity
        },
        data: bucket.items
      })
    })
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    sendPostRequest();
    resetFunctions();
    props.onCancel();
    bucket.clearItem();
    alert('SUCCESSFULLY PAYMENT PROCCESS');
  };

  // console.log('bucket',bucket);

  return (
    <form className={classes.form} onSubmit={handleSubmit}>

      <h2 className={classes.checkoutTitle}>Checkout Form</h2>

      <div className={classes.textFields}>
        <div>
          <div className={classes.control}>
            <label htmlFor="name" className={showErrorName ? classes.invalidLabel : null}>Your Name: </label>
            <input type="text" id="name" ref={inputRefName} onChange={inputChangeHandlerName} onBlur={inputBlurHandlerName} className={showErrorName ? classes.invalidInput : null} />
            {
              showErrorName && <p className={classes.errorText}>Please, To fill name input field.</p>
            }
          </div>

          <div className={classes.control}>
            <label htmlFor="street" className={showErrorStreet ? classes.invalidLabel : null}>Your Street: </label>
            <input type="text" id="street" ref={inputRefStreet} onChange={inputChangeHandlerStreet} onBlur={inputBlurHandlerStreet} className={showErrorStreet ? classes.invalidInput : null} />
            {
              showErrorStreet && <p className={classes.errorText}>Please, To fill street input field.</p>
            }
          </div>

          <div className={classes.control}>
            <label htmlFor="postal" className={showErrorPostal ? classes.invalidLabel : null}>Postal Code: </label>
            <input type="text" id="postal" ref={inputRefPostal} onChange={inputChangeHandlerPostal} onBlur={inputBlurHandlerPostal} className={showErrorPostal ? classes.invalidInput : null} />
              
            {
              showErrorPostal && <p className={classes.errorText}>Postal Code length must be 4.</p>
            }

          </div>

          <div className={classes.control}>
            <label htmlFor="city" className={showErrorCity ? classes.invalidLabel : null}>Your City: </label>
            <input type="text" id="city" ref={inputRefCity} onChange={inputChangeHandlerCity} onBlur={inputBlurHandlerCity} className={showErrorCity ? classes.invalidInput : null} />
            {
              showErrorCity && <p className={classes.errorText}>Please, To fill city input field.</p>
            }
          </div>

        </div>
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit} disabled={(showErrorName || isEmptyInputName || showErrorStreet || isEmptyInputStreet || showErrorPostal || isEmptyInputPostal || showErrorCity || isEmptyInputCity ? true : false)}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
