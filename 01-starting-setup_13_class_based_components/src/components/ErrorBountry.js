import classes from './User.module.css';
import { Component } from 'react';
class ErrorBountry extends Component {
    constructor(){
        super()
        this.state={hasError:false}
    }
  componentDidCatch(error){
    this.setState({hasError:true})
    alert("Error")
  }
  render(){
    if(this.state.hasError){
        return <p>Something went wrong</p>
    }
    return this.props.children;
  }

}
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default ErrorBountry;
