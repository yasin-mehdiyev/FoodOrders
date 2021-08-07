import React, { Fragment } from 'react';
import classes from './Header.module.css';
import mealsImage from '../../../assets/meals.jpg';
import HeaderCart from '../HeaderCart/HeaderCart';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes['header']}>
                <h1>ReactMeals</h1>
                <HeaderCart open={props.openModal} />
            </header>

            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Delicious Food Product" />
            </div>
            
        </Fragment>
    )
}

export default Header
