import classes from './CartButton.module.css';
import {useDispatch,useSelector} from 'react-redux';
import { uiActions } from '../../store/ui-slice';
const CartButton = (props) => {
  const dispatch = useDispatch();
  const toogleCartHandler = () => {
    dispatch(uiActions.toggle())
  };
  const length = useSelector((state) => state.cart.items.length);

  return (
    <button className={classes.button}onClick={toogleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{length}</span>
    </button>
  );
};

export default CartButton;
