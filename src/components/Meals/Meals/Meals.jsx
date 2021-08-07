import React, { Fragment } from 'react'
import AvailableMeals from '../AvailableMeal/AvailableMeals'
import MealsSummary from '../MealsSummary/MealsSummary'

const Meals = () => {
    return (
        <Fragment>
            <MealsSummary />
            <AvailableMeals />
        </Fragment>
    )
}

export default Meals