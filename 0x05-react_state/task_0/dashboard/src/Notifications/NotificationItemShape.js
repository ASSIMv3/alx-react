import PropTypes from "prop-types";

const CourseShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    html: PropTypes.shape({
        __html: PropTypes.string.isRequired
    })
});

export default CourseShape;