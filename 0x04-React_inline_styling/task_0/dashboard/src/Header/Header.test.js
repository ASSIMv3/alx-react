import react from "react";
import { Header } from "./Header";
import { shallow } from "enzyme";

describe('Header Component', () => {
    it('should render without crashing', () => {
       const wrapper = shallow(<header />);
       expect(wrappper.exists()).toBe(true);
    });

    it('should render img & h1 tags', () => {
        const wrapper = shallow(<header />);
        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('h1')).toHaveLength(1);
    });
});