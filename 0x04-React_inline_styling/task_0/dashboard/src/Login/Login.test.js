import react from "react";
import { Login } from "./Login";
import { shallow } from "enzyme";

describe('Login Component', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<login />);
        expect(wrapper.exists()).toBe(true);
    });

    it('should render 2 input & 2 labels tags', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.find('input')).toHaveLength(2);
        expect(wrapper.find('label')).toHaveLength(2);
    });
});