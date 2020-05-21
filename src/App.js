import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import appRoutes from './routes/appRoutes';

import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        {appRoutes.map(route => <Route key={route.name} {...route} /> )}
      </Switch>
    </Router>
  );
}

export default App;
