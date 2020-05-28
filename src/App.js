import { 
  React, 
  Route, 
  Switch 
} from '../src/libraries/libraries';
import appRoutes from '../src/routes/appRoutes';
import './App.css';

const App = () => {
  return (
    <Switch>
      {appRoutes.map(route => <Route key={route.name} {...route} /> )}
    </Switch>
  );
}

export default App;
