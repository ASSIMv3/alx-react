import React from "react";
import { shallow } from 'enzyme';
import CourseListRow from "./CourseListRow";

describe('<CourseListRow />', () => {
    it('renders one cell with colspan = 2 when isHeader is true and textSecondCell does not exist', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First cell" />);
        const th = wrapper.find('th');
        expect(th).toHaveLength(1);
        expect(th.prop('colSpan')).toEqual('2');
    });

    it('renders two cells when isHeader is true and textSecondCell is present', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First cell" textSecondCell="Second cell" />);
        const th = wrapper.find('th');
        expect(th).toHaveLength(2);
    });

    it('renders correctly two td elements within a tr element When isHeader is false', () => {
        const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="First cell" textSecondCell="Second cell" />);
        const td = wrapper.find('td');
        expect(td).toHaveLength(2);
    })
});