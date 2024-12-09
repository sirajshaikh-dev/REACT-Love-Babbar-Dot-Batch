import {createSlice} from '@reduxjs/toolkit'
export const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers:{
        add:(state,action)=>{
            state.push(action.payload);
        },
        remove:(state,action)=>{
        return state.filter((item)=>item.id !== action.payload)
        // -Why return is required? Redux reducers must always return the updated state. 
        // If you omit the return, the reducer ends without providing a new state, 
        // and Redux keeps the old state unchanged.
        //- Filter creates a new array, and you need to explicitly 
        // return the new state. Without the return, the state won't update properly.
        },
    }
})
export const {add,remove}= CartSlice.actions
export default CartSlice.reducer