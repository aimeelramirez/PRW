import React, { useState } from 'react';
import {
    useHistory
} from "react-router-dom";
import { data } from './../../data'
import { FiSearch } from "react-icons/fi";
// import MainButton from '../../components/button/mainButton';
// import { updateObject } from './../../reducers/utility'
// let props = {

//     items: ["A Keep in touch ☝️", "Search for this Family Home 🏡", "About this application 📱"]

// }
const initialState = {
    posts: data
}

const SearchBar = () => {
    let history = useHistory();
    const [statePosts, setStatePosts] = useState({
        posts: initialState
    });
    const [state, setState] = useState({ filtered: initialState.posts })
    // const [stateToggle, setStateToggle] = useState({ clicked: false })
    // const handleChange = (event) => {
    //     event.preventDefault()
    //     // console.log(event)
    //     handleClick(event)
    //     event.target.reset()
    // }
    const onSearchClick = (e) => {
        e.preventDefault()
        // console.log(e.target[0].value)
        let newList = [];

        if (e.target[0].value !== "") {
            newList = initialState.posts.filter(item => {
                const lc = item.name.toLowerCase();
                const filter = e.target[0].value.toLowerCase();
                return lc.includes(filter);

            });
            state.filtered = newList
            statePosts.posts = newList

            if (newList.length === 0) {
                newList = ["Please, try again. 🔦"]
                state.filtered = newList
                statePosts.posts = newList
            }
            setStatePosts({
                posts: newList
            })
            setState({
                filtered: newList
            });
            state.filtered = newList
            statePosts.posts = newList
            // updateObject({ statePosts, newList })

        }
        else {
            // newList = props.items
            setStatePosts({
                posts: initialState.posts
            })
            setState({
                filtered: initialState.posts
            });
            state.filtered = initialState.posts
            statePosts.posts = initialState.posts
        }


        handleClick()


    }
    //for each click handle the path
    const handleClick = () => {
        //pass state in next component
        history.push('/Filtered', { posts: statePosts.posts, post: state.filtered });
        console.log(history)
        // console.log(statePosts.posts)
    }

    return (
        <div className="Search">
            <div id="List-Search">
                <div className="list-search">
                    <form onSubmit={onSearchClick} >
                        <p>
                            <label>Search:</label>
                        </p>
                        <p id="searchInput">
                            <input type="text" name="search" placeholder="search people. click 🔍" />
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
