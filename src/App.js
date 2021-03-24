import {
  Switch,
  Route
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
// import Search from './view/header/search'
import Filtered from './view/header/filtered'
import ActionApi from './reducers/action/actionApi'
// import Spinner from './components/spinner/spinner'

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
            <Route path='/Home' >
              <ActionApi />
            </Route>

            <Route exact path="/NewsFeed" component={Feed} />

            <Route exact path="/Watch" component={Watch} />

            <Route exact path="/Messages" component={Message} />

            <Route exact path="/Settings" component={Settings} />

            {/* <Route path="/Search" component={Search} /> */}
            {/* <Redirect exact from="/Filtered" to="/Search" /> */}
            {/* <Route component={Search} >

            </Route> */}
            <Route path="/Filtered" component={Filtered} />
          </Switch>

        </div>
        <div className="container-right ">
          <Ads />
        </div>
      </div>
    </div >
  );
}

// const Home = () => {
//   return (<div><h2>Home</h2></div>)
// }

export default App;
