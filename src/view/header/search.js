import React, { useState } from 'react';

import { FiSearch } from "react-icons/fi";
// import MainButton from '../../components/button/mainButton';
let props = {

    items: ["A Keep in touch ☝️", "Search for this Family Home 🏡", "About this application 📱"]

}


const SearchBar = () => {

    const [state, setState] = useState({ filtered: props.items })
    // const [stateToggle, setStateToggle] = useState({ clicked: false })
    const handleChange = (event) => {
        event.preventDefault()
        // console.log(event)
        event.target.reset()
    }
    const onSearchClick = (e) => {
        e.preventDefault()
        // console.log(e.target[0].value)
        let newList = [];

        if (e.target[0].value !== "") {
            newList = props.items.filter(item => {
                const lc = item.toLowerCase();
                const filter = e.target[0].value.toLowerCase();
                return lc.includes(filter);

            });
            if (newList.length === 0 || e.target[0].value.length !== 1) {
                newList = ["Please, try again. 🔦"]

            }

        } else if (e.target[0].value === "") {
            newList = props.items
            // console.log("props.items ", props.items)

        }
        else {
            newList = props.items

        }
        state.filtered = newList
        setState({
            filtered: newList
        });

    }
    const FilteredItems = () => {
        return state.filtered.map((item, index) => {
            return (<div id="filtered" key={index} >{item}</div>)
        })

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
                            <input type="text" name="search" />
                            <button type="submit" onChange={handleChange}><strong>Search</strong><FiSearch /></button>
                        </p>
                    </form>
                </div>
                {/* <div className="list-search">
                    <h3>Results:</h3>
                </div> */}
                <div className="list-search">
                    <FilteredItems />
                </div>

            </div>
        </div>)

}

export default SearchBar;