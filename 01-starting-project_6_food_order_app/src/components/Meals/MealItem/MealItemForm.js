import Input from '../../UI/Input/Input';
import classes from './MealItemForm.module.css';
import { useEffect, useState,useRef } from 'react';
//  import { useContext,useState } from 'react';
// import cartContext from '../../../store/cart-store';
const MealItemForm = (props) => {
  
  // const ctx = useContext(cartContext)
  const amountInputRef = useRef();
 
  const [quan,setquan]=useState(props.quan)
  useEffect(()=>{
    setquan(props.quan)
    amountInputRef.current.value = props.quan
  },[props.quan])
  console.log("props.quansssssssssssssss",quan)
  const cartSubmit = (event)=>{
    event.preventDefault()
    console.log("ss",quan)
    // props.addItem(quan)
    props.addItem(amountInputRef.current.value)
  }
  const quanChangeHandler =(event)=>{
     console.log("quanChangeHandlerquanChangeHandler",event.target.value)
      setquan(event.target.value)
  }
  return (
    
    <form className={classes.form} onSubmit={cartSubmit}>
        <Input label="Amount" ref={amountInputRef} input={{
            id: 'amount_'+props.id,
            type:"number",
            min:'1',
            max:'5',
            step:"1",
           // value:parseInt(quan),
            onChange:quanChangeHandler
        }} />
        <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;