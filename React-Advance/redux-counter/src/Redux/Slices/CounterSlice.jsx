import {createSlice} from '@reduxjs/toolkit'

const initialState= {
    value:0,
}
export const CounterSlice= createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => ({
            ...state,
            value: state.value + 1
        }),
        decrement: (state) => {
            state.value -= 1;
        },
    }
})

//agar function ki implementation ko slice se bahar nikalna he to .actions creator use krke hoga
export const {increment,decrement}=CounterSlice.actions;
export default CounterSlice.reducer;