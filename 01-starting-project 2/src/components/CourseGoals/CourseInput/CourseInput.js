import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';
// const FormControl = styled.div`

// margin: 0.5rem 0;


// & label {
// font-weight: bold;
// display: block;
// margin-bottom: 0.5rem;
// color:${props => props.invalid? 'red':"black"};
// }

// & input {
// display: block;
// width: 100%;
// border: 1px solid ${props => props.invalid? 'red':"#ccc"};
// background: 1px solid ${props => props.invalid? 'salomon':"transparent"};
// font: inherit;
// line-height: 1.5rem;
// padding: 0 0.25rem;
// }

// // &.invalid input {
// // border: 1px solid red;
// // background-color: salmon;
// // }

// // &.invalid label {
// // color:red;

// // }

// & input:focus {
// outline: none;
// background: #fad0ec;
// border-color: #8b005d;
// }

// `
const CourseInput = props => {


  const [enteredValue, setEnteredValue] = useState('');
 // const [ClassName,setClassName]=useState("form-control");
 const [isValid,setisValid]=useState(true);
  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0){
   //   setClassName("form-control")
   setisValid(true)
    }
    setEnteredValue(event.target.value);
  };
  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0) {
     // setClassName("form-control invalid")
     setisValid(false)
      return
    }
      props.onAddGoal(enteredValue);
  };

  return (
    // <form onSubmit={formSubmitHandler}>
    //   <div className="form-control">
    //     <label style={{color: !isValid? 'red':'black'}}>Course Goal</label>
    //     <input type="text" style={{borderColor:!isValid? 'red':'#ccc',
    //     background:!isValid? 'salmon':'transparent'}} onChange={goalInputChangeHandler} />
    //   </div>
    //   <Button type="submit">Add Goal</Button>
    // </form>
    <form onSubmit={formSubmitHandler}>
      {/* <div className={`{form-control ${ClassName}}`}></div> */}
    {/* <div className={ClassName}> */}
    {/* <div className={`form-control ${!isValid ? 'invalid' :""}`}> */}
    <div className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
    {/* <FormControl invalid={!isValid}> */}
    {/* <FormControl className={!isValid && 'invalid'}> */}
      <label >Course Goal</label>
      <input type="text" onChange={goalInputChangeHandler} />
    </div>
    <Button type="submit">Add Goal</Button>
  </form>
  );
};

export default CourseInput;
