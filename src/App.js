import './App.css';
import Posts from './view/navigation/left/message/Posts';
import ApiAvatars from './view/navigation/left/feed/feed'
import Header from './view/body/header'
import Portal from './reducers/portal'
let emoji = "https://emojiapi.dev/api/v1/beaming_face_with_smiling_eyes.svg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Portal />
        {/* <img src={emoji} className="App-logo" alt="logo" /> */}
        <h1> A Social Media Application</h1>
        <Header />
      </header>
      <div className="container">
        <ApiAvatars />
        <div className="description">
          <h2>Post:</h2>
          <p>Click to delete item. <br /> OR <br /> Fill inputs to send a post.</p>
        </div>
      </div>
      <Posts />

    </div>
  );
}

export default App;
