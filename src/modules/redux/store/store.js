import {
  createStore,
  applyMiddleware,
  compose,
  reduxLogger,
  reduxThunk
} from '../../../libraries/libraries';
// import rootReducers from '../reducer/index';

const store = createStore(
  // rootReducers,
  compose(
    applyMiddleware(
      reduxLogger,reduxThunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store;