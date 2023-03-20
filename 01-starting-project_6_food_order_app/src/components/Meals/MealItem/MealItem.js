import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import { useContext,useEffect,useState } from 'react';
import cartContext from '../../../store/cart-store';
const MealItem = (props) => {
  const ctx = useContext(cartContext)

  const [quantity,setQunatity]=useState(0)
  useEffect(()=>{
    if(ctx.items.some((o)=>{return o["id"] === props.item.id})){
      var foundIndex = ctx.items.findIndex(x => x.id == props.item.id);
      console.log('foundIndex',ctx.items[foundIndex])
      setQunatity(ctx.items[foundIndex].quan)
    }else{
      setQunatity(0)
    }
  },[ctx.items])
  //const [item,setItem] = useState(props.item)
    const price =`$${props.item.price.toFixed(2)}`
    const addItemHandler =(quan)=>{
      ctx.addItem({...props.item,"quan":quan})
      
    }
  return (
    <li className={classes.meal}>
       <div>
            <h3>{props.item.name}</h3>
            <div className={classes.description}>
                {props.item.description}
            </div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm id={props.item.id} quan={quantity} addItem={addItemHandler} />
        </div>
    </li>
  );
};

export default MealItem;