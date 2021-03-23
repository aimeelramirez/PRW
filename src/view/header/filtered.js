import {
    useHistory
} from "react-router-dom";
const Flitered = (e) => {
    let history = useHistory();
    //get history
    // console.log(history)
    console.log("filtered : ", e.location.state.data)
    const FilteredItems = () => {
        if (e.location.state.data[0] !== "Please, try again.") {
            return e.location.state.data.map((item, index) => {
                console.log("filtered: ", item)
                return (<div className="api-text" key={index}>
                    <div className="clip3">
                        <img src={item.picture.large} alt="portrait profile" />
                    </div>
                    <div className="list-feed">
                        <ul className="descriptions">
                            <li>{item.name.title}. {item.name.first} {item.name.last}</li>
                            <li>{item.email}</li>
                        </ul>
                    </div></div>)

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