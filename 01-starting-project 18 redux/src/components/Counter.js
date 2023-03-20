import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { counterActions } from '../store';

const Counter = () => {
  const counter = useSelector(state=> { console.log(state);return state.counterx.counter});
  const showCounter = useSelector(state=>state.counterx.showCounter);
  console.log(showCounter)
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
   // dispatch({type:'toggle'})
    dispatch(counterActions.toggleCounter())
  };
  const increaseHandler =()=>{
   // dispatch({type:'increment',amount:5})
   dispatch(counterActions.increase(10))
  }
  const incrementHandler = () => {
   // dispatch({type:'increment'})
   dispatch(counterActions.increment())
  };
  const decrementHandler = () => {
    //dispatch({type:'decrement'})
    dispatch(counterActions.decrment())
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={increaseHandler}>
          increase
        </button>
      <div>
        <button onClick={incrementHandler}>
          increment
        </button>
        <button onClick={decrementHandler}>
          decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;