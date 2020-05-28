import { combineReducers } from '../../../libraries/libraries';
import reducerHotSeries from './reducerHotSeries';

const rootReducers = combineReducers({
  listMovies:reducerHotSeries
})

export default rootReducers;