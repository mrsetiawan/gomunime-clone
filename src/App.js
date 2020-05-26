import { 
  React, 
  BrowserRouter as Router, Route, Switch 
} from '../src/libraries/libraries';

import appRoutes from '../src/routes/appRoutes';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        {appRoutes.map(route => <Route key={route.name} {...route} /> )}
      </Switch>
    </Router>
  );
}

export default App;
