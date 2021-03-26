
import {
    Link,
    Route,
    Switch
} from "react-router-dom";

import Watch from './watch/watch'
import Feed from './feed/feed'
import Message from './message/message'
import Settings from './../header/settings'
// import Search from './../middle/search/search'
// import ShowFilter from './../middle/search/filtered'
import Users from './../middle/users/users'
// import Spinner from './components/spinner/spinner'
import Ads from './../right/ads'
import Context from './../../Context'

// import Quotes from './../../reducers/post/quotes'
const Navigation = () => {
    return (
        <section id="navigation-route">

            {/* <Quotes /> */}

            <nav className="Nav">
                <ul>
                    <li>
                        <Link className="Nav_link" to="/" >Home</Link>
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
                    <Context>

                        <Route exact path="/" component={() => <Users />} />

                        {/* <Route exact path="/Home" component={Home} /> */}
                        <Route exact path="/NewsFeed" render={Feed} />
                        <Route exact path="/Watch" component={Watch} />
                        <Route exact path="/Messages" component={Message} />
                        <Route exact path="/Settings" component={Settings} />
                        {/* <Route exact path="/Flitered" component={ShowFliter} /> */}
                    </Context>

                </Switch>
            </article>
            <Ads />
        </section >

    )
}
// const Home = () => {
//     return (<><h2>Home</h2></>)
// }

export default Navigation;