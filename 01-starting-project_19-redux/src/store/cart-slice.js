import {createSlice} from '@reduxjs/toolkit';

const initialState = { items:[]}
const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        addTocart: (state, action) => {
            if(!state.items.map((x)=> {return x.id; }).includes(action.payload.id))
                state.items.push(action.payload)
        },
        increment: (state, action) => {
            const indexOfItem= state.items.map((x)=> {return x.id; }).indexOf(action.payload)
            state.items[indexOfItem].quantity =state.items[indexOfItem].quantity+1
            state.items[indexOfItem].total =state.items[indexOfItem].quantity*state.items[indexOfItem].price
            //state.items.push(action.payload)
        },
        decrement: (state, action) => {
            const indexOfItem= state.items.map((x)=> {return x.id; }).indexOf(action.payload)
            if(state.items[indexOfItem].quantity == 1){ 
                state.items.splice(indexOfItem, 1)
            }else{
                
                state.items[indexOfItem].quantity =state.items[indexOfItem].quantity-1
                state.items[indexOfItem].total =state.items[indexOfItem].quantity*state.items[indexOfItem].price
            }
        }
    }
})

export default itemsSlice.reducer;
export const cartActions = itemsSlice.actions