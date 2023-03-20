import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useDispatch, useSelector} from 'react-redux';

const Cart = (props) => {
  const cartItems = useSelector((state)=>{return state.cart.items})
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
      {cartItems.map(product => {
            return <CartItem
            key = {product.id}
            product={product}
          />
        })}

      </ul>
    </Card>
  );
};

export default Cart;
