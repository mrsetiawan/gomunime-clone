import { axios } from '../libraries/libraries';

export const fetchHotSeries = () => {
  return dispatch => {
    dispatch(initDataStarted());
    axios.get('http://localhost:4000/data')
      .then((res) => {
        dispatch(responseHotSeries(res.data))
      })
      .catch((err) => console.log(err))
  }
}

export const fetchLatesRelease = () => {
  return dispatch => {
    dispatch(initDataStarted());
    axios.get('http://localhost:8000/data')
      .then((res) => {
        dispatch(responseLatestRelease(res.data))
      })
      .catch((err) => console.log(err))
  }
}

const initDataStarted = () => ({
  type: 'INIT_DATA_STARTED'
});

const responseHotSeries = (response) => ({
  type: 'GET_DATA_HOT_SERIES',
  payload: {
    hot_series:response
  }
});

const responseLatestRelease = (response) => ({
  type: 'GET_DATA_LATEST_RELEASE',
  payload: {
    latest_release: response
  }
});