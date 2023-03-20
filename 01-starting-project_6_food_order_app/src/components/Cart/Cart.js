
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext } from 'react';
import cartContext from '../../store/cart-store';
import CartItem from './CartItem';
const Cart = (props) => {
    const ctx = useContext(cartContext)
    const cartItems =<ul className={classes['cart-items']}>{ctx.items.map(item=><CartItem incrementItem={ctx.incrementItem} decrementItem={ctx.decrementItem} key={item.id} item={item}/>)}</ul>;
     
  return (
    <Modal>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>${ctx.totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button onClick={ctx.cartClose} className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
  );
};

export default Cart;