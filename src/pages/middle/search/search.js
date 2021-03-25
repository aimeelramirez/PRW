import React, { useState } from 'react';
import {
    useHistory,
    Redirect
} from "react-router-dom";
// import { data } from './../../data'
import { FiSearch } from "react-icons/fi";
// import Contact from './../../../components/contact/contact'
// import Button from './../../../components/button/Button'
import { GetError } from './../../../reducers/action/notification'
// import MainButton from '../../components/button/mainButton';
// import { updateObject } from './../../reducers/utility'
// let props = {
//     items: ["A Keep in touch ☝️", "Search for this Family Home 🏡", "About this application 📱"]

// }
// const initialState = {
//     posts: data
// }

const SearchBar = () => {

    let history = useHistory();
    const [stateHistory, setStateHistory] = useState(history)
    let [state, setState] = useState({ data: [] })

    const onSearchClick = (e) => {
        e.preventDefault()
        //console.log(e.target[0].value)
        let newList = [];
        //console.log(stateHistory.location.state.data)
        if (e.target[0].value !== "") {
            newList = stateHistory.location.state.data.filter(item => {
                const name = Object.values(item.name)
                // get name and split spaces and join query
                const check = name.join('').toLowerCase()
                let filter = e.target[0].value.toLowerCase();
                const removeItem = filter.split(' ').join('');
                return check.includes(removeItem)
            });
            // console.log("new list: ", newList)
            if (newList.length === 0) {
                let message = "Please, try again."
                console.log(message)
                GetError(message)
                return false
                //state.query = newList
                // statePosts.posts = newList
            } else {
                setStateHistory(history)
                setState({
                    data: newList
                });
                state.data = newList
                // console.log("state history: ", state)
                // state.filtered = newList
                // statePosts.posts = newList
                // updateObject({ statePosts, newList })
                // history.replace('/Filtered', { data: state.query });
                e.target[0].value = ""
                // console.log(e.target[1])
                console.log("replacing state")

                // history.replace('/Users', state);
                // console.log("History: ", history.location)

                return history.push('/Users', state);
            }

        }
        else {


            setState({
                data: stateHistory.location.state.data
            });
            console.log("pushing update")
            let message = "Please, fillinput and try again."
            console.log(message)
            GetError(message)
            history.push('/', { data: stateHistory.location.state.data });
            return true
            // state.filtered = initialState.posts
            // statePosts.posts = initialState.posts
        }






    }

    //for each click handle the path
    const handleClick = (e) => {
        e.preventDefault()
        //  console.log(e)
        if (history.location.state === undefined || history.location.state === "") {
            // history.replace('/Home', { data: stateHistory.location.state.data });
            //console.log(history)
            // e.target.reset()

            return <Redirect to="/" />
        } else if (history.location.state !== undefined) {
            onSearchClick(e)
        }
        //pass state in next component
        // history.push('/Filtered', { oldNames: stateHistory, stateNames: state });
        // console.log(history)

        // console.log(statePosts.posts)
    }

    const SearchBarInput = () => {
        return (
            <div className="Search">
                <div id="List-Search">
                    <div className="list-search">
                        <form onSubmit={handleClick} >
                            <p>
                                <label>Search:</label>
                            </p>
                            <p id="searchInput">
                                <input type="text" name="search" placeholder="search names." />
                                <button type="submit"><strong>Search</strong><FiSearch /></button>
                            </p>
                        </form>
                    </div>
                    {/* <div className="list-search">
                    <h3>Results:</h3>
                </div> */}


                </div>
            </div>
        )
    }
    // const onHandleBack = () => {
    //     history.replace('/Home')
    // }
    if (state.data.length > 0) {
        return (
            <> <SearchBarInput />
                {/* <div className="list-search" > */}
                {/* <Button onClick={onHandleBack}>Go Back</Button>
                <FilteredItems /> */}
                {/* </div> */}
            </>
        )
    }

    return (
        <> <SearchBarInput /></>
    )

}

export default SearchBar;
