import {
    useHistory
} from "react-router-dom";
import Contact from './../../../components/contact/contact'
// import Button from './../../../components/button/Button'


// const Flitered = (e) => {

const FilteredItems = () => {

    let history = useHistory();
    //get history
    console.log(history)
    console.log("filtered : ", history.location.state.data)
    if (history.location.state.data !== "Please, try again.") {
        return history.location.state.data.map((item, index) => {
            console.log("filtered: ", item)
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
        history.replace('/', { data: history.location.state.data });
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
//     return (<div>
//         <h2>Flitered </h2>

//         <div className="list-search">
//             <FilteredItems />
//         </div>
//     </div>)
// }

export default FilteredItems