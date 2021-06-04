
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import User from './Components/User/User';
import Post from './Components/Post/Post';

import Users from './Components/Users/Users';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/user/:userID">
            <User />
          </Route>
          <Route path="/post/:postId">
            <Post />
          </Route>
          
          <Route path="/users">
            <Users />
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
