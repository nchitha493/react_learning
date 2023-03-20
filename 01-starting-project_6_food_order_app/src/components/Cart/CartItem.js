import classes from './CartItem.module.css';
const CartItem = (props) => {
  const price = `$${props.item.price.toFixed(2)}`;

  const incrementHandler = ()=>{
    props.incrementItem(props.item.id)
  }
  const decrementHandler =()=>{
    props.decrementItem(props.item.id)
  }
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>x {props.item.quan} = 
          <span className={classes.amount}> {(props.item.price*props.item.quan).toFixed(2)}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={decrementHandler}>−</button>
        <button onClick={incrementHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
