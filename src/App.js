import './App.css';
import Posts from './view/navigation/message/Posts';
import Header from './view/header/header'
// import Portal from './reducers/portal'
// import SearchBar from './view/header/search'
import { FiCoffee } from "react-icons/fi";
import Ads from './view/ads';
import Navigation from './view/navigation/navigation'
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
          <Posts />
        </div>
        <div className="container-right ">
          <Ads />
        </div>
      </div>
    </div>
  );
}

export default App;
