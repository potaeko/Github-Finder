import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar.js';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import GithubState from './context/github/GithubState'; 
import AlertState from './context/alert/AlertState'; 
import './App.css';

const App = () => {
 
    return(
    <GithubState>
      <AlertState>
      <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert />
          <Switch>
            <Route exact path='/Github-Finder/' component={Home} />
            <Route exact path='Github-Finder/about' component={About} />
            <Route exact path='Github-Finder/user/:login'component={User} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
      </Router>
      </AlertState>
    </GithubState>
    );
};
  
export default App;