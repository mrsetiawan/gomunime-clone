import { axios } from '../libraries/libraries';

export const fetchMovieList = () => {
  
  return dispatch => {
    
    dispatch(initDataStarted());

    axios.get('http://localhost:4000/data')
      .then((res) => {
        dispatch({
          type: 'GET_DATA_HOT_SERIES',
          payload: {
            hot_series: res.data
          }
        })
      })
      .catch((err) => console.log(err))
  }
}

const initDataStarted = () => ({
  type: 'INIT_DATA_STARTED'
});