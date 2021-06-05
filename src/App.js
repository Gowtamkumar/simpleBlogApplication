
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
import { createContext, useState } from 'react';

export const PostContext = createContext()

function App() {
  const [userPost, setUserpost] = useState([])
  return (
    <PostContext.Provider value={[userPost, setUserpost]}>


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
    </PostContext.Provider>
  );
}

export default App;
