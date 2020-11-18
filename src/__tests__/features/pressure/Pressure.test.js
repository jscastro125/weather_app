import React from "react";
import { create } from "react-test-renderer";
import { useSelector, useDispatch } from 'react-redux';

import Pressure from '../../../features/pressure/Pressure';
import * as pressureSlice from '../../../features/pressure/pressureSlice';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));

describe("<Pressure />", () => {
    it("should match snapshot", () => {
        useSelector.mockImplementation(sel => sel());
        useDispatch.mockImplementation(() => () => {});
        const spyPressure = jest.spyOn(pressureSlice, 'selectPressure');
        spyPressure.mockReturnValue(30);
        const component = create(<Pressure />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
});
