import {
    useHistory
} from "react-router-dom";
import Contact from './../../components/contact/contact'
const Flitered = (e) => {
    let history = useHistory();
    //get history
    // console.log(history)
    console.log("filtered : ", e.location.state.data)
    const FilteredItems = () => {
        if (e.location.state.data[0] !== "Please, try again.") {
            return e.location.state.data.map((item, index) => {
                console.log("filtered: ", item)
                return (<Contact
                    key={index.toString()}
                    title={item.name.title}
                    first={item.name.first}
                    last={item.name.last}
                    email={item.email}
                    picture={item.picture.large}
                />)



            })
        } else {
            history.replace('/Search', { data: history.location.state.data });
            // console.log(history)

        }

    }
    console.log(e.location.state.data)
    if (e.location.state.data.length > 0) {
        return (
            <div className="list-search" >
                <FilteredItems />
            </div>
        )
    }
    return (<div>
        <h2>Flitered </h2>
        <div className="list-search">
            <FilteredItems />
        </div>
    </div>)
}

export default Flitered 