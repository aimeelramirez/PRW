import "./App.css";
import Header from "./pages/header/header";
// import Ads from './pages/right/ads';
import Navigation from "./pages/left/navigation";
import LogoHeader from './assets/logo-header'
function App() {
  return (
    <>
      <LogoHeader />
      <Header />
      <Navigation />
    </>
  );
}

export default App;
