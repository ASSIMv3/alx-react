import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

describe('NotificationItem component', () => {
    it('should render without crashing', () => {
        shallow(<NotificationItem />);
    });

    it('should render correct html from type and value props', () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.html()).toEqual('<li data-notification-type="default">test</li>');
    });

    it('should render correct html from html="<u>test</u>" props', () => {
        const wrapper = shallow(<NotificationItem html="<u>test</u>" />);
        expect(wrapper.html()).toEqual('<li data-notification-type=\"default\"><u>test</u></li>');
    });

    it('should render the right html', () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.find('li').at(0).html()).toEqual('<li data-notification-type=\"default\"></li>');
    });
});