import React, { useState, useContext, useEffect } from 'react';
import {
    useHistory
} from "react-router-dom";
import Spinner from './../../../components/spinner/spinner'
import Contact from './../../../components/contact/contact'
import FilteredItems from './../search/filtered'
import Button from './../../../components/button/Button'
import { ApiContext } from "./../../../Context";
import Message from './../../left/message/Posts'
const Users = () => {
    let history = useHistory();
    // //response on fetch on let

    // const [stateData, setData] = useState([]);
    //const [loading, setLoading] = useState(true);
    //const [error, setError] = useState(null);
    // useEffect(() => {
    //     //get users to read on data
    //     const fetchData = () => {
    //         getApi().then(json => {
    //             setData(json.results)
    //             console.log(json)
    //             setLoading(false);
    //         }).catch(err => {
    //             console.error(err);
    //             setError(err);
    //         });
    //     }
    //     function doStartFetch() {
    //         if (loading) return "Loading..."
    //             && fetchData()
    //         if (error) return "Oops!";
    //     }

    //     const startingFetch = setInterval(doStartFetch, 500)
    //     // aborting request when cleaning
    //     return () => {
    //         clearInterval(startingFetch)
    //     }

    // }, [loading, error])
    const context = useContext(ApiContext);

    const onHandleBack = () => {
        history.replace('/')
    }
    const UserItems = () => {
        let items = [];

        // console.log("hello ", stateData)
        //save only names on localStorage for privacy if that was in real data
        context.map((item, index) => {
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
        if (history.location.state != undefined) {
            return history.location.state.data.map((item, index) => {
                //  console.log("filtered: ", item)
                return (<Contact
                    key={index.toString()}
                    title={item.name.title}
                    first={item.name.first}
                    last={item.name.last}
                    email={item.email}
                    picture={item.picture.large}
                />)
            })
        } else {
            return context.map((item, index) => {
                //just in case for history not updating
                // console.log("context ", item)
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
    }
    if (context.length === 0) {
        // GetUsers()
        // console.log("History: ", history.location)
        return <Spinner />
        // console.log("readData: ", stateData)
    }
    //check the filtered item to get on the 
    if (context.length > 0 && history.location.pathname === '/') {
        return (
            <><h2>Reused to get List of Users</h2>
                <Message />
                <UserItems />
            </>
        )
    }


}



export default Users