import React, { useContext } from 'react';

import {
    useHistory
} from "react-router-dom";
import Contact from './../../../components/contact/contact'
// import Button from './../../../components/button/Button'
import { ApiContext } from './../../../Context'

// const Flitered = (e) => {

const FilteredItems = () => {
    const context = useContext(ApiContext)
    let history = useHistory();
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


//     console.log(e.location.state.data)
//     if (e.location.state.data.length > 0) {
//         return (
//             <div className="list-search" >
//                 <Button onClick={onHandleBack}>Go Back</Button>
//                 <FilteredItems />
//             </div>
//         )
//     }

export default FilteredItems