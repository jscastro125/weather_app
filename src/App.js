import React from 'react';

import Pressure from "./features/pressure/Pressure";
import Temperature from "./features/temperature/Temperature";
import RainChanceChart from "./features/charts/rainChance/RainChanceChart";
import RainfallAmount from "./features/charts/rainfallAmount/RainfallAmountChart";

import './App.css';

function App() {
  return (
    <div className="App">
        <div className="variables-container">
            <Temperature />
            <Pressure />
        </div>
        <div className="charts-container">
            <RainfallAmount />
            <RainChanceChart />
        </div>
    </div>
  );
}

export default App;
