const initialState = {
  dataMovie: [],
  loading: false,
  error: null
}

const reducerHotSeries = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA_HOT_SERIES':
      return {
        ...state,
        loading: false,
        dataMovie: [...action.payload.hot_series]
      };
    case 'INIT_DATA_STARTED':
      return {
        ...state,
        loading: !state.loading
      }
    default:
      return state
  }
}

export default reducerHotSeries;