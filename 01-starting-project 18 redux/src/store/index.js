// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import counterSlice from "./couterSlice";


// const counterReducer = (state = initialState, action) => {
//   if (action.type == "increment") {
//     return { ...state, counter: state.counter + action.amount };
//   }
//   if (action.type == "decrement") {
//     return { ...state, counter: state.counter - 1 };
//   }
//   if (action.type === "toggle") {
//     return { ...state, showCounter: !state.showCounter };
//   }
//   return state;
// };

const store = configureStore({
    reducer:{counterx:counterSlice.reducer,auth:authSlice.reducer}
});
// store.subscribe((state)=>{
//     console.log(state)
// })

// store.dispatch()
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
