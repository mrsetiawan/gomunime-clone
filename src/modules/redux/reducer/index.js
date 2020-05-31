import { combineReducers } from '../../../libraries/libraries';
import reducerHotSeries from './reducerHotSeries';
import reducerLatestRelease from './reducerLatestRelease';

const rootReducers = combineReducers({
  listHotSeries:reducerHotSeries,
  listLatesRelease: reducerLatestRelease
});

export default rootReducers;