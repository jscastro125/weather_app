import React from "react";
import { create } from "react-test-renderer";
import Slider from '../../components/Slider/Slider';

describe("<Slider />", () => {
    it("should match snapshot", () => {
        const component = create(<Slider max={100} min={10} value={20} label="test" onChange={() => {}} />);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
});
