import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains the Notification component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it('contains the Header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('contains the Login component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Login)).toHaveLength(0);
  });

  it('contains the Footer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it('does not display CourseList when isLoggedIn is false', () => {
    const wrapper = shallow(<App isLoggedIn={false} />);
    expect(wrapper.find(CourseList)).toHaveLength(0);
  });

  it('does not include the Login component when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(Login)).toHaveLength(0);
  });

  it('includes the CourseList component when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find(CourseList)).toHaveLength(1);
  });
});
