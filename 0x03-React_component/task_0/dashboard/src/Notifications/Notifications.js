import React from 'react';
import './Notifications.css';
import closeIcon from './close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes, { bool } from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

export default function Notifications({ displayDrawer, listNotifications }) {
    const ButtonClick = () => {
        console.log('Close button has been clicked');
    };

    return (
        <>
            <div className='menuItem'>
                <p>Your notifications</p>
            </div>
            {displayDrawer && (
                <div style={{ position: 'relative' }}>
                    <div className='Notifications'>
                        {listNotifications && listNotifications.length !== 0 ? (
                            <>
                                <p>Here is the list of notifications</p>
                                <ul>
                                    {listNotifications.map(({ id, html, type, value }) => (
                                        <>
                                            <NotificationItem key={id} type={type} value={value} html={html} />
                                        </>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <p>No new notification for now</p>
                        )}
                    </div>
                    <button style={{
                        position: 'absolute',
                        top: '3px',
                        right: '3px',
                        backgroundColor: 'transparent',
                        border: 'none'
                    }}
                        aria-label='Close'
                        onClick={ButtonClick}>
                        <img src={closeIcon} alt='close'
                            style={{
                                width: '15px',
                                height: '15px'
                            }} />
                    </button>
                </div>
            )}
        </>
    )
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: [],
};