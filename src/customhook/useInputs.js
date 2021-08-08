import { useRef, useState } from "react";

const useInputs = (validateVal) => {
    const [enteredVal, setEnteredVal] = useState('');
    const [showError, setShowError] = useState(false);
    const [textColor, setTextColor] = useState('');

    const inputRef = useRef();

    const isEmptyInput = validateVal(enteredVal);
    const defineClasses = isEmptyInput && showError ? 'error' : '';

    const isCheckEmptyInput = () => {
        if(isEmptyInput){
          setShowError(true);
          return;
        }
        setShowError(false);
    }

    const inputChangeHandler = () => {
        setEnteredVal(inputRef.current.value);
    };

    const inputBlurHandler = () => {
        isCheckEmptyInput();
        if(isEmptyInput){
          setTextColor('error');
          return;
        }
        setTextColor('');
    };

    const reset = () => {
        inputRef.current.value = '';
        setEnteredVal("");
    }

    return {
        enteredVal,
        inputRef,
        isEmptyInput,
        showError,
        textColor,
        defineClasses,
        inputChangeHandler,
        inputBlurHandler,
        reset,
    }
}

export default useInputs;

