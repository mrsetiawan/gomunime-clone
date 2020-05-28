import {
  React,
  ReactDOM,
  Provider,
  BrowserRouter as Router 

} from './libraries/libraries.js';

import App from './App';
import * as serviceWorker from './serviceWorker';
import store from '../src/modules/redux/store/store';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
