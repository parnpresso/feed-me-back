import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './pages/Home';
import RatingPage from './pages/Rating';
import SuccessPage from './pages/Success';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/rating">
          <RatingPage />
        </Route>
        <Route path="/success">
          <SuccessPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
