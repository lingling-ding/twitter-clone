import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import Explore from './Explore/Explore';
import Notifications from './Notifications/Notifications';
import Messages from './Messages/Messages';
import Bookmarks from './Bookmarks/Bookmarks';
import Lists from './Lists/Lists';
import Profile from './Profile/Profile';




function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/explore" component={Explore} />
          <Route path="/notifications" component={Notifications} />
          <Route path="/messages" component={Messages} />
          <Route path="/bookmarks" component={Bookmarks} />
          <Route path="/lists" component={Lists} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
