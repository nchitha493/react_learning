import classes from './Counter.module.css';
import { useSelector,useDispatch,connect } from 'react-redux';
import { Component } from 'react';
// const Counter = () => {
//   const counter = useSelector(state=>state.counter);
//   const dispatch = useDispatch();
//   const toggleCounterHandler = () => {

//   };
//   const incrementHandler = () => {
//     dispatch({type:'increment'})
//   };
//   const decrementHandler = () => {
//     dispatch({type:'decrement'})
//   };
//   return (
//     <main className={classes.counter}>
//       <h1>Redux Counter</h1>
//       <div className={classes.value}>{counter}</div>
//       <div>
//         <button onClick={incrementHandler}>
//           increment
//         </button>
//         <button onClick={decrementHandler}>
//           decrement
//         </button>
//       </div>
//       <button onClick={toggleCounterHandler}>Toggle Counter</button>
//     </main>
//   );
// };
class Counter extends Component{
    incrementHandler(){
        this.props.increment(1)
    }
    decrementHandler(){
        this.props.decrement()
    }
    toggleCounterHandler(){

    }
    render(){
        return(
            <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{this.props.counter}</div>
            <div>
              <button onClick={this.incrementHandler.bind(this)}>
                increment
              </button>
              <button onClick={this.decrementHandler.bind(this)}>
                decrement
              </button>
            </div>
            <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
          </main>
        )
    }
}
const mapStateToProps =(state)=>{
    return{
        counter: state.counter
    };
}
const mapDispatchToProps =(dispatch)=>{
    return{
        increment: (value)=>dispatch({type:'increment',value:value}),
        decrement: ()=>dispatch({type:'decrement'}),

    };
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);