import {
  Switch,
  Route
} from "react-router-dom";
import { FiCoffee } from "react-icons/fi";
import './App.css';
// import Posts from './pages/left/message/Posts';
import Header from './pages/header/header'
// import Portal from './reducers/portal'
// import SearchBar from './pages/header/search'
import Ads from './pages/right/ads';
import Navigation from './pages/left/navigation'

// import Watch from './pages/left/watch/watch'
// import Feed from './pages/left/feed/feed'
// import Message from './pages/left/message/message'
// import Settings from './pages/header/settings'
// // import Search from './pages/middle/search/search'
// // import Filtered from './pages/middle/search/filtered'
// import Users from './pages/middle/users/users'
// // import Spinner from './components/spinner/spinner'

function App() {
  return (
    <>
      {/* This is a logo placer for that still in the works. */}
      <Header />

      <div className="App-body">
        <Navigation />
        <div className="container-right ">
          <Ads />
        </div>
      </div>
    </>
  );
}

// const Home = () => {
//   return (<div><h2>Home</h2></div>)
// }

export default App;
