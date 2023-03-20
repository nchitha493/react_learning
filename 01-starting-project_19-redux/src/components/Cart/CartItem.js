import classes from './CartItem.module.css';
import{useDispatch,useSelector} from 'react-redux';
import {cartActions} from '../../store/cart-slice';

const CartItem = (props) => {
  const { title, quantity, total, price,id } = props.product;
  const dispatch = useDispatch();
  const caretIncrementHandler = () => {
    dispatch(cartActions.increment(id));
  }
  const cartDecrementHandler = () => {
    dispatch(cartActions.decrement(id));
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)*quantity}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={cartDecrementHandler}>-</button>
          <button onClick={caretIncrementHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
