// import React, { useContext } from 'react';

import {
    useHistory
} from "react-router-dom";
import Button from '../../../components/button/Button';
import Contact from './../../../components/contact/contact'
// import Button from './../../../components/button/Button'
// import { ApiContext } from './../../../Context'
// import { GetEditForm } from './../../../reducers/action/notification'

// const Flitered = (e) => {
const ShowFilter = () => {
    let history = useHistory();

    const FilteredItems = () => {
        //const context = useContext(ApiContext)
        //get history
        // console.log(history)
        // console.log("filtered : ", history.location.state.data)

        if (history.location.state.data !== "Please, try again.") {

            return history.location.state.data.map((item, index) => {
                return (
                    <Contact
                        key={index.toString()}
                        title={item.name.title}
                        first={item.name.first}
                        last={item.name.last}
                        email={item.email}
                        picture={item.picture.large}
                    />)
            })
        } else {
            history.push('/', { data: history.location.state.data });
            // console.log(history)

        }


    }
    const GoBack = () => {
        return history.replace("/", { data: history.location.state.data })
    }

    return (
        <><Button onClick={GoBack}>Go Back</Button>
            <FilteredItems />
        </>
    )
}

export default ShowFilter