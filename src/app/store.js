import { configureStore } from '@reduxjs/toolkit';
import pressureReducer from '../features/pressure/pressureSlice';
import temperatureReducer from "../features/temperature/temperatureSlice";
import rainfallReducer from "../features/charts/rainfallAmount/rainfallSlice";

export default configureStore({
  reducer: {
    pressure: pressureReducer,
    temperature: temperatureReducer,
    rainfallAmounts: rainfallReducer
  },
});
