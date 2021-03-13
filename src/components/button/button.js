import React, { useState, useEffect } from 'react';
import './Button.css';
import { FiLogIn, FiLogOut } from "react-icons/fi";

const Button = () => {
    const [state, setState] = useState({
        isAuth: false
    });
    const switchButton = () => {
        if (!state.isAuth) {
            setState({
                isAuth: true
            });
        } else {
            setState({
                isAuth: false
            });
        }
    }
    useEffect(() => {
        // Update the document title using the browser API
        if (state.isAuth === true) {
            document.title = `You are signed in! `;
        } else {
            document.title = `You are signed out! `;

        }
    });
    return (
        <div>
            <button className='alr-button' name="btn" onClick={
                switchButton
            } >{state.isAuth ? <div> Login <FiLogIn /> </div> : <div> LogOut <FiLogOut /></div>}</button>
        </div >
    )
};

export default Button;