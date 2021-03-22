
import {
    Link,
    useHistory
} from "react-router-dom";

const Navigation = () => {
    let history = useHistory();
    //for each click handle the path
    const handleClick = (e) => {
        history.push(e.view.location.pathname);
        console.log(history)
    }
    return (
        <div id="navigation-route">
            <nav className="Nav">
                <ul>
                    <li>

                        <Link className="Nav_link" to="/" onClick={handleClick} >Home</Link>
                    </li>
                    <li>

                        <Link className="Nav_link" to="/NewsFeed" onClick={handleClick}>NewsFeed</Link>
                    </li>
                    <li>

                        <Link className="Nav_link" to="/Messages" onClick={handleClick} >Messages</Link>
                    </li>
                    <li>

                        <Link className="Nav_link" to="/Watch" onClick={handleClick}>Watch</Link>
                    </li>
                </ul>
            </nav>
        </div >
    )
}

export default Navigation;