import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { FiCoffee } from "react-icons/fi";
import './App.css';
// import Posts from './view/left/message/Posts';
import Header from './view/header/header'
// import Portal from './reducers/portal'
// import SearchBar from './view/header/search'
import Ads from './view/right/ads';
import Watch from './view/left/watch/watch'
import Feed from './view/left/feed/feed'
import Message from './view/left/message/message'
import Navigation from './view/left/navigation'
import Settings from './view/header/settings'
import Search from './view/header/search'
import Filtered from './view/header/filtered'

// import { updateObject } from './reducers/utility'
//not sure if to to use this api since able to use emojis
// let emoji = "https://emojiapi.dev/api/v1/beaming_face_with_smiling_eyes.svg"

function App() {


  return (
    <div className="App">
      <header className="App-header">
        <h1><strong>Logo</strong><FiCoffee /></h1>
        <h2>Coffee.</h2>
        {/* This is a logo placer for that still in the works. */}
        <Header />
      </header>
      <div className="App-body">
        <div className="container-left">
          <Navigation />
        </div>
        <div className="container-center">
          <Switch>
            {/* <Route path="/" component={App}> */}
            <Redirect exact from="/" to="/Home" />
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/NewsFeed" component={Feed} />

            <Route path="/Watch" component={Watch} />

            <Route path="/Messages" component={Message} />

            <Route path="/Settings" component={Settings} />

            <Route path="/Search" component={Search} />

            <Route path="/Filtered" component={Filtered} />
            {/* </Route> */}
          </Switch>
        </div>
        <div className="container-right ">
          <Ads />
        </div>
      </div>
    </div>
  );
}
const Home = () => {
  return (<div><h2>Home</h2></div>)
}

export default App;
