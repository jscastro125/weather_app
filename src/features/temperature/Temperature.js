import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    set,
    selectTemperature,
} from './temperatureSlice';
import Slider from "../../components/Slider/Slider";

export default function Temperature() {
    const temperature = useSelector(selectTemperature);
    const dispatch = useDispatch();
    return (
        <Slider label="Temperature" max={35} min={10} value={temperature} onChange={(nTemperature) => {
            dispatch(set(nTemperature))
        }}/>
    );
}
