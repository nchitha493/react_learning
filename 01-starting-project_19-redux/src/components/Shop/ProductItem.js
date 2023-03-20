import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import{useDispatch} from 'react-redux';
import { cartActions } from '../../store/cart-slice';
const ProductItem = (props) => {
  const dispatch =useDispatch();
  const { title, price, description } = props.product;
  const cartHandler = () => {
    let quantity= 0
    if(props.product.quantity){
     quantity = props.product.quantity+1;
  }else{
     quantity = 1;
  }
    dispatch(cartActions.addTocart({...props.product,quantity:quantity,total:quantity*price}))
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={cartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
