// import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";
const initialState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
    name:'counter',
    initialState:initialState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrment(state){
            state.counter--
        },
        increase(state,action){
            state.counter= state.counter+action.payload
        },
        toggleCounter(state){
            console.log(state)
            state.showCounter = !state.showCounter
        }
    }
});
export default counterSlice