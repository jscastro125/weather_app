import React from 'react';
import { useSelector } from 'react-redux';
import { ComposedChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Line, ResponsiveContainer } from 'recharts';

import {
    selectPressure
} from '../../pressure/pressureSlice';
import {
    selectTemperature
} from '../../temperature/temperatureSlice';
import {
    selectRainfallAmounts
} from '../rainfallAmount/rainfallSlice';
import {getDayName, chanceOfRain} from "../../../utils/utils";

export default function RainChanceChart() {
    const temperature = useSelector(selectTemperature);
    const pressure = useSelector(selectPressure);
    const rainfallAmounts = useSelector(selectRainfallAmounts);

    const data = rainfallAmounts.map(({ day, amount }) => {
        const [lower, mean, upper] = chanceOfRain(pressure, temperature, amount);
        return {
            day: getDayName(day),
            temperatureInterval: [lower, upper],
            temperature: mean
        }
    });
    return (
        <>
            <h3>
                Chance of rain
            </h3>
            <ResponsiveContainer width="100%" height={250}>
                <ComposedChart
                    data={data}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="temperatureInterval" fill="#000" stroke="#000" />
                    <Line type="monotone" dataKey="temperature" stroke="#000" />
                </ComposedChart>
            </ResponsiveContainer>
        </>
    );
}
