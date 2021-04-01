// import React, { useContext } from 'react';

import { useHistory } from "react-router-dom";
import Button from "../../../components/button/Button";
import Contact from "./../../../components/contact/contact";
import Post from './../../../components/post/Post'

const ShowInboxFilter = (props) => {

    let history = useHistory();
    const json = localStorage.getItem("names");
    const savedPost = JSON.parse(json);
    const FilteredItems = () => {
        //const context = useContext(ApiContext)
        //get history
        // console.log(history)
        console.log("filtered : ", history.location.state)

        if (history.location.state.inbox !== null || history.location.state.data === null || history.location.state.inbox.length > 0) {
            // history.push("/", { data: history.location.state.data });
            return history.location.state.inbox.map((item, index) => {
                return (
                    <Post
                        key={index.toString()}
                        title={item.title}
                        first={item.first}
                        last={item.last}
                        email={item.email}
                        picture={item.picture}
                    />
                );
            });
            // console.log(history)
        }

    }
    const GoBack = () => {
        return history.goBack();
    };

    return (
        <>
            <Button onClick={GoBack}>Go Back</Button>
            <FilteredItems />
        </>
    );
};


export default ShowInboxFilter 