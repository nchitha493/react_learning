import React, { useState,useCallback } from 'react';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';
import Button from './components/UI/Button/Button';

function App() {
  const[showOutput,SetShowOutput]=useState(false)
  const[allowTogler,SetAllowTogler]=useState(false)
  const changeToogler =useCallback(()=>{
    if(allowTogler){
      SetShowOutput((prev)=>{
        return !prev
      })
   }
  },[allowTogler])
  const changeAllowToogler =useCallback(()=>{
    SetAllowTogler((prev)=>{
      return !prev
    })
  },[])
  console.log("App.js")
  return (
    <div className="app">
       <center><Button onClick={changeAllowToogler}>Allow Toogler</Button></center>
      <center><Button onClick={changeToogler}>Toogler</Button></center>
      <h1>Hi there!</h1>
      <DemoOutput show={false}></DemoOutput>
    </div>
  );
}

export default App;
