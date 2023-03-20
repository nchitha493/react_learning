import { useRef,useImperativeHandle } from "react";
import React from 'react';


const Input = React.forwardRef((props,ref) => {
    const inputRef = useRef();
    const activate=() =>{
        inputRef.current.focus()
    }
    useImperativeHandle(ref,()=>{
        return {
          focus:activate
        }
      })
 
  return (
    <div
          className={props.className}
        >
          <label htmlFor={props.htmlFor}>{props.label}</label>
    <input
    type={props.type}
    id={props.id}
    value={props.value}
    onChange={props.onChange}
    onBlur={props.onBlur}
    ref={inputRef}
  />
  </div>
  );
});

export default Input;
