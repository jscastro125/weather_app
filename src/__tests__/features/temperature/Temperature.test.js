import React from "react";
import { create } from "react-test-renderer";
import { useSelector, useDispatch } from 'react-redux';

import Temperature from '../../../features/temperature/Temperature';
import * as temperatureSlice from '../../../features/temperature/temperatureSlice';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));

describe("<Temperature />", () => {
    it("should match snapshot", () => {
        useSelector.mockImplementation(sel => sel());
        useDispatch.mockImplementation(() => () => {});
        const spyPressure = jest.spyOn(temperatureSlice, 'selectTemperature');
        spyPressure.mockReturnValue(30);
        const component = create(<Temperature />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
});
