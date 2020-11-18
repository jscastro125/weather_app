import { createSlice } from '@reduxjs/toolkit';

export const temperatureSlice = createSlice({
    name: 'temperature',
    initialState: {
        value: 15,
    },
    reducers: {
        set: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { set } = temperatureSlice.actions;

export const selectTemperature = state => state.temperature.value;

export default temperatureSlice.reducer;
