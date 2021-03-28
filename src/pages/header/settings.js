import React, { useContext } from 'react';

import Profile from './../../components/profile/profile'
import {
    useHistory
} from "react-router-dom";
import { ApiContext } from './../../Context'
// import React, { useState, useContext, useEffect, useReducer } from 'react';

const Settings = () => {
    // let num = Math.random() * Math.floor(24)
    let history = useHistory()
    let context = useContext(ApiContext)
    console.log(context)
    // let content = Object.values(context)
    // console.log(content)
    // let user = content[num.toFixed()]
    // console.log(user)
    // const context = useContext(ApiContext);
    const changePhoto = (e) => {
        e.preventDefault()
        console.log("To be continued")

    }

    const ShowProfile = () => {

        console.log(history)
        let context = history.location.state.data
        let num = (Math.random() * Math.random(24)).toFixed()
        let concatSt = context[num].location.street.number + " " + context[num].location.street.name
        const item = {
            index: 0,
            username: context[num].login.username,
            first: context[num].name.first,
            last: context[num].name.last,
            street: concatSt,
            city: context[num].location.city,
            zipcode: context[num].location.postcode,
            email: context[num].email,
            password: "●●●●●●●●",
            picture: context[num].picture.large

        }
        return (<Profile
            key={item.index}
            username={item.username}
            first={item.first}
            last={item.last}
            street={item.street}
            city={item.city}
            zipcode={item.zipcode}
            email={item.email}
            password={item.password}
            picture={item.picture}
            clicked={(e) => {
                changePhoto(e, item)
            }}
        />
        )
    }

    return (<div><h2>Settings</h2>
        <ShowProfile />
    </div>)
}

export default Settings