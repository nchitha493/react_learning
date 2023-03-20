import classes from './DemoOutput.module.css'
import React from 'react';
const DemoOutput = (props) => {
    console.log("DemoOutput.js")
    return (<>{props.show && <h1>Hello World </h1>}</>)
    ;
  };
  
  export default React.memo(DemoOutput);
  