import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Dashboard from '../screens/dashboard/dashboard';
import NavBar from '../components/navBar/navBar';
import Footer from '../components/footer/footer';


function App() {
  return (
    <main>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/us/" />} />
          <Route exact path="/us/" component={Dashboard} />
        </Switch>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
