import logo from '../assets/Holberton-logo.jpg';
import React from 'react';
import './Header.css';

function Header() {
    return (
    <div className="App-header">
        <img src={logo} alt="logo" />
        <h1>School dashboard</h1>
    </div>
    )
}

export default Header;