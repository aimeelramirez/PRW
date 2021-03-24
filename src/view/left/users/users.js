import React, { Component, useEffect } from 'react';
import ActionApi from './../../../reducers/action/actionApi'
// import { getApi } from './../../../reducers/action/api'
import Spinner from './../../../components/spinner/spinner'
import {
    useHistory
} from "react-router-dom";
const Users = () => {
    let history = useHistory();

    // console.log("state data different but same length: ", history.location.state.data)
    if (history.location.state.data.length <= 0) {
        return <Spinner />
        // console.log("readData: ", stateData)
    }
    return (
        <><h2>Action Api</h2>
            <ActionApi />
        </>)



}



export default Users 