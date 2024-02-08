import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

export default function NotificationItem({ type, value, html }) {
    return (
        <li data-notification-type={type} dangerouslySetInnerHTML={html && { __html: html }}>
            {value}
        </li>
    );
}

NotificationItem.proptypes = { 
    __html: PropTypes.shape({
        html: PropTypes.string,
    }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
};

NotificationItem.defaultProps = {
    type: "default",
};