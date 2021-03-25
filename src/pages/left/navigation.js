
import {
    Link,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import Watch from './watch/watch'
import Feed from './feed/feed'
import Message from './message/message'
import Settings from './../header/settings'
// import Search from './pages/middle/search/search'
// import Filtered from './pages/middle/search/filtered'
import Users from './../middle/users/users'
// import Spinner from './components/spinner/spinner'

const Navigation = () => {
    return (
        <section id="navigation-route">
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
                    {/* <li>

                        <Link className="Nav_link" to="/Search" >Search</Link>
                    </li> */}
                </ul>
            </nav>
            <article className="users-list">
                <Switch>
                    <Route exact path="/">
                        <Users />
                    </Route>
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/NewsFeed" component={Feed} />
                    <Route exact path="/Watch" component={Watch} />
                    <Route exact path="/Messages" component={Message} />
                    <Route exact path="/Settings" component={Settings} />
                </Switch>
            </article>
        </section>

    )
}
const Home = () => {
    return (<><h2>Home</h2></>)
}

export default Navigation;