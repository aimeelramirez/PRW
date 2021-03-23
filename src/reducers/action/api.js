import React, { useState } from 'react';
import {
    useHistory
} from "react-router-dom";
import ARRAY_USERS from './action'
let apiKey = process.env.REACT_APP_API_USERS_KEY;
let arrayUsers = []
let count = 0;
const API = () => {
    let history = useHistory();
    //response on fetch on let
    let [stateData, setData] = useState([]);
    //async await
    const getApi = async () => {
        await fetch('https://randomuser.me/api?results=25', {
            method: 'GET',
            headers: {
                'Authorization': 'Client-ID ' + apiKey,
                'Accept': 'application/json',
                'Cache-Control': 'no-cache'
            }
        }).then((res) => res.json())
            .then((req) => {
                arrayUsers.push(req.results)
                console.log(count)
                if (arrayUsers.length === 1 && count <= 0) {
                    //get state data to save
                    setData(arrayUsers[0])
                    stateData = arrayUsers[0]
                    //console.log(stateData)
                    ARRAY_USERS.push(stateData)
                    console.log("api: ", ARRAY_USERS)
                    arrayUsers = []
                    count += 1;
                    history.push('/Home', { data: stateData })


                    //  return stateData
                } else {
                    return false
                }
                //return stateData
            })
        // .catch((error) => { console.error(error); return false })

        // if (arrayUsers.length === 1) {
        //     //return state data
        //     return stateData
        // }


    }
    if (count == 0) {
        getApi()

    }
}

export { API }