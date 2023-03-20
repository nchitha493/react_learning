import { createSlice } from "@reduxjs/toolkit";
const initialStateAuth = { islogin: false };
const authSlice = createSlice({
    name:'authentication',
    initialState:initialStateAuth,
    reducers:{
        login(state){
            state.islogin=true;
        },
        logout(state){
            state.islogin=false;
        }
    }
});

export default authSlice