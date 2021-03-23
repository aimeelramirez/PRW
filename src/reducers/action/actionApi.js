import React, { useState } from 'react';
import Spinner from './../../components/spinner/spinner'

let apiKey = process.env.REACT_APP_API_USERS_KEY
const arrayUsers = []
const ActionApi = () => {
    //response on fetch on let
    let [stateData, setData] = useState([]);
    //async await
    const getApi = async () => {
        await fetch('https://randomuser.me/api?results=10', {
            method: 'GET',
            headers: {
                'Authorization': 'Client-ID ' + apiKey,
                'Accept': 'application/json',
                'Cache-Control': 'no-cache'
            }
        }).then((res) => res.json())
            .then((req) => {
                // console.log(req)
                arrayUsers.push(req.results)
                if (arrayUsers.length <= 1) {
                    //get state data to save
                    setData(arrayUsers[0])
                    stateData = arrayUsers[0]

                }
            })
            .catch((error) => console.error(error))

        // if (arrayUsers.length === 1) {
        //     //return state data
        //     return stateData
        // }

    }
    const UserItems = () => {
        console.log("hello ", stateData)
        return stateData.map((item, index) => {
            console.log("map: ", item.email)
            if (item.name.title === 'Miss') {
                return (<div className="api-text" key={index}>
                    <div className="clip3">
                        <img src={item.picture.medium} alt="portrait profile" />

                    </div>
                    <div className="list-feed">
                        <ul className="descriptions">
                            <li>{item.name.title} {item.name.first} {item.name.last}</li>
                            <li>{item.email}</li>
                        </ul></div></div>)
            } else {
                return (<div className="api-text" key={index}>
                    <div className="clip3">
                        <img src={item.picture.large} alt="portrait profile" />
                    </div>
                    <div className="list-feed">
                        <ul className="descriptions">
                            <li>{item.name.title}. {item.name.first} {item.name.last}</li>
                            <li>{item.email}</li>
                        </ul>
                    </div></div>)
            }
        })
    }
    if (stateData.length === 0) {
        getApi()
        return <Spinner />
        // console.log("readData: ", stateData)
    } else if (stateData.length > 0) {
        // console.log("readData after populating: ", stateData)
        return <UserItems />
    }
    return (<div className="card-feed">API</div>)

}



export default ActionApi