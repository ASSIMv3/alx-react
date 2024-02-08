import Header from './Header';
import React from 'react';
import { shallow } from 'enzyme';

describe('Header component', () => {
    it('should render without crashing', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.exists()).toBe(true);
    });

    it('should render img and h1 tags', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('img')).toHaveLength(1);
        expect(wrapper.find('h1')).toHaveLength(1);
    });
});