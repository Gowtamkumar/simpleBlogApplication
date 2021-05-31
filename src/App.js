
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About/About';
import Users from './Components/Users/Users';
import Home from './Components/Home/Home';
import Posts from './Components/Posts/Posts';
import User from './Components/User/User';
import Post from './Components/Post/Post';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          
      
          <Route path="/user/:userID">
          <User />
          </Route>
          <Route path="/post/:postId">
            <Post />
          </Route>


          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
