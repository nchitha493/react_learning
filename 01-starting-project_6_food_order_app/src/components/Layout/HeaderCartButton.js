
import React, { Fragment,useContext,useEffect,useState } from "react";
import classes from './HeaderCartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import cartContext from "../../store/cart-store";

function HeaderCartButton(props) {
   const ctx = useContext(cartContext)
   const [btnHignligted,setbtnHignligted]=useState(false)
   const {items} = ctx
   useEffect(()=>{
    if(ctx.items.lengh === 0){
      return
    }
      setbtnHignligted(true)
     const timer = setTimeout(()=>{
        setbtnHignligted(false)
      },300)
      return ()=>{
        clearTimeout(timer)
      }
   },[items])
  return (
    <button className={`${classes.button} ${btnHignligted ? classes.bump:""}`} onClick={ctx.openCart}>
        <span className={classes.icon}><CartIcon></CartIcon></span>
        <span>Your Cart</span>
        <span className={classes.badge}>
            {ctx.totalItem}
        </span>
    </button>
  );
}

export default HeaderCartButton;
