import {
    Switch,
    Route,
    Redirect,
    BrowserRouter as Router

} from "react-router-dom";
import Watch from './view/left/watch/watch'
import Feed from './view/left/feed/feed'
import Message from './view/left/message/message'
import Settings from './view/header/settings'
// import Search from './view/header/search'
import Filtered from './view/header/filtered'


const Routes = () => {
    const Home = () => {
        return (<div><h2>Home</h2></div>)
    }
    return (

        <Switch>
            {/* <Redirect from='/' to='/Home' /> */}
            <Route exact path="/Home">
                <Home />
            </Route>
            {/* <Route exact path="/Users" component={ActionApi} /> */}

            <Route exact path="/NewsFeed" >
                <Feed />
            </Route>

            <Route exact path="/Watch" >
                <Watch />
            </Route>

            <Route exact path="/Messages" >
                <Message />
            </Route>

            <Route exact path="/Settings" >
                <Settings />
            </Route>

            {/* <Route path="/Search" component={Search} /> */}
            {/* <Redirect exact from="/Filtered" to="/Search" /> */}
            {/* <Route component={Search} >

            </Route> */}
            <Route path="/Filtered">
                <Filtered />
            </Route>
        </Switch>



    )

}


export default Routes;