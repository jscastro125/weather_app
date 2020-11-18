import { createSlice } from '@reduxjs/toolkit';

export const pressureSlice = createSlice({
    name: 'pressure',
    initialState: {
        value: 1010,
    },
    reducers: {
        set: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { set } = pressureSlice.actions;

export const selectPressure = state => state.pressure.value;

export default pressureSlice.reducer;
