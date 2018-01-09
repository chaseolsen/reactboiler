import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
//You can also change HashRouter to BrowserRouter to remove /#/ from url. Still figuring out how API calls will work with it.

import Home from './js/pages/Home';
import Dashboard from './js/pages/Dashboard';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
          <h2>Welcome to my React Boilerplate</h2>
          <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/dashboard'}>Dashboard</Link></li>
          </ul>
          <hr />
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/dashboard' component={Dashboard} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
