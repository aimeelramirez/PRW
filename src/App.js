import "./App.css";
import Header from "./pages/header/header";
// import Ads from './pages/right/ads';
import Navigation from "./pages/left/navigation";
import anime from 'animejs/lib/anime.es.js';

const svgPath = document.querySelectorAll('.cls');

const svgText = anime({
  targets: svgPath,
  loop: true,
  direction: 'alternate',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 700,
  delay: (el, i) => { return i * 500 }
});
function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
    </div>
  );
}

export default App;
