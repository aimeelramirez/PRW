import React, { useReducer, useEffect, useState } from 'react';
import * as actionTypes from './action/action';
import MainButton from '../components/button/mainButton'
import { FiLogIn, FiLogOut, FiUser, FiSettings } from "react-icons/fi";
import { GetError } from './action/notification';
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
    const ErrorHandle = () => {
        let message = "Sorry, Under Construction!"
        GetError(message);
    }

    return (
        <div>

            <div className="login-portal">
                <div onClick={switchLogin}>
                    <MainButton>{state.isAuth ? <FiLogOut /> : <FiLogIn />}</MainButton>
                </div>
                <MainButton handleClose={ErrorHandle}><FiUser /></MainButton> <MainButton handleClose={ErrorHandle}><FiSettings /></MainButton>
            </div>
            <div>{state.isAuth ? <div> Welcome, {state.user} <FiUser /> </div> : "Please sign in first!"} </div>

            {/* <p>Auth: {JSON.stringify(state.isAuth)} </p> */}
        </div>
    )
}

export default Portal