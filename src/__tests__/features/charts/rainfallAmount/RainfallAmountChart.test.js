import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import { create } from "react-test-renderer";

import * as amountsSlice from '../../../../features/charts/rainfallAmount/rainfallSlice';
import RainfallAmount from '../../../../features/charts/rainfallAmount/RainfallAmountChart';
import rainfallAmountsMock from '../../../../__mocks__/rainfallAmounts.mock';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn()
}));

function createNodeMock() {
    const doc = document.implementation.createHTMLDocument();
    return { parentElement: doc.body };
}

describe("<RainfallAmount />", () => {
    it("should match snapshot", () => {
        useSelector.mockImplementation(sel => sel());
        useDispatch.mockImplementation(() => () => {});
        const spyAmounts = jest.spyOn(amountsSlice, 'selectRainfallAmounts');
        spyAmounts.mockReturnValue(rainfallAmountsMock);
        window.innerWidth = 1100;
        const component = create(<RainfallAmount />, { createNodeMock });
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
});
