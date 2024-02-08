import { render } from '@testing-library/react';
import React from 'react';
import { getLatestNotification } from '../utils/utils';
import Notifications from './Notifications';
import { shallow } from 'enzyme';

test('renders without crashing', () => {
    render(<Notifications />);
});

describe('<Notifications />', () => {
    it('renders three list items', () => {
        const notifications = [
            { id: 1, type: 'default', value: 'New course available' },
            { id: 2, type: 'urgent', value: 'New resume available' },
            { id: 3, type: 'urgent', html: getLatestNotification() },
        ];
        const wrapper = shallow(<Notifications listNotifications={notifications} displayDrawer={true} />);
        expect(wrapper.find('NotificationItem')).toHaveLength(3);
    });

    it('renders the text Here is the list of notifications', () => {
        const wrapper = shallow(<Notifications />);
        expect(wrapper.find('.menuItem p').text()).toBe('Your notifications');
    });

    it('displays the menu item when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.menuItem')).toHaveLength(1);
    });

    it('does not display div.Notifications when displayDrawer is false', () => {
        const wrapper = shallow(<Notifications displayDrawer={false} />);
        expect(wrapper.find('.Notifications')).toHaveLength(0);
    });

    it('displays the menu item when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.menuItem')).toHaveLength(1);
    });

    it('displays div.Notifications when displayDrawer is true', () => {
        const wrapper = shallow(<Notifications displayDrawer={true} />);
        expect(wrapper.find('.Notifications')).toHaveLength(1);
    });

    it('renders Notifications correctly if an empty array passed or if the listNotifications property not passed', () => {
        let wrapper = shallow(<Notifications listNotifications={[]} />);
        expect(wrapper.find('.Notifications')).toHaveLength(0);

        wrapper = shallow(<Notifications />);
        expect(wrapper.find('.Notifications')).toHaveLength(0);
    });

    it('renders Notifications correctly with empty array or without listNotifications property', () => {
        // let wrapper = shallow(<Notifications listNotifications={[]} />);
        // expect(wrapper.find('.Notifications').text()).not.toContain('Here is the list of notifications');
        // expect(wrapper.find('.Notifications').text()).toContain('No new notification for now');

        // wrapper = shallow(<Notifications />)
        // expect(wrapper.find('.Notifications').text()).not.toContain('Here is the list of notifications');
        // expect(wrapper.find('.Notifications').text()).toContain('No new notification for now');
        let wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]} />);
        expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toBe(false);
        expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));

        wrapper = shallow(<Notifications />);
        expect(wrapper.containsMatchingElement(<p>Here is the list of notifications</p>)).toBe(false);
        expect(wrapper.containsMatchingElement(<li data-notification-type="default">No new notification for now</li>));
    });
});