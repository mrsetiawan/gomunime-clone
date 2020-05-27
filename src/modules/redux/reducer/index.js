import { combineReducers } from '../../../libraries/libraries';
import reducerListMovie from './reducerListMovie';

const rootReducers = combineReducers({
  listMovies:reducerListMovie
})

export default rootReducers;