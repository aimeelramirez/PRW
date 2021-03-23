import React, { useState } from 'react';
import {
    useHistory
} from "react-router-dom";
import Spinner from './../../components/spinner/spinner'
import Contact from './../../components/contact/contact'
let apiKey = process.env.REACT_APP_API_USERS_KEY
let arrayUsers = []
// let arrayNames = []

const ActionApi = () => {
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
                if (arrayUsers.length === 1) {
                    //get state data to save
                    setData(arrayUsers[0])
                    stateData = arrayUsers[0]
                    //console.log(stateData)
                    arrayUsers = []

                }
                //return stateData
            })
            .catch((error) => console.error(error))

        // if (arrayUsers.length === 1) {
        //     //return state data
        //     return stateData
        // }

    }
    const LocalItems = () => {
        let items = [];

        // console.log("hello ", stateData)
        //save only names on localStorage for privacy if that was in real data
        stateData.forEach((item, index) => {
            if (items.length <= 25) {
                //console.log("for each:", index)
                items.push(item)

                localStorage.getItem('names')
                localStorage.setItem('names', JSON.stringify(items));
                //pass state in next component
                //console.log(items.length)

            }
            else if (index >= 26 || items.length >= 26) {

                delete localStorage[index]
                localStorage.setItem('names', JSON.stringify(items));

            }

            //to clear if to under developement
            //localStorage.clear();

        })
        let getNames = localStorage.getItem('names')

        history.push('/Home', { data: JSON.parse(getNames) });
    }
    const UserItems = () => {
        LocalItems()
        // console.log(history)
        return stateData.map((item, index) => {
            return (<div className="api-text" key={index}>
                <div className="clip3">
                    <img src={item.picture.large} alt="portrait profile" />
                </div>
                <div className="list-feed">
                    <ul className="descriptions">
                        <li>{item.name.title} {item.name.first} {item.name.last}</li>
                        <li>{item.email}</li>
                    </ul></div></div>)



        })
    }
    if (stateData.length === 0) {
        getApi()
        return <Spinner />
        // console.log("readData: ", stateData)
    } else if (stateData.length > 0) {
        return (
            <div >
                <UserItems /></div>)
    }
}



export default ActionApi