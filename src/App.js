// import logo from './logo.svg';
import './App.css';
// import Posts from './view/Posts';
import Message from './view/navigation/left/message/message'
import ApiAvatars from './view/navigation/left/feed/feed'
import placer from './image.svg'
let emoji = "https://emojiapi.dev/api/v1/beaming_face_with_smiling_eyes.svg"

// import profile3 from './profile-picture3.jpeg'
// import profile4 from './profile-picture4.jpeg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={emoji} className="App-logo" alt="logo" />
        <p> A Social Media Application - TODO get routes
        </p>
        <nav>
          <ul>
            <li>
              <a
                className="App-link"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              > Home</a>
            </li>
            <li>
              <a
                className="App-link"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              > Newsfeed</a>
            </li>
            <li>
              <a
                className="App-link"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              > Messages</a>
            </li>
            <li>
              <a
                className="App-link"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              > Watch</a>
            </li>
          </ul>

        </nav>
      </header>
      <div className="container">
        <ApiAvatars />
        <div className="description">
          <p>Title</p>
          <p>Description</p>
        </div>
      </div>
      <Message />

    </div>
  );
}

export default App;
