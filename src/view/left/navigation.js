
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
        <div>
            <nav className="Nav">
                <div className="Nav_container">
                    <ul className="Nav_item-wrapper">
                        <li className="Nav_item">
                            <Link className="Nav_link" to="/Home" onClick={handleClick} >Home</Link>
                        </li>
                        <li className="Nav_item">
                            <Link className="Nav_link" to="/NewsFeed" onClick={handleClick}>NewsFeed</Link>
                        </li>
                        <li className="Nav_item">
                            <Link className="Nav_link" to="/Messages" onClick={handleClick} >Messages</Link>
                        </li>
                        <li className="Nav_item">
                            <Link className="Nav_link" to="/Watch" onClick={handleClick}>Watch</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div >
    )
}

export default Navigation;