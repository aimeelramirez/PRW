
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Message from '../../view/navigation/left/message/Posts';
const Header = () => {
    return (
        <Router><div>
            <nav>
                <ul>
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Messages" >Message</Link>
                    </li>
                </ul></nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
                <Route path="/About">
                    <About />
                </Route>
                <Route path="/Messages">
                    <Messages />
                </Route>
                <Route path="/Home">
                    <Home />
                </Route>
            </Switch>
        </div></Router >)

}
function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Messages() {
    return (<div>
        <h2>Message</h2>
        <div className="description">
            <h3>Post:</h3>
            <p>Click to delete item. <br /> OR <br /> Fill inputs to send a post.</p>
        </div><Message /></div>);
}
export default Header;