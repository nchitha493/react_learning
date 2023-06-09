import React,{Fragment} from 'react'
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton';
const Header=()=> {
    return (
      <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']} alt="A table full of delicious food!">
            <img src={mealsImage} />
        </div>
      </Fragment>
    );
  }
  
  export default Header;
  