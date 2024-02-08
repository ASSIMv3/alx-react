import React from "react";
import { shallow } from 'enzyme';
import CourseList from "./CourseList";
import CourseListRow from "./CourseListRow";

describe('<CourseList />', () => {
    it('renders CourseList component without crashing', () => {
        shallow(<CourseList />);
    });

    // it('renders the 5 different rows', () => {
    //     const wrapper = shallow(<CourseList />);
    //     expect(wrapper.find('CourseListRow')).toHaveLength(5);
    // });

    it('renders correctly if listCourses is an empty array or not passed', () => {
        let wrapper = shallow(<CourseList />);
        expect(wrapper.find('CourseListRow')).toHaveLength(3);

        wrapper = shallow(<CourseList listCourses={[]} />);
        expect(wrapper.find('CourseListRow')).toHaveLength(3);
    });

    it('renders correctly when listCourses is passed', () => {
        const courses = [
            { id: 1, name: 'ES6', credit: 60 },
            { id: 2, name: 'Webpack', credit: 20 },
            { id: 3, name: 'React', credit: 40 },
        ];
        const wrapper = shallow(<CourseList listCourses={courses} />);
        expect(wrapper.find('CourseListRow')).toHaveLength(5);
    });
});