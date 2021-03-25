import './App.css';
import Header from './pages/header/header'
import Ads from './pages/right/ads';
import Navigation from './pages/left/navigation'
import {
  BrowserRouter,
  Switch,
  Link,
  Route
} from "react-router-dom";
import React, { useContext } from "react";
import { ApiContext } from "./Context";
import Context from "./Context";
const First = () => {
  const context = useContext(ApiContext);
  return (
    <div>
      <div>First Route</div>
      <ul>
        {context.map((article, index) => (
          <li key={index}>{article.name.first}</li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  return (
    <>
      {/* This is a logo placer for that still in the works. */}
      <Header />
      <div className="App-body">
        {/* <BrowserRouter>
          <div className="App">
            <h1>Router Rerendering Fix</h1>
            <ul>
              <li>
                <Link to="/">First Route</Link>
              </li>

            </ul>
            <Switch>
              <Context>
                <Route exact path="/" component={First} />
              </Context>
            </Switch>
          </div>
        </BrowserRouter> */}
        <Navigation />
        <div className="container-right ">
          <Ads />
        </div>
      </div>
    </>
  );
}

export default App;
