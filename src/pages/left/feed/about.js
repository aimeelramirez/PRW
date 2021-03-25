
import React, { useState, useEffect } from 'react';
import {
    useHistory
} from "react-router-dom";
import Spinner from './../../../components/spinner/spinner'
import Contact from './../../../components/contact/contact'
import { getApi } from './../../../reducers/action/api'
import FilteredItems from './../../middle/search/filtered'
import Button from './../../../components/button/Button'

const PostList = () => {
    let history = useHistory();
    //response on fetch on let

    const [stateData, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        //get users to read on data
        const fetchData = () => {
            getApi().then(json => {
                setData(json.results)
                console.log(json)
                setLoading(false);
            }).catch(err => {
                console.error(err);
                setError(err);
            });
        }
        function doStartFetch() {
            if (loading) return "Loading..."
                && fetchData()
            if (error) return "Oops!";
        }

        const startingFetch = setInterval(doStartFetch, 500)
        // aborting request when cleaning
        return () => {
            clearInterval(startingFetch)
        }

    }, [loading, error])
    const onHandleBack = () => {
        history.replace('/')
    }
    const UserItems = () => {
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
        // let getNames = localStorage.getItem('names')

        //history.push('/NewsFeed', { data: JSON.parse(getNames) });
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
        // GetUsers()
        return <Spinner />
        // console.log("readData: ", stateData)
    }
    //check the filtered item to get on the 
    else if (stateData.length > 0 && history.location.pathname === '/NewsFeed') {
        return (

            <UserItems />

        )
    }

}


export default PostList;