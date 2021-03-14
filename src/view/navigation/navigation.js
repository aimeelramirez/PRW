
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Watch from './watch/watch'
import Feed from './feed/feed'
import Message from './message/message'
const Navigation = () => {
    return (
        <div>
            <Router>
                <div id="navigation-route">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/" >Home</Link>
                            </li>
                            <li>
                                <Link to="/Feed">Newsfeed</Link>
                            </li>
                            <li>
                                <Link to="/Messages">Messages</Link>
                            </li>
                            <li>
                                <Link to="/Watch" >Watch</Link>
                            </li>
                        </ul></nav>
                    <Switch>
                        <Route path="/Feed" component={Feed}>
                        </Route>
                        <Route path="/Messages" component={Message}>
                        </Route>
                        <Route path="/Watch" component={Watch}>
                        </Route>
                        <Route path="/" exact component={Home}>
                        </Route>
                    </Switch>
                </div></Router >
        </div >
    )


}
const Home = () => {
    return (<div><h2>Home</h2></div>)
}

export default Navigation;