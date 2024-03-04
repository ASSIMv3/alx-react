import { fromJS } from 'immutable';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';

describe('Notification Selectors', () => {
  const initialState = fromJS({
    filter: 'DEFAULT',
    notifications: [
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
      { id: 3, isRead: true, type: 'urgent', value: 'Read data available' },
    ],
  });

  it('filterTypeSelected should return the filter value', () => {
    const result = filterTypeSelected(initialState);
    expect(result).toEqual('DEFAULT');
  });

  it('getNotifications should return the list of notifications', () => {
    const result = getNotifications(initialState);
    expect(result.toJS()).toEqual(initialState.get('notifications').toJS());
  });

  it('getUnreadNotifications should return the list of unread notifications', () => {
    const result = getUnreadNotifications(initialState);
    expect(result.toJS()).toEqual([
      { id: 1, isRead: false, type: 'default', value: 'New course available' },
      { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
    ]);
  });
});
