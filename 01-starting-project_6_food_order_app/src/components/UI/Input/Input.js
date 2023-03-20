import classes from './Input.module.css';
import React from 'react';
// const Input = (props) => {
//   return (
//     <div className={classes.input}>
//         <label htmlFor={props.input.id}>{props.label}</label>
//         <input type={props.type} {...props.input}  />
//     </div>
//   );
// };
const Input = React.forwardRef((props,ref) => {
  return (
    <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input type={props.type} {...props.input} ref={ref}  />
    </div>
  );
});
export default Input;