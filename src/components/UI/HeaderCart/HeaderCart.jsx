import React, { useContext } from 'react';
import CartIcon from '../../Cart/CartIcon';
import classes from './HeaderCart.module.css';
import CartContext from '../../../store/CartContext';

const HeaderCart = (props) => {

    const ctx = useContext(CartContext);

    const numberOfCartItem = ctx.items.reduce((curNum,item)=>{
        return curNum + item.amount;
    },0);

    return <button className={classes.button} onClick={props.open}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
}

export default HeaderCart
