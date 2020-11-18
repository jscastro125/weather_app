import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

import {
    fetchRainfallAmounts,
    selectRainfallAmounts
} from './rainfallSlice';
import {getDayName} from "../../../utils/utils";

export default function RainfallAmount() {
    const rainfallAmounts = useSelector(selectRainfallAmounts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRainfallAmounts());
    }, [dispatch]);
    const data = rainfallAmounts.map(({ day, amount }) => ({ day: getDayName(day), amount }));
    return (
        <>
            <h3>
                Amount of rainfall
            </h3>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="amount" fill="#000" />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}
