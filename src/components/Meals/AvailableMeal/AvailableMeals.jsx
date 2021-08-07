import React, { Fragment, useEffect, useState } from "react";
import Cart from "../../UI/Cart/Cart";
import MealItem from "../MealItem/MealItem";
import classes from "./Available.module.css";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [errorMsg, setErrorMessage] = useState(null);

  useEffect(() => {
    let fetchMeals = async () => {
      const response = await fetch(
        "https://foodapp-a78d1-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const responseData = await response.json();

      const loadingData = [];

      for (const key in responseData) {
        loadingData.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadingData);
    };

    fetchMeals().catch((err) => {
      setErrorMessage(err.message);
    });
  }, []);

  const listItem = meals.map((meal, index) => (
    <MealItem
      id={meal.id}
      name={meal.name}
      desc={meal.description}
      price={meal.price}
    />
  ));

  const errorStyle = {
    textStyle : {
      textAlign: 'center',
      fontSize: '23px',
      color: '#c70000',
      fontWeight: 'bold',
      fontStyle: 'oblique'
    }
  }

  return (
    <Fragment>
      <section className={classes.meals}>
        {errorMsg ? (
          <p style={errorStyle.textStyle}>It was happened something error</p>
        ) : (
          <Cart>
            <ul>{listItem}</ul>
          </Cart>
        )}
      </section>
    </Fragment>
  );
};

export default AvailableMeals;
