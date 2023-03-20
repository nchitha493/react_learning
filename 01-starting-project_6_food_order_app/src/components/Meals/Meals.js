import React,{Fragment} from 'react'
import AvailableMeals from './AvailabelMeals';
import classes from './Meals.module.css'
import MealsSummary from './MealsSummary';
const Meals=()=> {
    return (
      <Fragment>
        <MealsSummary/>
        <AvailableMeals/>
      </Fragment>
    );
  }
  
  export default Meals;
  