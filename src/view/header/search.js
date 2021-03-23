import React, { useState } from 'react';
import {
    useHistory
} from "react-router-dom";
// import { data } from './../../data'
import { FiSearch } from "react-icons/fi";
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

    //get history

    //console.log(history)

    const [stateHistory, setStateHistory] = useState(history)

    let [state, setState] = useState({ query: [] })
    // const [stateToggle, setStateToggle] = useState({ clicked: false })
    // const handleChange = (event) => {
    //     event.preventDefault()
    //     // console.log(event)
    //     handleClick(event)
    //     event.target.reset()
    // }
    const onSearchClick = (e) => {
        e.preventDefault()
        //console.log(e.target[0].value)
        let newList = [];
        //console.log(stateHistory.location.state.data)
        if (e.target[0].value !== "") {
            newList = stateHistory.location.state.data.filter(item => {
                const lc = item.name.first.toLowerCase();
                const filter = e.target[0].value.toLowerCase();
                // console.log(item)
                return lc.includes(filter);

            });
            // state.query = newList
            // console.log("new list: ", newList)
            //  statePosts.posts = newList

            if (newList.length === 0) {
                console.log("Please, try again.")
                return false
                //state.query = newList
                // statePosts.posts = newList
            } else {
                setStateHistory(history)
                setState({
                    query: newList
                });
                state.query = newList

                // state.filtered = newList
                // statePosts.posts = newList
                // updateObject({ statePosts, newList })
                history.replace('/Filtered', { data: state.query });
                e.target[0].value = ""
                // console.log(e.target[1])
                return true
            }

        }
        else {
            // newList = props.items
            // setStatePosts({
            //     posts: initialState.posts
            // })

            setState({
                query: stateHistory.location.state.data
            });
            history.push('/Home', { data: stateHistory.location.state.data });
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
            history.replace('/Home', { data: stateHistory.location.state.data });
            //console.log(history)
            // e.target.reset()


        } else if (history.location.state !== undefined) {
            onSearchClick(e)
        }
        //pass state in next component
        // history.push('/Filtered', { oldNames: stateHistory, stateNames: state });
        // console.log(history)

        // console.log(statePosts.posts)
    }

    return (
        <div className="Search">
            <div id="List-Search">
                <div className="list-search">
                    <form onSubmit={handleClick} >
                        <p>
                            <label>Search:</label>
                        </p>
                        <p id="searchInput">
                            <input type="text" name="search" placeholder="search first name." />
                            <button type="submit"><strong>Search</strong><FiSearch /></button>
                        </p>
                    </form>
                </div>
                {/* <div className="list-search">
                    <h3>Results:</h3>
                </div> */}


            </div>
        </div>)

}

export default SearchBar;
