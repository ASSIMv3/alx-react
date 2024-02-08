import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

export default function CourseList({ listCourses }) {
    return (
        <table id='CourseList'>
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
            {listCourses.length === 0 ? (
                <CourseListRow textFirstCell='No course available yet' isHeader={false} />
            ) : (
                listCourses.map((course, index) => (
                    <CourseListRow key={index} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} />
                ))
            )}
            </tbody>
        </table>
    );
}

CourseList.propTypes = { listCourses: PropTypes.arrayOf(CourseShape), };
CourseList.defaultProps = { listCourses: [], };