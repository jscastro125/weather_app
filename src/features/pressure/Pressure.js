import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    set,
    selectPressure,
} from './pressureSlice';
import Slider from "../../components/Slider/Slider";

export default function Pressure() {
    const pressure = useSelector(selectPressure);
    const dispatch = useDispatch();
    return (
        <Slider label="Pressure [ hPa ]" max={1030} min={970} value={pressure} onChange={(nPressure) => {
            dispatch(set(nPressure))
        }}/>
    );
}
