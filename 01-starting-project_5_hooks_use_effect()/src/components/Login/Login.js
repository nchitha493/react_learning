
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import { useReducer,useState,useEffect, useContext,useRef  } from 'react';
import AuthContext from '../../store/auth-context';
import Input from '../UI/Input/Input';


const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const AuthCtx = useContext(AuthContext)
  const emailRef  =useRef()
  const passwordRef  =useRef()
  const emailChangeHandler = (event) => {
    dispatchEmail({type:'USER_INPUT',val:event.target.value});
    // setFormIsValid(
    //   emailState.value.includes('@') && passwordState.value.trim().length > 6
    //       );
  };
  const emailReducer =(state,action) =>{
    if (action.type ==='USER_INPUT'){
      return {value:action.val,isValid:action.val.includes('@')}
    }
    if(action.type=="INPUT_BLUR"){
      return {value:state.value,isValid:state.value.includes('@')}
    }
    return {value:'',isValid:false}
  }
  const [emailState,dispatchEmail] =useReducer(emailReducer,
    {value:'',isValid:null});

    const passwordReducer =(state,action) =>{
      if (action.type ==='USER_INPUT'){
        return {value:action.val,isValid:action.val.trim().length > 6}
      }
      if(action.type=="INPUT_BLUR"){
        return {value:state.value,isValid:state.value.trim().length > 6}
      }
      return {value:'',isValid:false}
    }
    const [passwordState,dispatchPassword] =useReducer(passwordReducer,
      {value:'',isValid:null});
  
  const passwordChangeHandler = (event) => {
 
    dispatchPassword({type:'USER_INPUT',val:event.target.value});
    // setFormIsValid(
    //   emailState.value.includes('@') && passwordState.value.length > 6
    //       );
  };

  const {isValid:emailIsValid} = emailState
  const {isValid:passwordIsValid} = passwordState
  useEffect(()=>{
    const identifier = setTimeout(()=>{

      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    },500)
    return ()=>{
      console.log("Cleanup")
      clearTimeout(identifier)
    };
  },[emailIsValid,passwordIsValid])



  const validateEmailHandler = () => {
    dispatchEmail({type:"INPUT_BLUR"});
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:"INPUT_BLUR"});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      AuthCtx.onLogin(emailState.value, passwordState.value);
    }else if (!emailIsValid){
      emailRef.current.focus()
    }else if (!passwordIsValid){
      passwordRef.current.focus()
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
          <Input type="email"
            id="email"
            className={`${classes.control} ${
              emailState.isValid === false ? classes.invalid : ''
            }`}
            ref={emailRef}
            htmlFor="email"
            label="Email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}/>
    
          <Input
            type="password"
            id="password"
            htmlFor="password"
            label="Password"
            ref={passwordRef}
            className={`${classes.control} ${
              passwordState.isValid === false ? classes.invalid : ''
            }`}
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
