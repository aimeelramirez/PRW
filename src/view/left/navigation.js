
import {
    Link,
    useHistory
} from "react-router-dom";
// import { API } from './../../reducers/action/api'
let data = ""
const Navigation = () => {
    // API()
    // let history = useHistory();
    // console.log("Navigation : ", history)
    // if (history.location.state !== undefined) {
    //     data = history.location.state.data
    //     //for each click handle the path

    // }
    // const handleClick = (e) => {
    //     history.replace(e.view.location, { data: data });
    //     console.log(e.view.location)

    // }

    return (
        <div id="navigation-route">
            <nav className="Nav">
                <ul>
                    <li>
                        <Link className="Nav_link" to="/Home" >Home</Link>
                    </li>
                    <li>

                        <Link className="Nav_link" to="/NewsFeed">NewsFeed</Link>
                    </li>
                    <li>

                        <Link className="Nav_link" to="/Messages"  >Messages</Link>
                    </li>
                    <li>

                        <Link className="Nav_link" to="/Watch" >Watch</Link>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default Navigation;