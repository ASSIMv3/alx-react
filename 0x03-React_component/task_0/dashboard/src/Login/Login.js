import React from "react";
import './Login.css';

function Login() {
    return (
    <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" style={{ marginLeft: '10px' }} />
        <label htmlFor="password" style={{ marginLeft: '10px' }}>Password:</label>
        <input type="password" id="password" style={{ marginLeft: '10px' }} />
        <button>OK</button>
    </div>
    )
}

export default Login;