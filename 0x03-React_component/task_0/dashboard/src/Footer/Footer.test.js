import Footer from './footer';
import React from 'react';
import { shallow } from 'enzyme';

describe('Footer component', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.exists()).toBe(true);
    });
    it('should render the text "Copyright"', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.text()).toContain('Copyright');
    });
});