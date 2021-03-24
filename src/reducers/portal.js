import React, { useReducer, useEffect, useState } from 'react';

import {
    useHistory
} from "react-router-dom";

import * as actionTypes from './action/action';
import Button from '../components/button/Button'

import MainButton from '../components/button/mainButton'
import { FiLogIn, FiLogOut, FiUser, FiSettings } from "react-icons/fi";
// import { GetError } from './action/notification';
const initialState = {
    user: "",
    isAuth: false,
}


const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER:
            return {
                user: action.payload.user,
                isAuth: true
            };
        case actionTypes.LOGOUT_USER:
            return {
                user: "",
                isAuth: false
            };
        default:
            return state;
    }
}

const Portal = () => {
    let history = useHistory();
    const handleClick = () => {
        //set to go back to settings 
        history.push('/Settings');
        // console.log(history)
    }
    const handleClickUsers = () => {
        //set to go back to settings 
        history.push('/Search');
        // console.log(history)
    }

    const [stateAuth, setState] = useState({
        isAuth: false
    });
    const [state, dispatch] = useReducer(reducer, initialState)
    // console.log(stateAuth.isAuth)

    useEffect(() => {

        if (stateAuth.isAuth === false) {
            document.title = `You are signed out! `;
        } else {
            document.title = `You are signed in! `;

        }
    });
    const switchLogin = () => {

        if (state.isAuth === false) {
            dispatch({
                type: actionTypes.LOGIN_USER,
                payload: {
                    user: "User"
                }
            })
            stateAuth.isAuth = true
            setState({
                isAuth: true
            });
        } else {
            dispatch({
                type: actionTypes.LOGOUT_USER,
            })
            stateAuth.isAuth = false
            setState({
                isAuth: false
            });
        }
    }
    // const ErrorHandle = () => {
    //     let message = "Sorry, Under Construction!"
    //     GetError(message);
    // }
    return (
        <div>
            {/* <MainButton >Settings</MainButton> */}
            <div className="login-portal">
                <div onClick={switchLogin}>
                    <MainButton>{state.isAuth ? <FiLogOut /> : <FiLogIn />}</MainButton>
                </div>
                <Button onClick={handleClickUsers}><FiUser /></Button>
                <Button onClick={handleClick}>
                    <FiSettings />
                </Button>
            </div>
            <div>{state.isAuth ? <div> Welcome, {state.user} <FiUser /> </div> : "Please sign in first!"} </div>
            <p>Auth: {JSON.stringify(state.isAuth)} </p>
        </div>
    )
}

export default Portal
