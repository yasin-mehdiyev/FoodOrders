import React, { Fragment } from 'react';
import classes from './Cart.module.css';

const Cart = (props) => {
    return (
        <Fragment>
            <div className={classes.card}>
                {props.children}
            </div>
        </Fragment>
    )
}

export default Cart
