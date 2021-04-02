import React, { useReducer, useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import * as actionTypes from "./action/action";
import Button from "../components/button/Button";

import MainButton from "./../components/button/mainButton";
import { FiLogIn, FiLogOut, FiUser, FiSettings } from "react-icons/fi";
// import { GetError } from './action/notification';
// import Profile from './../components/profile/profile'
import { backupUsers } from './../pages/middle/users/backup'

/*
 This is for mockup on Settings to handle if that to Update
 */


const initialState = {
  user: "",
  isAuth: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER:
      return {
        user: action.payload.user,
        isAuth: true,
      };
    case actionTypes.LOGOUT_USER:
      return {
        user: "",
        isAuth: false,
      };
    default:
      return state;
  }
};

const Portal = () => {
  let history = useHistory();
  console.log("history on portal:", history.location);

  const handleClickUsers = () => {
    //set to go back to settings
    history.push("/Home", {
      posts: backupUsers,
      data: backupUsers
    });

  };

  const [stateAuth, setState] = useState({
    isAuth: false,
  });
  const [state, dispatch] = useReducer(reducer, initialState);
  // console.log(stateAuth.isAuth)

  useEffect(() => {
    if (stateAuth.isAuth === false) {
      document.title = `You are signed out! `;
    } else {
      document.title = `You are signed in! `;
    }
  });

  const handleClick = (e) => {
    e.preventDefault();
    if (history.location.state === undefined) {
      let getStorage = localStorage.getItem("names");
      history.push("/Settings", { data: JSON.parse(getStorage) });
    }
    //set to go back to settings
    history.push("/Settings", { data: history.location.state.data });
  };
  const switchLogin = () => {
    if (state.isAuth === false) {
      dispatch({
        type: actionTypes.LOGIN_USER,
        payload: {
          user: "User",
        },
      });
      stateAuth.isAuth = true;
      setState({
        isAuth: true,
      });
    } else {
      dispatch({
        type: actionTypes.LOGOUT_USER,
      });
      stateAuth.isAuth = false;
      setState({
        isAuth: false,
      });
    }
  };

  return (
    <div>
      <div className="login-portal">
        <MainButton handleClose={switchLogin}>
          {state.isAuth ? <FiLogOut /> : <FiLogIn />}
        </MainButton>

        <Button onClick={handleClickUsers}>
          <FiUser />
        </Button>
        <Button onClick={handleClick}>
          <FiSettings />
        </Button>
      </div>
      <div>
        {state.isAuth ? (
          <div>
            {" "}
            Welcome, {state.user} <FiUser />{" "}
          </div>
        ) : (
            "Please sign in first!"
          )}{" "}
      </div>
      <p>Auth: {JSON.stringify(state.isAuth)} </p>
    </div>
  );
};

export default Portal;
