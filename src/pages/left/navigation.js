import { Link, Route, Switch, Redirect } from "react-router-dom";
import Watch from "./watch/watch";
import Feed from "./feed/feed";
import Settings from "./../header/settings";
import YoutubeVideo from "./../left/watch/YoutubeVideo";
import Edit from './../../reducers/post/editPost'
import ShowFilter from './../middle/search/filtered'
import ShowInboxFilter from './../middle/search/filterInbox'

import Users from "./../middle/users/users";
import Ads from "./../right/ads";
import Context from "./../../Context";
import Inbox from './../left/message/inbox'

const Navigation = () => {
  return (
    <section id="navigation-route">
      <nav className="Nav">
        <ul>
          <li>
            <Link className="Nav_link" to="/Home">
              Home
            </Link>
          </li>
          <li>
            <Link className="Nav_link" to="/NewsFeed">
              NewsFeed
            </Link>
          </li>
          <li>
            <Link className="Nav_link" to="/Messages">
              Messages
            </Link>
          </li>
          <li>
            <Link className="Nav_link" to="/Watch">
              Watch
            </Link>
          </li>
        </ul>
      </nav>

      <article className="users-list">
        <Switch>
          <Context>
            <Redirect from="/" to="/Home" />
            <Route exact path="/Home" component={Users} />

            <Route exact path="/NewsFeed" component={Feed} />
            <Route exact path="/Watch" component={Watch} />
            <Route exact path="/Messages" component={Inbox} />
            <Route exact path="/Settings" component={Settings} />
            <Route exact path="/loadYt" component={YoutubeVideo} />
            <Route exact path="/Edit" component={Edit} />
            <Route exact path="/search/users" component={ShowFilter} />
            <Route exact path="/search/inbox" component={ShowInboxFilter} />

          </Context>
        </Switch>
      </article>
      <Ads />
    </section >
  );
};


export default Navigation;
