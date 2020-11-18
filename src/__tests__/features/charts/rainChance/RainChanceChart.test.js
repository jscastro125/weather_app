import React from "react";
import { create } from "react-test-renderer";
import { useSelector } from 'react-redux';

import rainfallAmountsMock from '../../../../__mocks__/rainfallAmounts.mock';
import * as pressureSlice from '../../../../features/pressure/pressureSlice';
import RainChanceChart from '../../../../features/charts/rainChance/RainChanceChart';
import * as temperatureSlice from '../../../../features/temperature/temperatureSlice';
import * as amountsSlice from '../../../../features/charts/rainfallAmount/rainfallSlice';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
}));

function createNodeMock() {
    const doc = document.implementation.createHTMLDocument();
    return { parentElement: doc.body };
}

describe("<RainChanceChart />", () => {
    it("should match snapshot", () => {
        useSelector.mockImplementation(sel => sel());
        const spyPressure = jest.spyOn(pressureSlice, 'selectPressure');
        spyPressure.mockReturnValue(30);
        const spyTemperature = jest.spyOn(temperatureSlice, 'selectTemperature');
        spyTemperature.mockReturnValue(1010);
        const spyAmounts = jest.spyOn(amountsSlice, 'selectRainfallAmounts');
        spyAmounts.mockReturnValue(rainfallAmountsMock);
        window.innerWidth = 1100;
        const component = create(<RainChanceChart />, { createNodeMock });
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
});
