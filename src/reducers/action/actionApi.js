import React, { useState } from 'react';
import {
    useHistory
} from "react-router-dom";
import Spinner from './../../components/spinner/spinner'
import Contact from './../../components/contact/contact'

// import { API } from './api'
// import ARRAY_USERS from './action';

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
                //  console.log(count)
                if (arrayUsers.length === 1) {
                    //get state data to save
                    setData(arrayUsers[0])
                    stateData = arrayUsers[0]
                    //console.log(stateData)
                    //ARRAY_USERS.push(stateData)
                    //  console.log("api: ", ARRAY_USERS)
                    arrayUsers = []
                    //history.push('/Home', { data: stateData })
                    //  return stateData
                } else {
                    return false
                }
            })
        // .catch((error) => { console.error(error); return false })
    }


    const LocalItems = () => {
        let items = [];

        console.log("hello ", stateData)
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
            // console.log("filtered: ", item)
            return (<Contact
                key={index.toString()}
                title={item.name.title}
                first={item.name.first}
                last={item.name.last}
                email={item.email}
                picture={item.picture.large}
            />)
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