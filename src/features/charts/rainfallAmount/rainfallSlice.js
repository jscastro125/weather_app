import { createSlice } from '@reduxjs/toolkit';

export const rainfallSlice = createSlice({
    name: 'rainfallAmounts',
    initialState: {
        value: [],
        isLoading: false,
        error: null
    },
    reducers: {
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setValue: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setIsLoading, setError, setValue } = rainfallSlice.actions;

export const fetchRainfallAmounts = () => dispatch => {
    dispatch(setIsLoading(true));
    fetch('https://private-4945e-weather34.apiary-proxy.com/weather34/rain')
        .then(res => res.json())
        .then(data => {
            if(data?.length !== 0) {
                const [currentWeek] = data;
                dispatch(setValue(currentWeek?.days));
                dispatch(setIsLoading(false));
            }
        })
        .catch(err => dispatch(setError(err)))
};

export const selectRainfallAmounts = state => state.rainfallAmounts.value;
export const selectError = state => state.rainfallAmounts.selectError;

export default rainfallSlice.reducer;
