// import React, { useContext } from 'react';

import { useHistory } from "react-router-dom";
import Button from "../../../components/button/Button";
import Post from './../../../components/post/Post'

const ShowInboxFilter = () => {

    let history = useHistory();

    const FilteredItems = () => {
        console.log("filtered : ", history.location.state)

        if (history.location.state.inbox !== null || history.location.state.data === null || history.location.state.inbox.length > 0) {
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