import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
import classes from './Auth.module.css';

const Auth = () => {
  const [email,setEmail] = useState("") 
  const [password,setPassword] = useState("") 
  const dispatch = useDispatch();
  const passwordChangeHandler = (event)=>{
    setPassword(event.target.value)
  }
  const emailChangeHandler=(event)=>{
    setEmail(event.target.value)
  }

  const formSubmit = (event)=>{
    event.preventDefault()
    console.log(email,password)
    if(password && email){
      dispatch(authActions.login())
    }
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={formSubmit}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' value={email} onChange={emailChangeHandler} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' value={password} onChange={passwordChangeHandler} />
          </div>
          <button type='submit'>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
