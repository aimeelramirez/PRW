
const Flitered = (e) => {
    console.log("filtered : ", e.location.state)
    const FilteredItems = () => {
        return e.location.state.posts.map((item, index) => {
            return (<div id="filtered" key={index}>{item.name}
                <p> {item.message}</p></div>)
        })

    }
    console.log(e.location.state)
    if (e.location.state.length > 0) {
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