
import {
    Link
} from "react-router-dom";
const Navigation = () => {
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